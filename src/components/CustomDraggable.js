import React, {Component} from 'react';
import Draggable from 'react-draggable';

const CLOSE_ENOUGH = 80;

class CustomDraggable extends Component{
    state = {
        initialPosition: null,
        element: null
    }
    componentWillMount(){
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        let scrollLeft = document.documentElement.scrollLeft;
        let scrollTop = document.documentElement.scrollTop;
        let {x, y} = this.state.element.getBoundingClientRect();
        this.setState({initialPosition: {x: x + scrollLeft, y: y + scrollTop}}, this.resizeReset());
    }
    resizeReset = () => {
        let selection = this.props.data.selection;
        if(selection !== null){
            let dims = this.props.placeholders[selection].getBoundingClientRect();
            let x2 = dims.x + document.documentElement.scrollLeft;
            let y2 = dims.y + document.documentElement.scrollTop;
            let init = this.state.initialPosition;
            this.props.setPosition({selection, position: {x: x2 - init.x, y: y2 - init.y}}, this.props.index);
        }
    }
    handleRef = element => {
        if(element && !this.state.element){
            let scrollLeft = document.documentElement.scrollLeft;
            let scrollTop = document.documentElement.scrollTop;
            let {x, y} = element.getBoundingClientRect();
            this.setState({element, initialPosition: {x: x + scrollLeft, y: y + scrollTop}});
        }
    }
    handleStop = (e, ui) => {
        let closeEnough = false;
        let {x, y} = ui.node.getBoundingClientRect();
        let ph = this.props.placeholders;
        let scrollLeft = document.documentElement.scrollLeft;
        let scrollTop = document.documentElement.scrollTop;
        x += scrollLeft;
        y += scrollTop;
        for(let i = 0; i < ph.length; i++){
            let dims = ph[i].getBoundingClientRect();
            let x2 = dims.x + scrollLeft;
            let y2 = dims.y + scrollTop;
            let distance = Math.sqrt((x2-x)*(x2-x) + (y2-y)*(y2-y));
            if(distance < CLOSE_ENOUGH){
                let init = this.state.initialPosition;
                this.props.setPosition({selection: i, position: {x: x2 - init.x, y: y2 - init.y}}, this.props.index);
                closeEnough = true;
                break;
            }
        }
        if(!closeEnough){
            this.props.setPosition({selection: null, position: {x: 0, y: 0}}, this.props.index);
        }
    }
    render(){
        const {option, index, data: {position}} = this.props;
        return(
            <div ref={el => this.handleRef(el)} className='draggable-placeholder'>
                <span>Option #{index+1}</span>
                <Draggable
                    onStop={this.handleStop}
                    position={position}
                >
                    <div className='draggable-option'>{option}</div>
                </Draggable>
            </div>
        )
    }
}

export default CustomDraggable;