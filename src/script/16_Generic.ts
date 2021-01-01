function identity<T>(arg: T): T {
    return arg;
}

function arrayGeneric<T>(x: T[]): T[] {
	return x;
}

function multiGeneric<T, P>(x: T, y: P): string {
	return `(${x}, ${y})`
}

export default function() {
	let val16_1 = identity<string>('myString');
	let val16_2 = identity('myString');
	console.log('val16_1', val16_1);
	console.log('val16_2', val16_2);
	console.log('val16_3', arrayGeneric<string>(['1', '2', '3']));
	console.log('val15_4', multiGeneric('1', 2));
}
