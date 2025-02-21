import { People } from "./People";

class Brazilian extends People{
    constructor(
        firstName: string,
        lastName: string,
        birth: string,
        private readonly hello: string,
        salary: number = 1000,
        specie?: string
    ){
        super(firstName, lastName, birth, salary, 'Portuguese', specie)
        this.hello = hello
    }

    public sayHello(){
        return this.hello
    }


    public getSpecie(){
        return this.specie
    }
}