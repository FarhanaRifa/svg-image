function evenify(num) {
    var results;
    if(num % 2 == 0){
        results = num;
    }
    else{
        results = num*2;

    }
    return results;

}
var result = evenify(11);
var square = result * result;
console.log('result:', square)





function evenify_all(nums){
    even_array = []
    for (let i = 0; i < nums.length; i++ ){
     const num = nums[i]; 
     var result = evenify(num);
      even_array.push(result)
    }
    return even_array;

}

nums = [20, 25, 26,28, 31];
var nums_even =  evenify_all(nums);
console.log(nums_even);
// evenify_all(nums);
