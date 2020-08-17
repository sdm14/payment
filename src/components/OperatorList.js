import React from 'react'
import { Link } from 'react-router-dom'

export const OperatorList = (props) => {

   return (
      <div className="operator__list">
         <span>{props.el.name}</span>
         <img src={props.el.imgPath} className="operator__logo" alt="" />
         <Link className="pay__link" to={`/operator/${props.el.id}`}>Перейти к оплате</Link>
      </div>
   )
}

