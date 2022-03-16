import { useNavigate } from 'react-router-dom';
import './home.css'
import Navbar from  '../navbar/Navbar'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import img9 from '../../images/img9.jpg'
import img10 from '../../images/img10.jpg'
import img11 from '../../images/img11.jpg'
import img12 from '../../images/img12.jpg'
import img13 from '../../images/img13.jpg'
import img14 from '../../images/img14.jpg'
import img15 from '../../images/img15.jpg'
import img16 from '../../images/img16.jpg'
import profile1 from '../../images/profile1.jpg'
import img17 from '../../images/img17.jpg'
import img18 from '../../images/img18.jpg'
import adilimg from '../../images/adil.jfif'

import {   BiDotsHorizontalRounded } from "react-icons/bi";



import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react";
 
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import axios from 'axios'
// import "swiper/css/navigation";
// import 'swiper/css/pagination';

const Home = props => {

  let navigate = useNavigate();
  
  const [user, setUser] = useState(null)

  const getUser = async () => {
    const res = await axios.get("/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    setUser(res.data)
  }

  useEffect(() => {
    getUser()
     
  }, [])
 

 function Logout(){
    localStorage.removeItem("token")
     navigate("/login")

  }
  if (!localStorage.getItem("token")) {
    navigate("/login")
  }
  
  
    return (
        <div>
            <Navbar />

           <div className='container1'>
                <div className='box1'>

      <Swiper
        slidesPerView={9}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{

          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
                    <SwiperSlide>
                        <img src={img5} alt='img'/>
                        <p>simolife...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img6} alt='img'/>
                    <p>youcand...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img7} alt='img'/>
                    <p>gitcoder</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img8} alt='img'/>
                    <p>javascript...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img9} alt='img'/>
                    <p>python_1...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img10} alt='img'/>
                    <p>coder.lea...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img11} alt='img'/>
                    <p>codingho...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img12} alt='img'/>
                    <p>tiffinteck...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img13} alt='img'/>
                    <p>jamalben...</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img14} alt='img'/>
                    <p>garyvee</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img15} alt='img'/>
                    <p>joeel56</p>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={img16} alt='img'/>
                    <p>codecade...</p>
                    </SwiperSlide>
</Swiper>
                </div>
  
        <div className='right3'>
          <div className='flex4'>
            <img src={adilimg} alt='profile' />
          </div>
          <div className='flex4'>

          <h3>adil.dev1</h3>

            <h5>adil marghadi</h5>
            </div>
            <div className='flex4'>
              <h2 >Suggestions For You</h2>
            </div>
            <div className='flex4'>
              <h6>© 2022 INSTAGRAM FROM META
</h6>
            </div>
        </div>
<div className='box5'>

<div className='box4'>
       
       <div className='top'>
                 <img src={profile1} alt='profile' />
                 <p>joeel56</p> 
             <BiDotsHorizontalRounded className='dots'/>
             </div>
             <img src={img17} className='img2' alt='img' />
           <div className='bottom1'>
             <div className='left1'>

           <svg aria-label="Like" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>

           <svg aria-label="Comment" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

           <svg aria-label="Share Post" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
           </div>

         <div className='right1'>
         <svg aria-label="Save" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
         </div>

           </div>
         <h2>1,557 likes</h2>
         <h3><span className='big'>joeel56</span> Coffee time ✨🥰</h3>
         <h3>What a perfect day to code all day long 💥🌚
</h3>

 </div>

    


 <div>
    </div>

    <div className='box4'>
          <div className='top'>
                    <img src={profile1} alt='profile' />
                    <p>joeel56</p> 
                <BiDotsHorizontalRounded className='dots'/>
                </div>
                <img src={img18} className='img2' alt='img' />
              <div className='bottom1'>
                <div className='left1'>

              <svg aria-label="Like" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>

              <svg aria-label="Comment" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

              <svg aria-label="Share Post" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>

            <div className='right1'>
            <svg aria-label="Save" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </div>

              </div>
            <h2>6,352 likes</h2>
            <h3><span className='big'>
tiffintech</span> Monday vibes! Which mood are you today?!
 
</h3>
            <h3>Mood when I close my computer after solving a difficult problem (not seen: days of feeling imposter syndrome for not being able to solve it)! Reminder to embrace the learning process! 💡

</h3>

        </div>
    </div>
            </div>
            </div>
         
    )
}

export default Home;