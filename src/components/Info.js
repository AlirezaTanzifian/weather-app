import React from 'react';
import MyIcon from './MyIcon';

const Info = (props) => {
    const { lat, lon, temp, temp_max, temp_min, humidity, pressure, wind } = props.response
    return (
        <div className='flex flex-col justify-center items-center text-white'>
            <div className='w-full flex justify-evenly md:text-lg mb-5'>
                <div className='flex align-baseline'>
                    <span className='mr-1'>کمترین دما: { temp_min ? temp_min : "0" }</span>
                    <MyIcon icon="carbon:temperature-min" color="White" size="25px" />
                </div>
                <div className='flex align-baseline'>
                    <span className='mr-1'>دما: { temp ? temp : "0" }</span>
                    <MyIcon icon="fluent:temperature-16-regular" color="White" size="27px" />
                </div>
                <div className='flex align-baseline'>
                    <span className='mr-1'>بیشترین دما: { temp_max ? temp_max : "0" }</span>
                    <MyIcon icon="carbon:temperature-max" color="White" size="25px" />
                </div>
            </div>
            <div className='flex flex-col mb-5'>
                <div className='flex align-baseline mb-3'>
                    <span className='mr-1'>فشار هوا: { pressure ? pressure : "0" }</span>
                    <MyIcon icon="gg:push-down" color="White" size="22px" />
                </div>
                <div className='flex align-baseline mb-3'>
                    <span className='mr-1'>رطوبت هوا: { humidity ? humidity : "0" }</span>
                    <MyIcon icon="carbon:humidity" color="White" size="22px" />
                </div>
                <div className='flex align-baseline mb-3'>
                    <span className='mr-1'>سرعت باد: { wind ? wind : "0" }</span>
                    <MyIcon icon="tabler:brand-speedtest" color="White" size="22px" />
                </div>
            </div>
            <div className='w-full md:w-3/4 flex justify-between'>
                <div className='flex align-baseline mb-3'>
                    <span className='mr-1'>طول جغرافیایی: { lon ? lon : "0" }</span>
                    <MyIcon icon="mdi:longitude" color="White" size="22px" />
                </div>
                <div className='flex align-baseline mb-3'>
                    <span className='mr-1'>عرض جغرافیایی: { lat ? lat : "0" }</span>
                    <MyIcon icon="mdi:latitude" color="White" size="22px" />
                </div>
            </div>
        </div>
    );
};

export default Info;