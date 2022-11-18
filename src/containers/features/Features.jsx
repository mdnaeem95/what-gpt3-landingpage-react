import React from 'react'
import './Features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Improving and distrusts instantly',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis modi reprehenderit vero optio inventore! Odio sunt consequatur in explicabo, hic eum quae sint aliquid!"
  },
  {
    title: 'Become the tended active',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis modi reprehenderit vero optio inventore! Odio sunt consequatur in explicabo, hic eum quae sint aliquid!"
  },
  {
    title: 'Message or am nothing',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis modi reprehenderit vero optio inventore! Odio sunt consequatur in explicabo, hic eum quae sint aliquid!"
  },
  {
    title: 'Really boy law county',
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis modi reprehenderit vero optio inventore! Odio sunt consequatur in explicabo, hic eum quae sint aliquid!"
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To REalize It. Step into the Future Today and Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Features