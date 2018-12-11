import React from 'react';

const PollSuccessModal = ({pollID}) => {
    return(
        <div>
            <div className={`text-center modal-backdrop open`}>
                <div className='modal-container p-10'>
                    <div style={{color: '#2c74c1', fontSize: 49, marginBottom: 15}}>Success!</div>
                    <div style={{borderBottom: '1px solid #ddd', borderTop: '1px solid #ddd', padding: '20px 10px', margin: '20px auto'}}>
                        <div style={{margin: 'auto', maxWidth: 400}}>
                            We have successfully received your voting results. Now what would you like to do next?
                        </div>
                    </div>
                    <div className='text-right'>
                        <a href='/' className='btn btn-white m-10'>Go Home</a>
                        <a href={`/poll/${pollID}/results`} className='btn btn-orange btn-orange-2 m-10'>View Results</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PollSuccessModal;