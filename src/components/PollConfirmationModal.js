import React, {Component} from 'react';
import LoadingIcon from './LoadingIcon';
import axios from 'axios';

class PollConfirmationModal extends Component {
    state = {
        submitting: false,
        error: false
    }
    handleSubmit = () => {
        this.setState({submitting: true});
        axios.post('/api/create-poll', this.props.values)
        .then( ({data, status}) => {
            if(status===201){
                this.props.handleSuccess(data)
            }
            else{
                this.setState({error: true, submitting: false});
            }
        })
        .catch( err => {
            console.log(err);
            this.setState({error: true, submitting: false});
        })
    }
    renderEmails = () => {
        return this.props.values.emails.split(',').map( (email, i) => {
            return <li key={`${email + i}`}>{email.trim()}</li>
        })
    }
    renderOptions = () => {
        return this.props.values.options.filter(i => i.length > 0).map( (option, i) => {
            return (<li key={`option-${i}`}>{option}</li>)
        })
    }
    render(){
        const {modalStatus, values, handleModalClose} = this.props;
        return(
            <div className={`modal-backdrop ${modalStatus}`}>
                <div className='modal-container p-10'>
                    <div style={{fontSize: 32, marginBottom: 10}} className='text-center'>Confirmation</div>
                    <p style={{marginBottom: 20, fontSize: 16, textAlign: 'center'}}>Please confirm your poll entries are correct before submitting</p>
                    <div className='confirmation-values p-10' style={{borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>
                        <div><strong>Poll Title: </strong>{values.title}</div>
                        <div>
                            <strong>Voting Options:</strong>
                            <div>
                                <ul style={{paddingLeft: 30}}>
                                    {this.renderOptions()}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <strong>Email Recipients:</strong>
                            <div>
                                <ul style={{paddingLeft: 30}}>
                                    {this.renderEmails()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {this.state.submitting ? <div className='text-right p-5'><LoadingIcon /></div> : (<div className='text-right'>
                        <button onClick={() => handleModalClose()} className='btn btn-white m-10'>Cancel</button>
                        <button onClick={() => this.handleSubmit()} className='btn btn-orange btn-orange-2 m-10'>Looks Good!</button>
                    </div>)}
                    {this.state.error && <div style={{color: '#d24425'}} className='text-right p-10'>An error occurred. Please try again later.</div>}
                </div>
            </div>
        )
    }
}

export default PollConfirmationModal;