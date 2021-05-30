import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'

function App() {
	return (
		<div className="love-app">
			<div>
				<Header />
				<Home />
			</div>

			<Footer />
		</div>
	)
}

export default App
