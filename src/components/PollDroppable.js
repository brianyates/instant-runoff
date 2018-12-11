import React, {Component} from 'react';
import {Droppable, Draggable } from 'react-beautiful-dnd';
import {ordinals} from '../utils';

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    height: 100,
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    background: isDragging ? '#333' : '#ffc107',
    color: isDragging ? '#fff' : '#333',
    boxShadow: isDragging ? '0 2px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px 1px rgba(0,0,0,.12)' : 'none',
    border: '1px solid #555',
    borderRadius: 5,
    zIndex: 99999,
    ...draggableStyle
});

const getListStyle = (isDraggingOver, itemLength) => ({
    background: isDraggingOver ? '#bbb' : '#777',
    padding: 10,
    width: '100%',
    height: (110 * itemLength) + 10,
    position: 'relative'
});

class PollDroppable extends Component{
    renderPlaceholders = (dragValue) => {
        let placeholders = [];
        for (let i = 0; i < this.props.itemLength; i++){
            placeholders.push(
                <div className='item-placeholder' key={`ph-${i}`} style={{display: this.props.items.length + dragValue > i ? 'none': 'flex', top: i * 110 + 10}}>
                    Drag your {ordinals[i]} choice here
                </div>
            )
        }
        return placeholders;
    }
    render(){
        return(
            <Droppable droppableId={this.props.droppableId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver, this.props.itemLength)}>
                    {this.props.items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}>
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {this.props.droppableId==='droppable2' && this.renderPlaceholders(snapshot.isDraggingOver ? 1 : 0)}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        )
    }
}

export default PollDroppable;