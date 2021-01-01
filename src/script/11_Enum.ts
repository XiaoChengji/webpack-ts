enum Color_1 { Red, Green, Blue };
let Val11_1: Color_1 = Color_1.Green;
​
enum Color_2 { Red = 1, Green, Blue }
let Val11_2: Color_2 = Color_2.Green;
​
enum Color_3 { Red = 6, Green = 7, Blue = 8 }
let Val11_3: Color_3 = Color_3.Green;
let Val11_4: String = Color_3[7];

enum Color_4 { Red = 'a', Green = 'b', Blue = 'c' }
let Val11_5: Color_4 = Color_4.Green;

export default function() {
	console.log('Val11_1', Val11_1); // 1
	console.log('Val11_2', Val11_2); // 2
	console.log('Val11_3', Val11_3); // 7
	console.log('Val11_4', Val11_4); // Green
	console.log('Val11_5', Val11_5); // b
}