import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quod quo repellendus enim molestias, consequatur quaerat facere rerum modi maiores adipisci veritatis harum distinctio tempore!"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id possimus deserunt, eligendi sint dignissimos praesentium."/>
        <Feature title = "Knowledge Base" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id possimus deserunt, eligendi sint dignissimos praesentium."/>
        <Feature title = "Education" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id possimus deserunt, eligendi sint dignissimos praesentium."/>
      </div>
    </div>
  )
}

export default whatGPT3