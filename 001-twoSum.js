/* 
 * 【two sum】
 *  Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
 */

var twoSum = function(nums, target) {
    var len = nums.length;
    var result = [];
    for(var i=0; i<len; i++){
        var s = target - nums[i];
        for(var j=i+1; j<len; j++){
            if(nums[j] == s){
                return [i,j];
            }
        }
    }
    return "No two sum solution";
};
console.log(twoSum([2,7,11,15], 9)); // 时间-O(n²)、空间-O(1)

/*
    Problem：https://leetcode.com/problems/two-sum/#/description
    Submission Details： https://leetcode.com/submissions/detail/102422716/
    Solution：https://leetcode.com/articles/two-sum/
*/

// 其他方法1
var twoSum1 = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map[complement] && map[complement] != i) {
            return [i, map[complement] ];
        }
    }
    return "No two sum solution";
};
console.log(twoSum1([2,7,11,15], 9)); // 时间-O(n)、空间-O(n)

// 其他方法2
var twoSum2 = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map[complement]) {
            return [map[complement]-1, i ];
        }
        map[nums[i]] = i+1; // key的键值为0时，上面的if会验证不过，+1矫正。return的时候再-1
    }
     return "No two sum solution";
};
console.log(twoSum2([2,7,11,15], 9)); // 时间-O(n)、空间-O(n)
