import React,{Fragment} from 'react';

const LoadingIcon = ({text}) => {
    return(
        <Fragment>
            <div className='loading-container' alt="Loading...">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='p-10'>{text}</div>}
        </Fragment>
    )
}
export default LoadingIcon;