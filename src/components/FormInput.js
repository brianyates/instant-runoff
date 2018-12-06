import React, {Component} from 'react';

class FormInput extends Component{
    state={
        focused: false
    }
    handleFocus = () => {
        this.setState({focused: true, touched: true});
    }
    handleBlur = () => {
        this.setState({focused: false})
    }
    hasError = () => {
        return (this.props.submitted && this.props.error)
    }
    render(){
        const {type, name, label, value, index, error} = this.props;
        return(
            <div className={`input-container${this.state.focused ? ' focused' : ''}${this.hasError() ? ' has-error' : ''}`}>
                <div className='input-label-container'>
                <div className={`label${this.state.focused || this.props.value ? ' focused' : ''}`}>{label}</div>
                    <input 
                        autoComplete="off"
                        className='form-input' 
                        type={type} 
                        name={name} 
                        onFocus={() => this.handleFocus()} 
                        onBlur={() => this.handleBlur()}
                        value={value}
                        onChange={event => this.props.handleChange(event.target.value, name, index)}
                    />
                </div>
                <div className='border-container'>
                    <div className='border-filler'></div>
                </div>
                <div className='error-msg'>{(this.hasError()) && error}</div>
                {index > 3 && <button 
                                className='remove-item' 
                                title='Remove this voting option' 
                                onClick={() => this.props.removeInput(index)}>
                                <span>&times;</span>
                                </button>}
            </div>
        )
    }
}

export default FormInput;