interface MyObject {
    [key: string]: any;
  }
  
  function parseIdsToStrings(obj: MyObject): MyObject {
    const newObj: MyObject = {};
  
    for (const key in obj) {
      if (key === "id" && typeof obj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else {
        newObj[key] = obj[key];
      }
    }
  
    return newObj;
  }


  export default parseIdsToStrings;