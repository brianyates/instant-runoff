import React, {Component} from 'react';
import logo from '../images/logo.svg';

class Navbar extends Component{
    render() {
        return(
            <nav>
                <a title='InstantRCV' href='/' className='float-left logo nav-items'>
                    <span><img alt='Logo' src={logo} /></span>
                    <span className='orange-1'>Instant</span><span className='orange-2'>RCV</span>
                </a>
                <div className='float-right nav-items'>
                    <a href='/new-poll' className='btn nav-btn'>
                        <span></span>
                        <span>Create a Poll</span>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;

