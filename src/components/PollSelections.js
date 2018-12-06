import React, {Component, Fragment} from 'react';
import CustomDraggable from './CustomDraggable';
import PollSelectionModal from './PollSelectionModal';
import SuccessModal from './SuccessModal';
import {ordinals} from '../utils';

//http://localhost:3000/poll/5c02d6eb82bf802145f7e9b6/voter/5c02d6eb82bf802145f7e9b7

class PollSelections extends Component{
    state = {
        draggables: [],
        selections: [],
        modalStatus: 'closed',
        success: false
    }
    componentWillMount(){
        this.placeholders = [];
        let draggables = [];
        for(let i = 0; i < this.props.options.length; i++){
            draggables.push({selection: null, position: {x: 0, y: 0}});
        }
        this.setState({draggables})
    }
    handleSuccess = () => {
        this.setState({success: true, modalStatus: 'closed'})
    }
    setPosition = (data, index) => {
        let newSelection = true;
        let draggables = [...this.state.draggables];
        for(let i = 0; i < draggables.length; i++){
            if(draggables[i].selection === data.selection && i !== index){
                newSelection = false;
            }
        }
        if(newSelection || (!data.selection && draggables[index].selection !== null)){
            draggables[index] = data;
            this.setState({draggables});
        }
    }
    renderOptions = () => {
        return this.props.options.map( (option, index) =>{
            return (
                    <CustomDraggable 
                        key={`opt-${index}`}
                        option={option} 
                        placeholders={this.placeholders} 
                        index={index} 
                        data={this.state.draggables[index]} 
                        setPosition={this.setPosition}
                    />
            )
        })
    }
    renderPlaceholders = () => {
        return this.props.options.map( (opt, index) =>{
            return (<div ref={el => this.placeholders[index] = el} key={`placeholder-${index}`} className='draggable-selection'>
                        <span>Drag your {ordinals[index]} choice here</span>
                    </div>)
        })
    }
    resetDraggables = () => {
        let len = this.state.draggables.length;
        let draggables = [];
        for(let i = 0; i < len; i++){
            draggables.push({selection: null, position: {x: 0, y: 0}})
        }
        this.setState({draggables});
    }
    handleSubmit = () =>{
        let draggables = this.state.draggables;
        let selections = [...draggables].map( d => null);
        let canSubmit = true;
        for (let i = 0; i < draggables.length; i++){
            if(draggables[i].selection === null){
                canSubmit = false;
                break;
            }
            else{
                selections[draggables[i].selection] = this.props.options[i]
            }
        }
        if(canSubmit){
            this.setState({modalStatus: 'open', selections})
        }
        else{
            window.alert('You must rank all options before submitting.')
        }
    }
    render(){
        return(
            <Fragment>
                <div style={{maxWidth: 900, margin: 'auto', padding: 10}}>
                    <h1 className='text-center'>{this.props.title}</h1>
                    <div className='p-10 text-center'>Please rank the provided options in order 
                    from most preferable to least preferable</div>
                    <div className='border-holder'></div>
                    <div className='row'>
                        <div className='col-2-always p-10'>
                            <div className='text-center font-18'>OPTIONS</div>
                            {this.renderOptions()}
                        </div>
                        <div className='col-2-always p-10'>
                            <div className='text-center font-18'>SELECTIONS</div>
                            {this.renderPlaceholders()}
                        </div>
                    </div>
                    <div className='border-holder'></div>
                    <div className='text-right'>
                        <button onClick={() => this.resetDraggables()} className='btn btn-black m-10'>RESET</button>
                        <button onClick={() => this.handleSubmit()} style={{width: 130, fontSize: 22}} className='btn btn-orange m-10 box-shadow'>SUBMIT</button>
                    </div>
                </div>
                <PollSelectionModal 
                handleModalClose={() => this.setState({modalStatus: 'closed'})}
                handleSuccess={this.handleSuccess}
                modalStatus={this.state.modalStatus}
                title={this.props.title}
                selections={this.state.selections}
                pollID={this.props.pollID}
                voterID={this.props.voterID}
                />
                {this.state.success && <SuccessModal pollID={this.props.pollID}/>}
            </Fragment>
        )
    }
}

export default PollSelections;