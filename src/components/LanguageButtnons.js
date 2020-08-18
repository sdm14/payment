import React from 'react'
import { changeToRussian, changeToEnglish } from '../reducer/mainReducer'
import { useDispatch } from 'react-redux'

export const LanguageButtons = () => {
   const dispatch = useDispatch()

   const changeToEnglishLang = () => {
      dispatch(changeToEnglish())
   }

   const changeToRussianLang = () => {
      dispatch(changeToRussian())
   }

   return (
      <div className="btn__lang__wrapper">
         <button className="btn__lang" onClick={changeToEnglishLang}>English</button>
         <button className="btn__lang" onClick={changeToRussianLang}>Русский язык</button>
      </div>
   )
}