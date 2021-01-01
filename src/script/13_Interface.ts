interface Human {
  name: string;
  age: number;
  sex: string;
  address?: string; // 非必须定义属性
  [propname: string]: any; // 未确定key以及value
  say(): string;
}
​
let val13_1: Human = {
  name: '小红',
  age: 31,
  sex: '男',
  address: '北京二路1号',
  desc: '长得很漂亮',
  say() {
  	return 'Hello TypeScript!!!';
  }
}

class Girls implements Human {
	name = '';
	age = 0;
	sex = '女';
 	say() {
 		return 'I\'am a girl.'
 	}
}

let val13_2 = new Girls();

interface Mans extends Human {
	sing(): string
}

let val13_3: Mans = {
	name: '小明',
	age: 16,
	sex: '男',
	address: '上海一路23号',
	desc: '长得很高',
	say() {
		return `Hi, My name is ${this.name}`;
	},
	sing() {
		return 'Oh, Woooooooo';
	}
};

export default function() {
	console.log('val13_1', val13_1); // {name: "张三", age: 31, sex: "男"}
	console.log('val13_1 say', val13_1.say());
	console.log('val13_2', val13_2);
	console.log('val13_2 say', val13_2.say());
	console.log('val13_3', val13_3);
	console.log('val13_3 say', val13_3.say());
	console.log('val13_3 sing', val13_3.sing());
}
