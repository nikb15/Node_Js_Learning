class Person
{
    constructor(name)
    {
        this.name=name;
    }
    greet()
    {
        console.log(`Hello! +${this.name} !`);
    }
}

class Student extends Person{
    constructor(name, level)
    {
        super(name) ; //Direct liined to the person class
        this.level=level;
    }
    greet()
    {
        console.log(`Hello! 
        ${this.name} from ${this.level} !`);
    }
}

const o1= new Person('Mat');
const o2= new Student('tim','1st Grad');
const o3= new Student('Nik','2nd Grad');


o3.greet =() =>console.log('Special Guy`')
o1.greet();
o2.greet();
o3.greet();
