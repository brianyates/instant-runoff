import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import LoadingIcon from './LoadingIcon';
import PollSelections from './PollSelections';

class PollSelectionParent extends Component{
    state = {
        poll: null,
        draggables: null,
        error: false
    }
    componentWillMount(){
        document.title = 'Make Your Poll Selections | InstantRCV';
        this.pollID = this.props.match.params.pollID;
        this.voterID = this.props.match.params.voterID;
        axios.get(`/api/poll/${this.pollID}/voter/${this.voterID}`)
        .then( res => {
            if(res.data){
                this.setState({poll: res.data});
            }
            else{
                this.setState({error: true})
            }
        })
        .catch(() => {
            this.setState({error: true})
        })
    }
    renderContent(){
        if(this.state.error){
            return (
                <div className='p-10 text-center font-18'>
                    This poll no longer exists or could not be loaded.
                </div>
            )
        }
        else if(this.state.poll){
            if(this.state.poll.voted){
                return(<div className='p-10 text-center font-18'>
                            You have already voted in this poll. <a style={{color: '#fff', textDecoration: 'underline'}} href={`/poll/${this.pollID}/results`}>Click here to view the results</a>.
                        </div>)
            }
            return <PollSelections 
                    pollID={this.pollID}
                    voterID={this.voterID}
                    options={this.state.poll.options} 
                    title={this.state.poll.title} />
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
                <Navbar />
                <div className='main-container'>
                    {this.renderContent()}
                </div>
            </Fragment>
        )
    }
}

export default PollSelectionParent;