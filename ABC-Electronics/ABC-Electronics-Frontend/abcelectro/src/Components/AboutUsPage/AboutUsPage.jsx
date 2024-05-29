import React from 'react'

import './AboutUsPage.css';
import AboutUsPic from '../../Assets/aboutUsImages/360_F_636360143_g6f0Pp843joz8EdUVsMnKVujyLS9vZ7f-removebg-preview.png'
import NavBar from '../NavBar/NavBar';

const AboutUsPage = () => {
    
  return (
    <>
        <NavBar/>
        <div className="MainHeadingSection">
            <div className="mask"></div>
            <h1>About Us</h1>
        </div>
        <div className="AboutUsDetailsSection">
            <div className="leftAboutUsDetailsSection">
                <img width='300px' src={AboutUsPic} alt="" />
            </div>
            <div className="rightAboutUsDetailsSection">
                <h1>Our Story</h1>
                <p>
                    Welcome to ABC-Electronics, your go-to platform for resolving product-related concerns with ease. We understand the frustration that comes with encountering issues, be it technical glitches or non-technical discrepancies. Our user-friendly interface empowers customers to swiftly report complaints, ensuring detailed information for efficient resolution.<br/>
                    <br/>
                    Behind our operation is a dedicated team of experienced engineers, ready to tackle every reported issue head-on. With expertise spanning various domains, they meticulously analyze each complaint, devising tailored solutions for customer satisfaction. Whether it's troubleshooting technical malfunctions or addressing non-technical grievances, ABC-Electronics stands as your reliable partner for prompt and effective resolution. Join us today and experience seamless complaint handling like never before!</p>
                <h2>Yaswanth Santosh Kumar Karri</h2>
                <h4>Full-Stack Developer, ABC-Electronics</h4>
            </div>
        </div>
    </>
  )
}

export default AboutUsPage