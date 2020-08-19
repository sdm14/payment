import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input, TelInput } from '../form/forms'
import { required, lengthValue, minCount, maxCount } from '../form/validators'
import translate from '../i18n/messages/translate'

const OperatorForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit} className="form__wrapper">
         <div>
            <Field placeholder={"8(747) 601-7805"} name={"phone"} component={TelInput} validate={[required, lengthValue]} />
         </div>
         <div>
            <Field placeholder={"Введите сумму"} name={"count"} component={Input} type={"Number"} validate={[required, minCount, maxCount]} />
         </div>
         <button type="submit" className={props.isSubmit ? "pay__link submitt" : "pay__link"} disabled={props.isSubmit}>{props.isSubmit ? translate("loading") : translate("pay")}</button>
      </form>
   )
}

export const OperatorReduxForm = reduxForm({ form: 'payForm' })(OperatorForm)

