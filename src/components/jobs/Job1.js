import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import '../styles/Job1.scss'

const Job1 = () => {
  return (
    <div>
        <Navbar />
        <div className="job1">
            <h1>Job 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta repellat consequuntur id. Neque labore deleniti quasi molestiae illo harum fuga modi sunt ad, ducimus asperiores natus qui necessitatibus libero pariatur vero sint, veniam accusantium tempore quas corrupti numquam cumque voluptas at? Nesciunt dicta repudiandae nihil deleniti aut animi vero?</p>
            <Link to='/careers/job1/apply'>
                <button>Apply</button>
            </Link>
        </div>
    </div>
  )
}

export default Job1