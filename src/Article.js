import React from 'react'
import moment from 'moment'
const Article = ({ title, snippet, date, length, onClick }) => {
	return (
		<article className='post'>
			<div className='post-header'>
				<h2>{title}</h2>
				<button className='btn' onClick={onClick}>
					Remove
				</button>
			</div>

			<div className='post-info'>
				<span>{moment(date).format('dddd Do, YYYY')}</span>
				<span>{length} min read</span>
			</div>
			<p>{snippet}</p>
		</article>
	)
}

export default Article
