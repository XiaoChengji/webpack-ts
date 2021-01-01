let val10: [string, number];

​// Initialize it
val10 = ['hello', 10]; // OK

// Initialize it incorrectly
// val10 = [10, 'hello']; // Error

export default function() {
	console.log('val10', val10)
}
