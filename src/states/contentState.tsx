import React, { createContext, useReducer } from 'react'
import { TArticle } from '../utils'

export interface IContentState {
	articles: TArticle[]
	bookNotes: TArticle[]
	setArticles: (articles: TArticle[]) => void
	setBookNotes: (bookNotes: TArticle[]) => void
}

type TContentStateActionTypes = 'SET_ARTICLES' | 'SET_BOOK_NOTES'

type TContentStateActions = {
	type: TContentStateActionTypes
	payload: TArticle[]
}

type TReduceHandler = {
	[key in TContentStateActionTypes]: (action: TContentStateActions) => IContentState
}

const initialState: IContentState = {
	articles: null,
	bookNotes: null,
	setArticles: () => null,
	setBookNotes: () => null
}

export const ContentContext = createContext<IContentState>(initialState)

const reducer = (state: IContentState, action: TContentStateActions) => {
	const reducerHandler: TReduceHandler = {
		SET_ARTICLES: action => {
			return { ...state, articles: action.payload }
		},
		SET_BOOK_NOTES: action => {
			return { ...state, bookNotes: action.payload }
		}
	}
	return reducerHandler[action.type](action)
}

const ContentState: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const setArticles = (articles: TArticle[]) => {
		dispatch({ type: 'SET_ARTICLES', payload: articles })
	}

	const setBookNotes = (bookNotes: TArticle[]) => {
		dispatch({ type: 'SET_BOOK_NOTES', payload: bookNotes })
	}

	const contextValue = {
		...state,
		setArticles,
		setBookNotes
	}
	return <ContentContext.Provider value={contextValue}>{children}</ContentContext.Provider>
}

export default ContentState
