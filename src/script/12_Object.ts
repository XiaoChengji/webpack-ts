function create(o: object | null): void {
	console.log('val12', o)
};

// let val12_1: { a: string, b: number }[] = [
//   { a: 'a', b: 1 },
//   { b: 'b', b: 2 }
// ];

type wordType = { a: string, b: number }
let val12_2: wordType[] = [
  { a: 'a', b: 1 },
  { a: 'b', b: 2 }
]

export default function() {
	create({ prop: 0 }); // OK
	create(null); // OK

	// create(42); // Error
	// create("string"); // Error
	// create(false); // Error
	// create(undefined); // Error

	// console.log('val12_1', val12_1); // disabled trackCircuitReducer config, throw error: An object literal cannot have multiple properties with the same name in strict mode.
	console.log('val12_2', val12_2);
};
