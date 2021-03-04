import React, { useEffect, useState } from 'react'
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import history from './_utils/history'

import Navbar from './components/Navbar'

import Fire from './pages/Fire'
import Water from './pages/Water'
import Shadow from './pages/Shadow'

import GlobalStyles from './styles/GlobalStyles'

const routes = [
	{
		exact: true,
		id: 'fire',
		label: 'Fogo',
		path: ['/', '/fogo'],
		component: Fire
	},
	{
		id: 'water',
		label: 'Água',
		path: '/agua',
		component: Water
	},
	{
		id: 'shadow',
		label: 'Sombra',
		path: '/sombra',
		component: Shadow
	}
]

function RouteComponent({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(routeProps) => <Component {...routeProps} {...rest} />}
		/>
	)
}

export default function App() {
	const [variant, setVariant] = useState('fire')
	useEffect(() => {
		history.listen(({ pathname }) => {
			const getVariant = routes.find((route) => {
				if (Array.isArray(route.path)) {
					return route.path.includes(pathname)
				} else {
					return route.path === pathname
				}
			})
			if (getVariant) {
				setVariant(getVariant.id)
			} else {
				setVariant('fire')
			}
		})
	}, [])
	return (
		<Router history={history}>
			<Navbar variant={variant} title="oi" />
			<Link to="/fogo">fogo</Link>
			<Link to="/agua">água</Link>
			<Link to="/sombra">sombra</Link>
			<Switch>
				{routes.map((item) => (
					<RouteComponent
						exact={item.exact}
						key={item.id}
						path={item.path}
						component={item.component}
						{...item}
					/>
				))}
				<Redirect from="*" to="/" />
			</Switch>
			<GlobalStyles />
		</Router>
	)
}
