// 返回never的函数必须存在无法达到的终点
function handleError(message: string): never {
    throw new Error(message);
}
​
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

export default function() {
	// console.log('error', handleError('Error Tip')); // 抛出异常
} 