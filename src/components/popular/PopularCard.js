import React from 'react'

function PopularCard({ popularName, img }) {
	return (
		<div
			style={{
				height: '240px',
				width: '200px',
				backgroundColor: 'white',
				margin: '0 20px',
				border: '1px solid red',
				borderRadius: '20px',
			}}
		>
			<img
				alt={popularName}
				src={img}
				style={{
					height: '100px',
					objectFit: 'contain',
					margin: '30px',
				}}
			/>
			<p style={{ textAlign: 'center' }}>{popularName}</p>
		</div>
	)
}

export default PopularCard
