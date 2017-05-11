/* 
 * 【Reverse Integer】
 *  Reverse digits of an integer.
		Example1: x = 123, return 321
 		Example2: x = -123, return -321
 	注：	int类型溢出return 0
 		int范围：[-(2^32-1) , 2^32-1 ]
 */

var reverse = function(x) {
	var f = 1;
	if(x === 0){
		return 0;
	} else if(x < 0){
		f = -1;
		x = -x;
	}

	var arr = (x + '').split('');
	var arr2 = [];
	for(var i = arr.length-1; i>=0; i--){
		arr2.push(arr[i]);
	}

	var s = f*parseInt(arr2.join(''));
	if(s > 2147483647 || s < -2147483647) {
		return 0;
	} else {
		return s;
	}
};
// console.log(reverse(123));
/*
    Problem：https://leetcode.com/problems/reverse-integer/#/description
    Submission Details：https://leetcode.com/submissions/detail/102588199/
    Solution：
*/

// 其他方法1
var reverse2 = function(x) {
	var res = 0;
	while(x !== 0){
		res = res*10 + x%10;
		x = parseInt(x/10);
	}
	if(res > 2147483647 || res < -2147483647) {
		return 0;
	} else {
		return res;
	}
};
console.log(reverse3(-123888888));