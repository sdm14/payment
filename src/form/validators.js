export const required = (value) => {
   if (value) {
      return undefined
   } else {
      return 'заполните поле'
   }
}

export const lengthValue = (value) => {
   let lastChar = Number(value.slice(-1))
   if (Number(lastChar)) {
      return undefined
   } else {
      return 'не правильный телефон'
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