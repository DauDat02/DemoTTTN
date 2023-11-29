import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            <div>
              <p>Established in 2020, RentUP is Vietnam's leading real estate trading platform, pioneering development in the region through Commerce & Technology. Currently, with a large platform and payment system, RentUP has become a part of consumers' lives and aims to serve millions of customers across Vietnam by 2030.</p>
              <p>In Vietnam, RentUP is a familiar real estate platform for millions of consumers because of its diversity of housing types, application of technology to real estate and optimal customer care service. Notably, in addition to regular attractive monthly online promotion programs, RentUP also attracts users with super large Sales Festivals throughout the year,
                these are considered investment moments not to be missed. missed by real estate enthusiasts nationwide.</p>
            </div>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
