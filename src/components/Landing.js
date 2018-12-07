import React, {Fragment} from 'react';
import Navbar from './Navbar';
import thumbsUp from '../images/thumbs_up.svg';

const Landing = () => {
    return(
        <Fragment>
            <Navbar />
            <div className='main-container mc-2 landing-page-container row'>
                <div className='col-2 landing-section-1'>
                    <div style={{maxWidth: 500, margin: 'auto', padding: 20}}>
                    <img alt='Thumbs up' src={thumbsUp} width='80%' className='thumb-img' />
                    </div>
                </div>
                <div className='col-2 landing-section-2'>
                    <div style={{maxWidth: 500}}>
                        <div className='landing-big-text'>Create Your Own RCV Poll</div>
                        <div className='landing-small-text'> Use our free tool to create your own Ranked Choice 
                        Voting (RCV) polls. Simply build your poll, and we'll share it with your voters through email!</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;