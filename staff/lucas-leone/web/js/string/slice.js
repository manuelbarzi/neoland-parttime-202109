function slice(string, start, end) {
    result=""
   for (let i = start; i < end; i++) {
            result=result+string[i] 
   }
   return result
}