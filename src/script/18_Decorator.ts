function f() {
    console.log('val18', 'f(): evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('val18', 'f(): called');
    }
}

function g() {
    console.log('val18', 'g(): evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('val18', 'g(): called');
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}


function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    	console.log('val18_2 configurable', descriptor);
    };
}


export default function() {
	class C {
	    @f()
	    @g()
	    method() {}
	}

	class Greeter {
	    greeting: string;
	    constructor(message: string) {
	        this.greeting = message;
	    }

	    @enumerable(true)
	    greet() {
	        return "Hello, " + this.greeting;
	    }
	}

	let val18_1 = new Greeter('TypeScript');
	console.log('val18_1', val18_1);

	class Point {
	    private _x: number;
	    private _y: number;
	    constructor(x: number, y: number) {
	        this._x = x;
	        this._y = y;
	    }

	    @configurable(false)
	    get x() { return this._x; }

	    @configurable(false)
	    get y() { return this._y; }
	}

	let val18_2 = new Point(1, 1);
	console.log('val18_2', val18_2.x);
}