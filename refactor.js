function func(s, a, b) {
   if (typeof (s) == 'string' && s.length > 0) {
      let aIndex = s.lastIndexOf(a)
      let bIndex = s.lastIndexOf(b)

      if (aIndex !== -1) {
         if (bIndex !== -1) {
            // Не знаю задумка была или нет, но я поменял возврат Math.max(aIndex, bIndex) и aIndex в условиях
            return Math.max(aIndex, bIndex)
         } else {
            // Так как в случае bIndex = -1 то нет смысла высчитывать максимальное значение
            return aIndex
         }
      } else {
         if (bIndex !== -1) {
            return bIndex
         } else {
            return -1
         }
      }
   }
   return -1
}