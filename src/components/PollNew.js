import React, {Component, Fragment} from 'react';
import FormInput from './FormInput';
import Navbar from './Navbar';
import Icon from './Icon';
import PollConfirmationModal from './PollConfirmationModal';
import PollCreatedModal from './PollCreatedModal';
import {inputValidation, emailValidation, nameValidation} from '../utils';

class PollNew extends Component {
    state = {
        inputCount: 3,
        values: {
            emails: '',
            title: '',
            createdBy: '',
            options: ['', '', '', '', '', '', '', '', '', '']
        },
        errors: {
            emails: '',
            title: '',
            createdBy: '',
            options: ['', '', '', '', '', '', '', '', '', '']
        },
        hasError: false,
        submitted: false,
        pollID: null,
        modalStatus: 'closed'
    }
    componentWillMount(){
        document.title = 'Create a New Poll | InstantRCV';
    }
    handleChange = (value, name, index = null) => {
        let values = Object.assign({}, this.state.values);
        if(index){
            values.options[index-1] = value;
        }
        else{
            values[name] = value;
        }
        this.setState({values}, this.validateInputs);
    }
    validateInputs = (callback) => {
        let hasError = false;
        let errors = Object.assign({}, this.state.errors);
        errors.emails = emailValidation(this.state.values.emails);
        errors.title = inputValidation(this.state.values.title);
        errors.createdBy = nameValidation(this.state.values.createdBy);
        if(errors.emails || errors.title) {hasError = true}
        for (let i = 0; i < this.state.inputCount; i++){
            errors.options[i] = inputValidation(this.state.values.options[i]);
            if(errors.options[i]){hasError = true}
        }
        this.setState({errors, hasError}, callback);
    }
    submitAction = () => {
        if(!this.state.hasError){
            this.setState({modalStatus: 'open'})
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true}, this.validateInputs(this.submitAction));
    }
    handleSuccess = pollID => {
        this.setState({pollID, modalStatus: 'closed'})
    }
    addInput = () => {
        this.setState({inputCount: this.state.inputCount+1});
        this.submitBtn.scrollIntoView({ behavior: "smooth" });
    }
    removeInput = index => {
        let values = Object.assign({}, this.state.values);
        values.options[index-1] = '';
        let len = values.options.length;
        for(let i = index - 1; i < len - 1; i++){
            values.options[i] = values.options[i+1]
        }
        values.options[len] = '';
        this.setState({values, inputCount: this.state.inputCount - 1});
    }
    isDisabled = () => {
        return this.state.inputCount >= this.state.values.options.length
    }
    renderInputs = () => {
        let inputArr=[];
        for(let i = 0; i < this.state.inputCount; i++){
            inputArr.push(<FormInput 
                            key={`option${i}`}
                            type='text' 
                            name={`option$${i}`} 
                            label={`Enter voting option #${i+1}`}
                            index={i+1}
                            value={this.state.values.options[i]}
                            error={this.state.errors.options[i]}
                            submitted={this.state.submitted}
                            handleChange={this.handleChange}
                            removeInput={this.removeInput}
                            />)
        }
        return inputArr;
    }
    render(){
        return(
            <Fragment>
                {this.state.modalStatus === 'open' && <PollConfirmationModal 
                                                        modalStatus={'open'} 
                                                        values={this.state.values} 
                                                        handleModalClose={() => this.setState({modalStatus: 'closed'})}
                                                        handleSuccess={this.handleSuccess}
                                                        />}
                {this.state.pollID && <PollCreatedModal pollID={this.state.pollID} />}
                <Navbar />
                <div className='main-container'>
                    <h1 className='text-center'>Create a New RCV Poll</h1>
                    <div className='p-10 text-center' style={{margin: 'auto', maxWidth: 600}}>*Limit 10 voting options per poll. Please separate each vote recipient's email address with a comma.</div>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <input type="hidden" value="something" />
                            <FormInput 
                                type='text' 
                                name='createdBy' 
                                label='Enter your full name' 
                                value={this.state.values.createdBy} 
                                error={this.state.errors.createdBy}
                                submitted={this.state.submitted}
                                handleChange={this.handleChange} 
                            />
                            <FormInput 
                                type='text' 
                                name='emails' 
                                label='Enter voter emails' 
                                value={this.state.values.emails} 
                                error={this.state.errors.emails}
                                submitted={this.state.submitted}
                                handleChange={this.handleChange} 
                            />
                            <FormInput 
                                type='text' 
                                name='title' 
                                label='Enter a poll title' 
                                value={this.state.values.title}
                                error={this.state.errors.title}
                                submitted={this.state.submitted}
                                handleChange={this.handleChange} 
                            />
                            {this.renderInputs()}
                            <div style={{paddingBottom: 20}}>
                                <button 
                                ref={el => this.submitBtn = el}
                                className={`float-right btn btn-orange`}
                                >SUBMIT POLL</button>
                            </div>
                        </form>
                        <button 
                            style={{marginTop: -20}}
                            className={`float-left btn btn-white${this.isDisabled() ? ' disabled': ''}`}
                            disabled={this.isDisabled()}
                            onClick={() => this.addInput()}><Icon icon='plus' color='#333'/> <span>Add Option</span></button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PollNew;