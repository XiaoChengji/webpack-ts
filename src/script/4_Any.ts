let val4: any = 4;
val4 = "maybe a string instead";
val4 = false; // okay, definitely a boolean

export default function() {
	console.log('val4', val4);
};