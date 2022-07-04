import { useReducer } from "react";
import { TranslateContext } from "./TranslateContext";
import { translateReducer } from "./TranslateReducer";

const INITIAL_STATE: any = {
    language: localStorage.getItem('language') || 'es'
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TranslateProvider = ({ children }: props) => {
    const [translateState, dispatch] = useReducer(translateReducer, INITIAL_STATE);

    const updateLanguage = (language: string) => {
        dispatch({ type: 'update', payload: language });
    }

    return (
        <TranslateContext.Provider value={{ translateState, updateLanguage }}>
            { children }
        </TranslateContext.Provider>
    )
}