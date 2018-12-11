import React, { Component, Fragment} from 'react';
import axios from 'axios';
import { DragDropContext} from 'react-beautiful-dnd';
import Navbar from './Navbar';
import PollDroppable from './PollDroppable';
import PollSelectionModal from './PollSelectionModal';
import PollSuccessModal from './PollSuccessModal';
import LoadingIcon from './LoadingIcon';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};

class PollSelection extends Component {
    state = {
        poll: null,
        error: false,
        success: false,
        modalStatus: 'closed',
        itemLength: 0,
        items: [],
        selected: []
    };

    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );
            let state = { items };
            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }
            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };
    componentWillMount(){
        document.title = 'Make Your Poll Selections | InstantRCV';
        this.pollID = this.props.match.params.pollID;
        this.voterID = this.props.match.params.voterID;
        axios.get(`/api/poll/${this.pollID}/voter/${this.voterID}`)
        .then( res => {
            if(res.data){
                let items = res.data.options.map( (item, index) => ({
                    id: `${item.replace(/ /, '')}${index}`,
                    content: item
                }))
                this.setState({poll: res.data, items, itemLength: items.length});
            }
            else{
                this.setState({error: true})
            }
        })
        .catch(() => {
            this.setState({error: true})
        })
    }
    resetItems = () => {
        let initItems = [...this.state.poll.options];
        let items = initItems.map( (item, index) => ({
            id: `${item.replace(/ /, '')}${index}`,
            content: item
        }))
        this.setState({items, selected: []});
    }
    handleSubmit = () => {
        if(this.state.selected.length !== this.state.itemLength){
            window.alert('Please rank all options before submitting your vote')
        }
        else{
            this.setState({modalStatus: 'open'})
        }
    }
    handleSuccess = () => {
        this.setState({success: true, modalStatus: 'closed'})
    }
    renderContent(){
        if(this.state.error){
            return(
                <div>
                    This poll could not be loaded or does not exist.
                </div>
            )
        }
        else if (!this.state.poll){
            return(
                <div>
                    <LoadingIcon />
                    Loading...
                </div>
            )
        }
        else if (this.state.poll.voted){
           return(
                <div>
                    You have already voted in this poll. <a href={`/poll/${this.pollID}/results`}style={{color: "#fff", textDecoration: "underline"}}>Click here to view the results</a>.
                </div>
           )
        }
        return(
            <div style={{maxWidth: 800, margin: 'auto'}}>
                <h1 className='text-center' style={{marginBottom: 10}}>{this.state.poll.title}</h1>
                <div className='p-10 text-center'>Please rank the provided options in order 
                    from most preferable to least preferable</div>
                <div className='border-holder'></div>
                <div className='row' style={{marginBottom: 20}}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <div className='col-2-always p-5'>
                            <div className='text-center font-18 p-5'>OPTIONS</div>
                            <PollDroppable items={this.state.items} droppableId='droppable' itemLength={this.state.itemLength} />
                        </div>
                        <div className='col-2-always p-5'>
                            <div className='text-center font-18 p-5'>SELECTIONS</div>
                            <PollDroppable items={this.state.selected} droppableId='droppable2' itemLength={this.state.itemLength} />
                        </div>
                    </DragDropContext>
                </div>
                <div className='border-holder'></div>
                <div className='text-right'>
                    <button onClick={() => this.resetItems()} className='btn btn-black m-10'>RESET</button>
                    <button onClick={() => this.handleSubmit()} style={{width: 130, fontSize: 22}} className='btn btn-orange m-10 box-shadow'>SUBMIT</button>
                </div>
            </div>
        )
    }
    render() {
        return(
            <Fragment>
                <Navbar/>
                <div className='main-container text-center'>
                    {this.renderContent()}
                </div>
                <PollSelectionModal 
                handleModalClose={() => this.setState({modalStatus: 'closed'})}
                handleSuccess={this.handleSuccess}
                modalStatus={this.state.modalStatus}
                title={this.props.title}
                selections={this.state.selected.map( ({content}) => content)}
                pollID={this.pollID}
                voterID={this.voterID}
                />
                {this.state.success && <PollSuccessModal pollID={this.pollID}/>}
            </Fragment>
        )
    }
}

export default PollSelection;