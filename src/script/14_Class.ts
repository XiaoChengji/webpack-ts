class Human {
	public name: string;
	protected age: number;
	private body: string;
	constructor(name: string, age: number) {
		this.name = name || '';
		this.age = age || 0;
		this.body = '人体构造';
	}
	static say(words: string) {
		return `I say: ${words}`;
	}
};

class Girls extends Human {
	public sex: string;
	protected height: number;
	constructor(name: string, age: number, height: number) {
		super(name, age);
		this.sex = '女';
		this.height = height;
	}
	public getAge() {
		return this.age;
	}
};

export default function() {
	let val14_1 = new Human('小明', 18);
	val14_1.name = '大明';
	// val14_1.age = 16; // error: Property 'age' is protected and only accessible within class 'Human' and its subclasses.
	// val14_1.body = '残疾'; // error: Property 'body' is private and only accessible within class 'Human'.
	console.log('val14_1', val14_1);
	
	let val14_2 = new Girls('小红', 16, 165);
	console.log('val14_2', val14_2);
	// console.log('val14_2.age', val14_2.age); // Property 'age' is protected and only accessible within class 'Human' and its subclasses.
	console.log('val14_2.getAge', val14_2.getAge());
};