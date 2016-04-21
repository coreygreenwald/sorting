function mergeSort(arr) {
	if(arr.length === 1){
		return arr;
	}
	else {
		var tempArray = split(arr);
		mergeSort(tempArray[0]);
		mergeSort(tempArray[1]);
	}
}
function split(arr){
  var pivot = Math.round(arr.length / 2);
  return [arr.slice(0,pivot), arr.slice(pivot)];
}

function merge(arr1,arr2){
	var newArr = [];
	var newArrLength = arr1.length + arr2.length;
	while(newArr.length < newArrLength){
		if(arr2.length === 0 || arr1[0] >= arr2[0]){
			newArr.push(arr1.shift());
		}
		else {
			newArr.push(arr2.shift());
		}
	}
	return newArr;
}
merge([1,3],[2,4]);
