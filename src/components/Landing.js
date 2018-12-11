import React, {Fragment} from 'react';
import Navbar from './Navbar';
//import thumbsUp from '../images/thumbs_up.svg';
import landingImg from '../images/landing_img.png'
import sunImg from '../images/sun.png';

const Landing = () => {
    return(
        <Fragment>
            <Navbar />
            <div className='main-container mc-2 landing-page-container row'>
                <div className='landing-col-2 landing-section-1'>
                    <div style={{maxWidth: 500, margin: 'auto', position: 'relative'}}>
                        <img alt='Sun' src={sunImg} className='sun-img' />
                        <img alt='Voting' src={landingImg} width='100%'/>
                    </div>
                </div>
                <div className='landing-col-2 landing-section-2'>
                    <div style={{maxWidth: 500}}>
                        <div className='landing-big-text'>Create Your Own RCV Poll</div>
                        <div className='landing-small-text'> Use our free tool to create your own Ranked Choice 
                        Voting (RCV) polls. Simply build your poll, and we'll share it with your voters through email!</div>
                    </div>
                </div>
            </div>
            <div className='row' style={{padding: '50px 20px'}}>
                <div className='landing-col-2'>
                    <div style={{maxWidth: 500, margin: 'auto'}}>
                        <div className='landing-big-text'>How It Works</div>
                        <p className='landing-p'>
                        Ranked Choice Voting (RCV), also known as Instant-runoff voting, is a type of preferential voting method used in single-seat elections with 
                        more than two candidates. Instead of voting only for a single candidate, voters in RCV elections 
                        can rank the candidates in order of preference. Ballots are initially counted for each elector's top choice, 
                        losing candidates are eliminated, and ballots for losing candidates are redistributed until one 
                        candidate is the top remaining choice of a majority of the voters. 
                        When the field is reduced to two, it has become an "instant runoff" that allows a comparison 
                        of the top two candidates head-to-head. You can also learn more by reading <a target='_blank' rel='noopener noreferrer' className='link' href='https://en.wikipedia.org/wiki/Instant-runoff_voting'>this Wikipedia article</a>.</p>
                    </div>
                </div>
                <div className='landing-col-2 landing-vid-container' style={{maxWidth: 600, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <iframe title='How RCV Works - YouTube' width="100%" height='370px' src="https://www.youtube.com/embed/_5SLQXNpzsk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className='text-center' style={{padding: '50px 20px', background: '#333', color: '#fff'}}>
                <div className='landing-big-text'>Now You're In The Know...</div>
                <p style={{fontSize: 20, maxWidth: 650, margin: '10px auto 30px'}}> So why not give RCV a shot for 
                your next important (or not important) group decision? It's 100% free, and we'll never send an email that you didn't ask for. Do it for America!</p>
                <div className='p-10'>
                    <a href='/new-poll' className='btn btn-white'>Create a New RCV Poll</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;