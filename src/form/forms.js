import React from 'react'
import MaskedInput from 'react-text-mask'

export const Input = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error

   return (
      <div className={`form__control ${hasError && `form__error`}`}>
         <div>
            <input {...input} {...props} type="Number" />
         </div>
         {hasError && <span className="form__span__error">{meta.error}</span>}
      </div>
   )
}

export const TelInput = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error

   return (
      <div className={`form__control ${hasError && `form__error`}`}>
         <div>
            <MaskedInput className="mask" mask={[/[1-9]/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} {...input} {...props} />
         </div>
         {hasError && <span className="form__span__error">{meta.error}</span>}
      </div>
   )
}