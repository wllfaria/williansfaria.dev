import React, { createContext, useEffect, useReducer } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyles, FontStyles, DarkTheme, LightTheme } from '../styles'

export interface IAppThemeState {
	theme: DefaultTheme
	toggleTheme: () => void
}

type TAppThemeActionsTypes = 'SHOW_DARK_MODE' | 'SHOW_LIGHT_MODE'

type TAppThemeActions = {
	type: TAppThemeActionsTypes
	payload: DefaultTheme
}

type TReduceHandler = {
	[key in TAppThemeActionsTypes]: (action: TAppThemeActions) => IAppThemeState
}

const initialState: IAppThemeState = {
	theme: LightTheme,
	toggleTheme: () => null
}

export const AppThemeContext = createContext<IAppThemeState>(initialState)

const reducer = (state: IAppThemeState, action: TAppThemeActions) => {
	const reducerHandler: TReduceHandler = {
		SHOW_LIGHT_MODE: action => {
			return { ...state, theme: action.payload }
		},
		SHOW_DARK_MODE: action => {
			return { ...state, theme: action.payload }
		}
	}

	return reducerHandler[action.type](action)
}

const AppThemeState: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		const savedTheme = window.localStorage.getItem('wllfariatheme')
		if (!savedTheme) return
		const themeParsed = JSON.parse(savedTheme)
		state.theme.title !== themeParsed && toggleTheme()
	}, [])

	const toggleTheme = () => {
		const darkModeAction: TAppThemeActions = {
			type: 'SHOW_DARK_MODE',
			payload: DarkTheme
		}
		const lightModeAction: TAppThemeActions = {
			type: 'SHOW_LIGHT_MODE',
			payload: LightTheme
		}
		window.localStorage.setItem('wllfariatheme', JSON.stringify(state.theme.title === 'Dark' ? 'Light' : 'Dark'))
		dispatch(state.theme.title === 'Light' ? darkModeAction : lightModeAction)
	}

	const contextValue = {
		...state,
		toggleTheme
	}

	return (
		<AppThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={state.theme}>
				<GlobalStyles />
				<FontStyles />
				{children}
			</ThemeProvider>
		</AppThemeContext.Provider>
	)
}

export default AppThemeState
