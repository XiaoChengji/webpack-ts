let val9_1: number[] = [1, 2, 3];
let val9_2: Array<number> = [1, 2, 3];
let val9_3: (string | number)[] = [1, '1']; // 元素既可以是字符串又可以是数字

export default function() {
	console.log('val9_1', val9_1);
	console.log('val9_2', val9_2);
	console.log('val9_3', val9_3);
}
