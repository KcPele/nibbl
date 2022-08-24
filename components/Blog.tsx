import React from 'react'
import { customer1 } from '../assets'
import BlogCard from './BlogCard'
import { customerData, customerType } from '../assets/data'
const Blog = () => {
  return (
    <div className='flex__wrapper-container startedcard__container section__margin-top section__padding'>

        {
            customerData?.map((value: customerType) => {
                return <BlogCard key={value.id} id={value.id} image={value.image} title={value.title} subtitle={value.subtitle}/>
            })
        }
    </div>
  )
}

export default Blog