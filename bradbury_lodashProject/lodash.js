const _ = {
  clamp (number,lower,upper) {
  	let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    console.log('clampedValue: ' + clampedValue);
    return clampedValue;
	},
  inRange(number,startValue,endValue){
    if(endValue === undefined){
      endValue = startValue;
      startValue = 0;
    };
    if (startValue > endValue){
      let tempstartV = endValue;
      endValue = startValue;
      startValue = tempstartV;
    };
    let isInRange = true;
    if(number >= startValue && number < endValue){
      	isInRange = true;
        return isInRange;
    } else {
      	isInRange = false;
      	return isInRange;
    };
  },
  words(str){
    var words = str.split(' ');
    return words;
    console.log(words);
  },
  pad(str,lngth){
    if(str.length > lngth){
      return str;
    };
    let startPaddingAmt = (Math.floor((lngth-str.length)/2));
    let endPaddingAmount = (lngth-(startPaddingAmt + str.length));
    let paddedStr = ' '.repeat(startPaddingAmt) + str + ' '.repeat(endPaddingAmount);
  console.log(paddedStr);
  return paddedStr;
  },
  has(object,key){
    let hasValue = false; 
      if(object[key] !== undefined){
      	hasValue = true;
    	}
    console.log('hasValue: ' + hasValue);
    return hasValue;
  },
  invert(object){
    let invertedObject = {};
    for(let key in object){
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    };
    return invertedObject;
    },
  findKey(object,predicate){
    for(let key in object){
      let value = object[key];
      console.log('value: ' + value);
      let predicateReturnValue = predicate(value);
      console.log('predicateReturnValue: ' + predicateReturnValue);
      if(predicateReturnValue){
        console.log('objectkey: ' + object[key]);
        return key;
      }
    };
    return undefined;
  },
  drop(array,numberToDrop){
    if(numberToDrop === undefined){
      numberToDrop = 1;
    };
    let newArray = array.slice(numberToDrop);   
    return newArray;
  },
  dropWhile(array,predicate){
   let dropNumber = array.findIndex((element, index) => {
     return !predicate(element, index);
        //return !predicate;
   } );
   let droppedArray = this.drop(array,dropNumber);
   return droppedArray;
  },
  chunk(array,size){
    if(size === undefined){
      size = 1;
    };
    let generatedChunksArray = [];
    let loopcounter = 0;
    for(let i=0;i<array.length;i=i+size){
       let arrayChunk = array.slice(i,i+size);
        generatedChunksArray.push(arrayChunk);
      	console.log('1: ' + generatedChunksArray);
    }
    console.log('2: ' + generatedChunksArray);
    return generatedChunksArray;

  }
}




// Do not write or modify code below this line.
module.exports = _;