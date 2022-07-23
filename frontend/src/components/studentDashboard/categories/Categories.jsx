import React from 'react';
import trendingCategories from '../../../data/StudentDashboardCategories';
import './Categories.css'
import CategoryCard from './categoryCard/CategoryCard';

const Categories = () => {
  return (
    <div className='trending_cat_wrapper'>
        {
            trendingCategories.map((category,index)=>
                <CategoryCard image={category.image} name={category.title} key={index} />
            )
        }
    </div>
  )
}

export default Categories