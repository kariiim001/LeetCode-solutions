var maxSubArray = function(nums) {
    let maxSoFar= nums[0]
    let current= nums[0]

    for( let i=1; i<nums.length; i++){
        if (current<0){current=0}

        current += nums[i];
        if (current > maxSoFar){
            maxSoFar = current
        }
    }return maxSoFar
};