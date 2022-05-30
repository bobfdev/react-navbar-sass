import React from 'react'
import Navbar from './Navbar'
import './styles/Careers.scss'

const Careers = () => {
  return (
    <div>
      <Navbar />
      <div className="careers">
        <h1>Careers</h1>
      </div>
      <div className="opportunity">
       <h1>Job #1</h1>
      <div className="description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vitae sed recusandae. Omnis voluptatum ex non quia laborum? Laudantium inventore fugit sapiente reprehenderit quasi aliquam saepe voluptatibus obcaecati voluptatum similique, sint, corrupti placeat tenetur reiciendis illum accusamus accusantium beatae dicta necessitatibus maxime minus veritatis ipsam. Enim, placeat! Sunt, dolorum dolorem.</p>
      </div>
      </div>
      <div className="opportunity">Job #2</div>
      <div className="opportunity">Job #3</div>
      <div className="opportunity">Job #4</div>
    </div>
  )
}

export default Careers