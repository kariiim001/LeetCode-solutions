let solution  =function(nums){
        let answer =0;
        let count =0;
        
        for (let i=0; i< nums.length; i++){
            if (nums[i] ===1 ){ 
                count++;
                answer = Math.max(count, answer)
            }
            else{count =0}
        }
        return answer
    }
