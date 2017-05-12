/* 
 * 【Palindrome Number】
 *  Determine whether an integer is a palindrome. Do this without extra space.
 *  判断一个整数是回文数，不使用额外的存储空间
 	注：	负数是否有回文？
 		使用数组方式会需要额外的空间
 		使用007-reverse 反转整数方法有可能会导致int溢出
 */

var isPalindrome = function(x) {
	if(x < 0) {
		return false;
	} else if(x === 0) {
		return true;
	} else {
		var res = 0;
		var x1 = x;
		while(x !== 0){
			res = res*10 + x%10;
			x = parseInt(x/10);
		}
		if(res === x1)
			return true;
		else
			return false;
	}
};
console.log(isPalindrome(0));
/*
    Problem：https://leetcode.com/problems/palindrome-number/#/description
    Submission Details：https://leetcode.com/submissions/detail/102696277/
    Solution：
*/

// 其他方法1
var isPalindrome2 = function(x) {
	var reverse = 0;
	if (x < 0 || (x !== 0 && x % 10 === 0)) {
		return false;
	}
	while (x > reverse) {
		reverse = reverse * 10 + x % 10;
		x = Math.floor(x / 10);
	}
	return (x === reverse || x === Math.floor(reverse / 10));
};
console.log(isPalindrome2(0));