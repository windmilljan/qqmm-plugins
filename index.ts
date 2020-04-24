class Person8 {
    name: string;

    constructor(name: string = 'Willy Leung') {
        this.name = name;
    }

    age(age: number = 0) {
        console.log(`${this.name} is ${age} old.`);
    }

    sex(sex: string = 'male') {
        let sexString: string = (sex == 'male' ? 'boy' : 'girl');
        console.log(`${this.name} is a ${sexString}.`);
    }
}

class Chinese8 extends Person8 {
    constructor(name: string) {
        super(name);
    }

    from(country: string) {
        console.log(`${this.name} is come from ${country}`);
    }

    job(job: string) {
        console.log(`${this.name} is a ${job}.`);
    }
}

class Teacher8 extends Chinese8 {
    constructor(name?: string) {
        super(name);
    }

    job(job: string) {
        console.log(`${this.name} is a ${job}.`);
    }
}

//let person = new Person('Willy Leung');
let teacher8 = new Teacher8('Vicky Chan');
// teacher.name = 'Vick Chan';
teacher8.job('teacher');
teacher8.age(35);
