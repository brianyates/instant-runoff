import React from 'react';

const vectors = {
    plus: {path: 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
        viewBox: '0 0 448 512'}
};

const Icon = ({color, icon, width}) =>{
    return(
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox={vectors[icon].viewBox} style={{width}}><path fill={color} d={vectors[icon].path}></path></svg>
    )
}

export default Icon;