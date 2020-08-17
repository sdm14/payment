import mts from '../assets/mts.png'
import megaphone from '../assets/megaphone2.jpg'
import beeline from '../assets/beeline.png'

const SET_OFFSET = 'SET_OFFSET'

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
   offset: 3
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
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