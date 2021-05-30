import React from 'react'
import './categories.scss'
import CategoryCard from './CategoryCard'

function Categories() {
	return (
		<div style={{ margin: '30px 0' }}>
			<h2>Category</h2>
			<div className="love-category-wrap">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
					<CategoryCard
						key={item}
						categoryName="candal"
						img="https://adijha.com/dp.jpg"
					/>
				))}
			</div>
		</div>
	)
}

export default Categories
