import React from 'react'
import Image from 'next/image'
import { laptop, facebook, google, design } from '../assets'
const Usage = () => {
  return (
    <div className='section__padding'>
    <div className='usage__content'>
        <div className='usage__content-subsection'>
            <p>Used by over 10,000 people and teams</p>
            <div className='usage__content-logos'>
            <Image className='google'  src={google} width="99" height="30" />
            <Image className='facebook' src={facebook} width="146" height="28" />
            <Image className='design' src={design} width="220" height="28" />
            </div>
        </div>
        <div className='usage__content-img'>
            <div>
            <Image className='usage__content-img_laptop' src={laptop} width="607" height="344" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Usage