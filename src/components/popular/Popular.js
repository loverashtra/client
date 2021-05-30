import React from 'react'
import './popular.scss'
import PopularCard from './PopularCard'

function Popular() {
  return (
		<div style={{margin:'30px 0'}} >
			<h2>popular</h2>
			<div className="love-popular-wrap">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
					<PopularCard key={item} popularName="candal" img="https://adijha.com/dp.jpg" />
				))}
			</div>
		</div>
	)
}

export default Popular
