import React from 'react'

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