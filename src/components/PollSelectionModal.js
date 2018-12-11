import React, {Component} from 'react';
import axios from 'axios';
import LoadingIcon from './LoadingIcon';
import {ordinals} from '../utils';

class PollSelectionModal extends Component {
    state = {
        submitting: false,
        error: false
    }
    handleSubmit = () => {
        this.setState({submitting: true})
        axios.post(`/api/poll/${this.props.pollID}/voter/${this.props.voterID}`, this.props.selections)
        .then( res =>{
            if(res.status===202){
                this.props.handleSuccess();
            }
            else{
                this.setState({error: true, submitting: false});
            }
        })
        .catch( () => {
            this.setState({error: true, submitting: false});
        })
    }
    renderSelections = () => {
       return this.props.selections.map( (selection, index) => {
            return(<tr key={`r-${index}`}>
                        <td><strong>{ordinals[index]} Choice:</strong></td>
                        <td>{selection}</td>
                    </tr>
                )
        })
    }
    render(){
        const {modalStatus, title, handleModalClose} = this.props;
        return(
            <div className={`text-center modal-backdrop ${modalStatus}`}>
                <div className='modal-container p-10'>
                    <div style={{fontSize: 28, marginBottom: 20}}>{title}</div>
                    <p style={{marginBottom: 20, fontSize: 16}}>Please confirm your poll entries are correct before submitting</p>
                    <div style={{borderBottom: '1px solid #ddd', borderTop: '1px solid #ddd', padding: '10px 10px 20px 10px', margin: '20px auto'}}>
                        <div style={{color: '#444', letterSpacing: 3, marginBottom: 20, fontSize: 22, textDecoration: 'underline'}}>YOUR SELECTIONS</div>
                        <div>
                            <table className='table'>
                                <tbody>
                                    {this.renderSelections()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {this.state.submitting ? <div className='text-right p-5'><LoadingIcon /></div> : (<div className='text-right'>
                        <button onClick={() => handleModalClose()} className='btn btn-white m-10'>Cancel</button>
                        <button onClick={() => this.handleSubmit()} className='btn btn-orange btn-orange-2 m-10'>Looks good!</button>
                    </div>)}
                    {this.state.error && <div style={{color: '#d24425'}} className='text-right p-10'>An error occurred. Please try again later.</div>}
                </div>
            </div>
        )
    }
}

export default PollSelectionModal;