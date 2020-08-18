import mts from '../assets/mts.png'
import megaphone from '../assets/megaphone2.jpg'
import beeline from '../assets/beeline.png'
import { LOCALES } from '../i18n/locales'

const SET_OFFSET = 'SET_OFFSET'
const CHANGE_TO_ENGLISH_LANGUAGE = 'CHANGE_TO_ENGLISH_LANGUAGE'
const CHANGE_TO_RUSSIAN_LANGUAGE = 'CHANGE_TO_RUSSUIAN_LANGUAGE'

const initialState = {
   operators: [
      { id: 1, name: 'МТС', imgPath: mts },
      { id: 2, name: 'Билайн', imgPath: beeline },
      { id: 3, name: 'Мегафон', imgPath: megaphone },
      { id: 4, name: 'Четвертый', imgPath: megaphone },
      { id: 5, name: 'Пятый', imgPath: megaphone },
      { id: 6, name: 'Шестой', imgPath: megaphone },
      { id: 7, name: 'Седьмой', imgPath: megaphone },
      { id: 8, name: 'Восьмой', imgPath: megaphone },
      { id: 9, name: 'Девятый', imgPath: megaphone },
      { id: 10, name: 'Десятый', imgPath: megaphone }
   ],
   offset: 3,
   language: LOCALES.RUSSIAN
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_TO_ENGLISH_LANGUAGE:
         return {
            ...state,
            language: LOCALES.ENGLISH
         }
      case CHANGE_TO_RUSSIAN_LANGUAGE:
         return {
            ...state,
            language: LOCALES.RUSSIAN
         }
      case SET_OFFSET:
         return {
            ...state,
            offset: state.offset + 3
         }
      default:
         return state
   }
}

export const setOffset = () => ({ type: SET_OFFSET })
export const changeToEnglish = () => ({ type: CHANGE_TO_ENGLISH_LANGUAGE })
export const changeToRussian = () => ({ type: CHANGE_TO_RUSSIAN_LANGUAGE })