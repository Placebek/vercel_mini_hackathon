import Login from './components/auth/Login'
import Header from './components/main/Header'
import Home from './components/main/Home'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import ProfileMenu from './components/profile/ProfileMenu'
import Footer from './components/main/Footer'

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-zinc-600'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<Home />
							<Footer />
						</>
					}
				/>

				<Route
					path='/auth/login'
					element={
						<>
							<Header />
							<Login />
							<Footer />
						</>
					}
				/>
				<Route
					path='/auth/register'
					element={
						<div className='h-screen bg-zinc-600'>
							<Header />
							<Register />
							<Footer />
						</div>
					}
				/>
				<Route
					path='/profile'
					element={
						<div className='h-screen bg-zinc-300'>
							<Header />
							<ProfileMenu />
							<Footer />
						</div>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
