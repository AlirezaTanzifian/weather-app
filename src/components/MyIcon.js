import React from 'react';

import { Icon } from '@iconify/react';

const MyIcon = (props) => {
    return (
        <div className='flex justify-center items-center'>
            <Icon style={{color: `${props.color}`, fontSize: `${props.size}`}} icon={props.icon} /> 
        </div>
    );
};

export default MyIcon;