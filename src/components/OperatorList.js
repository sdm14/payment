import React from 'react'
import { Link } from 'react-router-dom'
import translate from '../i18n/messages/translate'

export const OperatorList = (props) => {

   return (
      <div className="operator__list">
         <span>{props.el.name}</span>
         <img src={props.el.imgPath} className="operator__logo" alt="" />
         <Link className="pay__link" to={`/operator/${props.el.id}`}>{translate('go-to-pay')}</Link>
      </div>
   )
}

