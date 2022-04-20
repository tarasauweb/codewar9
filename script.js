function findUniq(arr) {
  let result = arr.filter((elem)=>{
    return arr.indexOf(elem)===arr.lastIndexOf(elem)
  })
  return result[0]
}
  
findUniq([3, 10, 3, 3, 3])