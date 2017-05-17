/* 
 * 【Roman to Integer】
 *  Given a roman numeral, convert it to an integer.
 	Input is guaranteed to be within the range from 1 to 3999.
 *  给定一个罗马数字，将其转换为整数。
 	输入保证在1到3999之间。
 *  @param {string}
 	@return {number}
 *  注：罗马数字采用七个罗马字母作数字、即
 		Ⅰ - 1; X - 10; C - 100; M - 1000; V - 5; L - 50; D - 500;
 		[I II III IV V VI VII VIII IX X]
 *	规则：
 		1. 相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
 		2. 小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数，如 Ⅷ=8、Ⅻ=12；
 		3. 小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9；

 */

var romanToInt = function(s) {
	let code = {I: 1, X: 10, C: 100, M: 1000, V: 5, L: 50, D: 500};
	let res = 0;
	while(s.length>0){
		let n = 1,temp = s[0];
		if(s.length>1 && code[s[1]]>code[temp]){
			n = 2;
			res += 	code[s[1]] - code[temp];
		} else
			res += code[temp];
		s = s.slice(n, s.length);
	}
	return res;
};
console.log(romanToInt("MCMLXX"));
/*
    Problem：https://leetcode.com/problems/roman-to-integer/#/description
    Submission Details：https://leetcode.com/submissions/detail/103185573/
    Solution：
*/

// 其他方法1
var romanToInt2 = function(s) {
	let romanCode = {I: 1, X: 10, C: 100, M: 1000, V: 5, L: 50, D: 500};
	let arr = s.toUpperCase().split("");
	let res = 0;

	while(arr.length>0){
		let n = 1;
		let temp = arr[0];
		if((temp === 'I' || temp === 'X' || temp === 'C') && arr.length>1 && romanCode[arr[1]]>romanCode[temp]){
			n = 2;
			res += 	romanCode[arr[1]] - romanCode[temp];
		} else {
			res += romanCode[temp];
		}
		arr.splice(0,n);
	}
	return res;
};
console.log(romanToInt("MCMLXX"));