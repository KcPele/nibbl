import React from 'react'
import {BsFacebook, BsTwitter} from "react-icons/bs"
import { AiFillInstagram } from  "react-icons/ai"
const Footer = () => {
  return (
    <div className='footer__container section__padding flex__wrapper-container'>
        <div className='footer__content flex__wrapper-container startedcard__container'>
            <ul className='startedcard__content'>
                <li className='footer__content-header'>why Nibbl?</li>
                <li className='app__p'>Channels</li>
                <li className='app__p'>Engagement</li>
                <li className='app__p'>Scale</li>
                <li className='app__p'>Watch Demo</li>
            </ul>
            <ul className='startedcard__content'>
                <li className='footer__content-header'>Product</li>
                <li className='app__p'>Features</li>
                <li className='app__p'>Integrations</li>
                <li className='app__p'>Enterprise</li>
                <li className='app__p'>Solutions</li>
            </ul >
            <ul className='startedcard__content'>
                <li className='footer__content-header'>Pricing</li>
                <li className='app__p'>Plans</li>
                <li className='app__p'>Paid Vs. Free</li>
            </ul>
        </div>
        <div className='footer__container-copyright flex__wrapper-container startedcard__container'>
            <p style={{"color":"#9795B7"}} className='app__p'>Copyright © 2022 Nibbl</p>
            <div className='footer__icons flex__wrapper-container'>
                <BsFacebook size={28} />
                <BsTwitter size={28}/>
                <AiFillInstagram size={28}/>
            </div>
        </div>
    </div>
  )
}

export default Footer