import React, {Component, Fragment} from 'react';
import Navbar from './Navbar';
import LoadingIcon from './LoadingIcon'
import axios from 'axios';
import {ordinals} from '../utils';

class PollResults extends Component{
    state = {
        poll: null,
        error: false
    }
    componentWillMount(){
        document.title = "View Poll Results | InstantRCV"
        this.pollID = this.props.match.params.pollID;
        axios.get(`/api/results/${this.pollID}`)
        .then( res => {
            if(res.status === 200){
                this.setState({poll: res.data});
            }
            else{
                this.setState({error:true});
            }
        })
        .catch( () => {
            this.setState({error: true})
        })
    }
    renderVoters(){
        if(this.state.poll){
            let voters = this.state.poll.voters.filter( v => v.voted);
            if(this.state.poll.allVotesReceived){
                return(
                    <Fragment>
                        <div style={{margin: '20px auto', borderTop: '1px solid #fff', textAlign: 'left', fontSize: 24}}>Voter Selections:</div>
                        <div className='row'>
                            {voters.map( (v,i) => {
                                return (<div key={`voter${i}`} className='col-3 p-10'>
                                            <div className='voter box-shadow'>
                                                <div className='email font-18'>{v.email}</div>
                                                <table className='table'>
                                                    <tbody>
                                                        {v.selections.map( (sel, i) => {
                                                            return (<tr key={`row-${i}`}>
                                                                        <td><strong>{ordinals[i]} Choice:</strong></td>
                                                                        <td>{sel}</td>
                                                                    </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>)
                            })}
                        </div>
                    </Fragment>
                )
            }
            if(voters.length > 0){
                return(
                    <Fragment>
                        <div style={{margin: '20px auto', borderTop: '1px solid #fff', textAlign: 'left', fontSize: 24}}>Voter Selections:</div>
                        <div className='row'>
                            {voters.map( (v,i) => {
                                return (<div key={`voter${i}`} className='col-3 p-10'>
                                            <div className='voter box-shadow'>
                                                <div className='email'>{v.email}</div>
                                                <div title='Voter selections are hidden until all votes are received' style={{cursor: 'help', marginTop: 10, color: '#e6e6e6', fontSize: 16}}>(RESULTS HIDDEN)</div>
                                            </div>
                                        </div>)
                            })}
                        </div>
                    </Fragment>
                )
            }
        }
    }
    renderPendingVoters(){
        if(this.state.poll){
            let pendingVoters = this.state.poll.voters.filter( v => !v.voted);
            if(pendingVoters.length > 0){
                return(
                    <Fragment>
                        <div style={{margin: '40px auto 20px', borderTop: '1px solid #fff', textAlign: 'left', fontSize: 24}}>Pending Voters:</div>
                        <div className='row'>
                            {pendingVoters.map( (pv, i) => {
                                return (<div key={`pending-${i}`}className='col-3 p-10'><div className='pending-voter box-shadow'>{pv.email}</div></div>)
                            })}
                        </div>
                    </Fragment>
                )
            }
        }
    }
    renderWinner(){
        if(this.state.poll.winner){
            return (<Fragment>
                        <div style={{letterSpacing: 5, fontSize: 24, borderBottom: '1px solid #ddd', width: '80%', margin: '10px auto'}}>WINNER</div>
                        <div style={{paddingBottom: 10, color: '#ffc107', letterSpacing: 5, fontSize: 44}}>{this.state.poll.winner}</div>
                    </Fragment>
                    )
        }
        return <div style={{fontSize: 20, padding: 10}}>No winner has been determined yet...</div>
    }
    renderContent() {
        if(this.state.error){
            return (
                <div className='p-10 text-center font-18'>
                    This poll no longer exists or could not be loaded.
                </div>
            )
        }
        else if(this.state.poll){
            return (<div className='text-center'>
                        <h1 style={{borderBottom: '1px solid #f9f9f9', maxWidth: '100%'}}>VIEW RESULTS</h1>
                        <div style={{margin: '70px auto 20px', fontSize: 24, letterSpacing: 4}}>{this.state.poll.title}</div>
                        <div className='winner-section'>
                            {this.renderWinner()}
                        </div>
                        <div className='progress box-shadow'>
                            <span>{((this.state.poll.votesReceived/this.state.poll.totalVoters)*100).toFixed(0)}% votes received</span>
                            <div className='progress-bar-container' style={{width: `${(this.state.poll.votesReceived/this.state.poll.totalVoters)*100}%`}}>
                                <div className='progress-bar'></div>
                            </div>
                        </div>
                        {this.renderVoters()}
                        {this.renderPendingVoters()}
                    </div>
                )
        }
        return (
            <div className='p-10 text-center'>
                <LoadingIcon classOption='loading-2' />
            </div>
        )
    }
    render(){
        return(
            <Fragment>
                <Navbar/>
                <div className='main-container'>
                    <div style={{maxWidth: 1000, margin: 'auto', padding: 10}}>
                        {this.renderContent()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PollResults;