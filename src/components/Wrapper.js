import React from 'react'
import { OperatorList } from './OperatorList'
import { useSelector, useDispatch } from 'react-redux'
import { setOffset } from '../reducer/mainReducer'
import translate from '../i18n/messages/translate'
import { LanguageButtons } from './LanguageButtnons'

export const Wrapper = (props) => {

   const dispatch = useDispatch()
   const operators = useSelector(state => state.main.operators)
   const offset = useSelector(state => state.main.offset)

   const arrayItems = operators.slice(0, offset)

   const changeOffset = () => {
      dispatch(setOffset())
   }


   return (
      <div className="header__wrapper">
         <LanguageButtons />
         <div className="header__title">{translate('list-of-operators')}</div>
         <div className="operator__wrapper">
            {arrayItems.map(el => <OperatorList el={el} key={el.id} />)}
         </div>
         <button className="show__more" onClick={changeOffset}>{translate('show-more')}</button>
      </div>
   )
}