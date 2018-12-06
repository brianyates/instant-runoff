import React,{Fragment} from 'react';

const LoadingIcon = ({classOption}) => {
    return(
        <Fragment>
            <div className={`${classOption || 'loading-container'}`} alt="Loading...">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {classOption && <div className='p-10'>Loading...</div>}
        </Fragment>
    )
}
export default LoadingIcon;