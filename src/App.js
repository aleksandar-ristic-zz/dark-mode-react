import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
	let theme = false

	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}

	return theme
}

function App() {
	const [theme, setTheme] = useState(getStorageTheme())
	const [articles, setArticles] = useState(data)

	const toggleTheme = () => {
		setTheme(prevValue => !prevValue)
	}

	const handleDelete = id => {
		const newArticles = articles.filter(article => article.id !== id)

		setArticles(newArticles)
	}

	const handleRestart = () => setArticles(data)

	useEffect(() => {
		if (theme) {
			document.documentElement.className = 'dark-theme'
		} else {
			document.documentElement.className = ''
		}

		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<main>
			<nav>
				<div className='nav-center'>
					<h1>Overreactive</h1>
					<button className='btn toggle' onClick={toggleTheme}>
						toggle
					</button>
				</div>
			</nav>
			<section className='articles'>
				{articles.map(item => {
					return (
						<Article
							key={item.id}
							{...item}
							onClick={() => handleDelete(item.id)}
						/>
					)
				})}

				{articles.length < 1 && (
					<section className='articles'>
						<div className='center-btn'>
							<button className='btn restart' onClick={handleRestart}>
								Restore Items
							</button>
						</div>
					</section>
				)}
			</section>
		</main>
	)
}

export default App
