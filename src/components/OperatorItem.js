import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { OperatorReduxForm } from './OperatorReduxForm'
import * as axios from 'axios'


export const OperatorItem = withRouter((props) => {

   const operators = useSelector(state => state.main.operators)
   const urlParams = props.match.params
   const item = operators.find(el => el.id === Number(urlParams.id))

   // Адрес указал произвольный, в Request Payload можно увидеть, что отправляется объект
   const sendData = (formData) => {
      axios.post('http://localhost:3000/api',
         { phone: formData.phone, count: formData.count })
         .then(res => res.data)
   }


   return (
      <div className="item__wrapper">
         <img className="operator__logo" src={item.imgPath} alt="" />
         <p>{item.name}</p>
         <OperatorReduxForm onSubmit={sendData} />
      </div>
   )
})


