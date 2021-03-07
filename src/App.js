import React, { useEffect, useState } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { AiFillFire } from 'react-icons/ai'
import { FaWater } from 'react-icons/fa'
import { GiShadowFollower } from 'react-icons/gi'
import history from './_utils/history'

import Navbar from './components/Navbar'

import Fire from './pages/Fire'
import Water from './pages/Water'
import Shadow from './pages/Shadow'

import GlobalStyles from './styles/GlobalStyles'
import Description from './components/Description'

const TYPES = [
	{
		exact: true,
		id: 'fire',
		idType: 10,
		title: 'Pokémon de Fogo',
		icon: AiFillFire,
		description:
			'Os Pokémon de fogo são ótimos para pessoas que gostam de calor! Aconselhável para pessoas que não moram em casas de madeira ヽ(◉◡◔)ﾉ',
		path: ['/', '/fogo'],
		component: Fire
	},
	{
		id: 'water',
		title: 'Pokémon de Água',
		idType: 11,
		icon: FaWater,
		description:
			'Os Pokémon aquáticos pra quem adora tomar banho. Espero que você tenha uma piscina ¯\\_(ツ)_/¯',
		path: '/agua',
		component: Water
	},
	{
		id: 'shadow',
		title: 'Pokémon da Escuridão',
		idType: 17,
		icon: GiShadowFollower,
		description:
			'Ótimos companheiros para pessoas que não saem de casa ou que odeiam sol (ง •̀_•́)ง',
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
	const [type, setType] = useState(TYPES[0])
	useEffect(() => {
		history.listen(({ pathname }) => {
			const getType = TYPES.find((type) => {
				if (Array.isArray(type.path)) {
					return type.path.includes(pathname)
				} else {
					return type.path === pathname
				}
			})
			if (getType) {
				setType(getType)
			} else {
				setType(TYPES[0])
			}
		})
	}, [])
	return (
		<Router history={history}>
			<Navbar variant={type.id} title={type.title} />
			<Description type={type.id} icon={type.icon}>
				<type.icon />
				{type.description}
			</Description>
			<Switch>
				{TYPES.map((item) => (
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
