import React from 'react'
import Navbar from './Navbar'
import './styles/About.scss'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo reprehenderit veritatis ipsam hic sapiente quae adipisci, eos iure animi temporibus, pariatur maxime velit. Ut tempore possimus dignissimos unde sequi praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, porro. Sequi recusandae officiis odio eos quisquam magni, dolor voluptatem distinctio incidunt fugit, nihil ullam quod modi eum minus doloribus quasi atque, quos repudiandae architecto soluta expedita excepturi! Qui, nesciunt esse dolorem repudiandae ratione, excepturi suscipit consectetur maxime omnis voluptates ex?</p>
        </div>
    </div>
  )
}

export default About