import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { OperatorReduxForm } from './OperatorReduxForm'
import { I18nProvider, LOCALES } from '../i18n'


export const OperatorItem = withRouter((props) => {

   const operators = useSelector(state => state.main.operators)
   const urlParams = props.match.params
   const item = operators.find(el => el.id === Number(urlParams.id))
   const language = useSelector(state => state.main.language)

   const [isSubmit, setSubmit] = useState(false)

   const sendData = (formData) => {
      setSubmit(true)
      setTimeout(() => {
         alert(JSON.stringify(formData))
         setSubmit(false)
      }, 1000)
   }


   return (
      <I18nProvider locale={language}>
         <div className="item__wrapper">
            <img className="operator__logo" src={item.imgPath} alt="" />
            <p>{item.name}</p>
            <OperatorReduxForm onSubmit={sendData} setSubmit={setSubmit} isSubmit={isSubmit} />
         </div>
      </I18nProvider>
   )
})


