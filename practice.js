const  removeDuplicates = function(nums) {
  let j = 0;
     for (let i = 1; i < 10; i++) {
         if (nums[j] !== nums[i]) {
             nums[++j] = nums[i];
         }
     }
 
     return j + 1;
 };

const nums= [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));