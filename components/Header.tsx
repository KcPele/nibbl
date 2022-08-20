import React from 'react'
import Image from 'next/image'
import { video } from '../assets'
import {WiDirectionRight} from "react-icons/wi"
const Header = () => {
  return (
    <div className='header__content section__padding'>
        <div className='header__content-text'>
            <h3 className=''>Manage your space easily with <span className='header__context-text_logo'>Nibbl.</span></h3>
            <div className='header__context-subsection'>
                <p>As the name says, Nibble will show you how to manage your space in a gentle manner.</p>
                <div className='header__context-button flex__wrapper'>
                    <button className=' app__btn_white'>Get Started</button>
                    <button className='btn__learn-more app__btn_puple'>Learn More <WiDirectionRight size={24} /> </button>
                </div>
            </div>
        </div>
        <div className='header__content-video'>
            <Image className='header__content-video_img' src={video}   width="523px" height="344px" />
        </div>
    </div>
  )
}

export default Header