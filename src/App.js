import React, { useState, useEffect } from 'react';
import "./App.css"

import MyIcon from './components/MyIcon';
import Info from './components/Info';
import { Button, Modal, Input, message } from 'antd';
import axios from 'axios';

const App = () => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    state: '',
    city: '',
    data: {}
  })

  const [info, setInfo] = useState({
    state: 'تهران',
    city: 'تهران',
    apiKey: '86b0bd9b76517148d71f0967cc7de574'
  })

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setInfo({ state: "", city: "", apiKey: info.apiKey });
    setOpen(false);
  };

  const getWeatherInfo = async () => {
    try {
      setLoading(true)
      if ( info.state && info.city ) {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${info.state.trim()},${info.city.trim()}&appid=${info.apiKey}`)
        let result = {
          lat: res.data.coord.lat,
          lon: res.data.coord.lon,
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure,
          wind: res.data.wind.speed
        }
        setWeather({ state: info.state, city: info.city, data: result })
        if (open) {
          message.success('درخواست با موفقیت ارسال شد')
          setOpen(false)
        }
      }
      else {
        // throw new Error("پر کردن تمامی فیلد ها اجباری است")
      }
    } catch (e) {
      console.log(e)
      message.error("خطا در ارسال اطلاعات")
      message.error(e)
    } finally {
      setLoading(false)
      setInfo({...info, state: '', city: ''})
    }
  }

  const changeHandler = (event) => {
    if (event.target.name === 'state') {
      setInfo({ ...info, state: event.target.value })
    } else if (event.target.name === 'city') {
      setInfo({ ...info, city: event.target.value })
    }
  }

  const handleOk = async () => {
    setWeather({ ...weather, state: info.weather, city: info.city })
    await getWeatherInfo()
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])


  return (
    <div>
      <div className='background'></div>
      <div className='w-full h-fit absolute top-2/4 left-2/4 translate-y-[-50%]	
        translate-x-[-50%] py-5 px-[10px] bg-[rgba(0,0,0,0.4)] md:w-1/2'>
        {/* <h1 className='text-3xl text-white font-semibold'>Weather App</h1> */}
        <div className='flex flex-col justify-center items-center text-white mb-5'>
          <span className='text-2xl font-bold'>
            {weather.state && weather.state} - {weather.city && weather.city}
          </span>
          {/* <span className='text-xl mt-2'>آفتابی</span> */}
          {/* <MyIcon icon="mdi:weather-dust" color="#fff" size="30px" /> */}
        </div>
        <hr className='my-5 w-5/6 mx-auto text-white' />
        <Info response={weather.data} /> 
        <hr className='my-5 w-5/6 mx-auto text-white' />
        <div className='flex justify-center items-center'>
          <Button className='bg-primary flex items-center py-5' type='primary' onClick={showModal}>
            <MyIcon icon="fluent:location-28-filled" color="#fff" size="22px" />
            <span className='ml-2 text-base'>تغییر مکان</span>
          </Button>
          <Modal
            title="تعیین موقعیت"
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <div className='flex justify-between' key="footer">
                <Button 
                className='bg-primary' 
                type="primary" 
                key="submit" 
                onClick={handleOk} 
                loading={loading}>ارسال</Button>
                <Button key="back" onClick={handleCancel}>بازگشت</Button>
              </div>
            ]}
          >
            <div className='py-3'>
              <div className='mb-3'>
                <label className='mr-2 text-base'>استان</label>
                <Input name='state' value={ info.state } onChange={ changeHandler } placeholder='نام استان خود را وارد کنید' />
              </div>
              <div>
                <label className='mr-2 text-base'>شهر</label>
                <Input name='city' value={ info.city } onChange={ changeHandler } placeholder='نام شهر خود را وارد کنید' />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default App;
