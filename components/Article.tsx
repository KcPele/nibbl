import Image from 'next/image';
import {WiDirectionRight} from 'react-icons/wi';

import { person, frame1,frame2 } from '../assets';
const Article = () => {
  return (
    <div className='header__content section__padding'>
      <div className='header__content-text'>
        <h4>Organize your work life to move faster.</h4>
        <p className="app__p">In Nibbl, organized places called channels—one for each project you&apos;re working on—are the key to productivity. You can move a lot faster if you have all the individuals, communications, and data relating to a topic in one spot.</p>
        <button className='app__btn app__btn_puple '>Learn More About Channels <WiDirectionRight size={30} /></button>
        <div className='article__content-subsection_imgs'>
        <Image  src={frame1} width="247px" height="172px" alt="frame1"/>
        <Image src={frame2} width="247px" height="172px" alt="frame2"/>
        </div>
      </div>
      <div className='header__content-video'>
        <Image src={person} width="489px" height="543px" alt="person"/>
      </div>
    </div>
  )
}

export default Article;