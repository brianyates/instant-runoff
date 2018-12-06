import React, {Component} from 'react';
import Draggable from 'react-draggable';
import _ from 'lodash';

const CLOSE_ENOUGH = 80;

class CustomDraggable extends Component{
    state = {
        initialPosition: null,
        element: null
    }
    componentWillMount(){
        window.addEventListener('resize', _.debounce(this.handleResize, 100));
    }
    componentWillUnmount(){
        window.removeEventListener('resize', _.debounce(this.handleResize, 100));
    }
    handleResize = () => {
        let {x, y} = this.state.element.getBoundingClientRect();
        this.setState({initialPosition: {x,y}});
    }
    handleRef = element => {
        if(element && !this.state.element){
            let {x, y} = element.getBoundingClientRect();
            this.setState({element, initialPosition: {x,y}});
        }
    }
    handleStop = (e, ui) => {
        let closeEnough = false;
        let {x, y} = ui.node.getBoundingClientRect();
        let ph = this.props.placeholders;
        for(let i = 0; i < ph.length; i++){
            let dims = ph[i].getBoundingClientRect();
            let x2 = dims.x;
            let y2 = dims.y;
            let distance = Math.sqrt((x2-x)*(x2-x) + (y2-y)*(y2-y));
            if(distance < CLOSE_ENOUGH){
                let init = this.state.initialPosition;
                this.props.setPosition({selection: i, position: {x: x2- init.x, y: y2 - init.y}}, this.props.index);
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