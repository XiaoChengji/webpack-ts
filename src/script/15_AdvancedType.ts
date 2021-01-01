function extend<T extends {}, U extends {}>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}

function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

interface Bird {
    fly(): void;
    layEggs(): void;
}
​
interface Fish {
    swim(): void;
    layEggs(): void;
}
​
function getSmallPet(animal: Fish | Bird): any {
    animal.layEggs();
    return animal;
}

export default function() {
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();

    console.log('val15', padLeft("Hello world", 4)); // "    Hello world"
    // padLeft("Hello world", true); // 编译阶段通过，运行时报错​

    let val15_1: Bird = {
        fly() {},
        layEggs() {
            console.log('Bird layEggs');
        }
    }
    let pet = getSmallPet(val15_1);
    if (pet.fly) {
        (<Bird>pet).fly();
    } else {
        (<Fish>pet).swim();
    }
}