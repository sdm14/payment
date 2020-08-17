export const required = (value) => {
   if (value) {
      return undefined
   } else {
      return 'заполните поле'
   }
}

export const lengthValue = (value) => {
   if (value && value.length !== 11) {
      return '11 цифр'
   } else {
      return undefined
   }
}

export const minCount = (value) => {
   let numValue = Number(value)
   if (numValue > 0) {
      return undefined
   } else {
      return 'минимальная сумма 1'
   }
}

export const maxCount = (value) => {
   let numValue = Number(value)
   if (numValue < 1001) {
      return undefined
   } else {
      return 'максимальная сумма 1000'
   }
}