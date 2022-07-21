import React from 'react'
import topCategories from '../../../data/topCategories'
import './categrories.css';

const Categories = () => {
    return (
        <div className='categories_section container'>
            <h1>Browse with top categories</h1>
            <div className='categories_wrapper'>
                {
                    topCategories.map((category, index) =>
                        <div className='category_card' style={{'background': category.bgColor}} key={index}>
                            <img src={category.image} width={50} height={50} alt="" />
                            <span>{category.name}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Categories