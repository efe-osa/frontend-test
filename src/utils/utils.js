const checkValueType = elem =>
  ({}.toString
    .call(elem)
    .match(/\[object (\w+)\]/)[1]
    .toLowerCase());

const isArray = val => checkValueType(val) === 'array'

const isObject = val => checkValueType(val) === 'object'

/**
 * 
 * @param {Array|{}} value This value would be an `array` or `object`.
 * @description This function flatten with the `array` or `object.
 */
const createFlatObject = (arr, k = "a") => {
  const arrKeys = Object.keys(arr)
  let result = {}
  return arrKeys.reduce((acc, currentKey) => {
    const key = k.length > 0 ? `${k}.` : k
    const currVal = arr[currentKey]

    if (isArray(currVal) || isObject(currVal)) {
      result = { ...acc, ...(createFlatObject(currVal, key + currentKey)) }
    } else {
      result[`${key}${currentKey}`] = currVal
    }
    return result
  }, result)
}

/**
 * 
 * @param {Array|{object}} arr1 This value would be an `array` or `object`.
 * @description This function searches through the input array / object and returns the appropriate string path leading to the input query
 */
export const pathGet = (arr1, query) => {
  // TASK 1: 
  // Write a function that searches through the input array / object
  // and returns the appropriate string path leading to the input query, if found
  // Example:
  // const a = {
  //    user: {
  //      id: 1,
  //      name: {
  //        firstName: "James",
  //        lastName: "Ibori"
  //      },
  //      location: {
  //        city: "Ikoyi",
  //        state: "Lagos",
  //        address: "One expensive house like that"
  //      }
  //    }
  // }
  // `pathGet(a, 'One expensive house like that')` = "a.user.location.address"
  // `pathGet(a, 'James')` = "a.user.name.firstName"

  // ============== CODE GOES BELOW THIS LINE :) ==============

  if (checkValueType(arr1) === 'array' || checkValueType(arr1) === 'object') {
    const newArr = createFlatObject(arr1)
    return Object.keys(newArr)[Object.values(newArr).indexOf(query)]
  }
  else {
    return 'The first argument is invalid, kindly provide an array or object'
  }
}