export class People{
    constructor(
        public readonly firstName: string,              //Readonly means that the variable cannot change
        public readonly lastName : string,
        public birth: string,                           //Dont need to this the birth to acess
        private salary?: number,                        //Is optional
        protected language: string = 'English',      //is optional and 'Portuguese' by default
        public readonly specie: string = 'Human'
    ){
        this.firstName = this.firstLetterUpper(firstName);
        this.lastName = this.firstLetterUpper(lastName);
    }
    
    //Private means it can only be acess inside the class
    private firstLetterUpper(name: string): string{
        return name[0].toUpperCase() + name.slice(1,);
    }

    public getAge(){
        const [day,month,year] = this.birth.split("/")
        let birthDate: string|Date = year + "-" + month + "-" + day;
        birthDate = new Date(birthDate)
        const today = new Date()

        // Calculate year difference - only uses the years
        let age = today.getFullYear() - birthDate.getFullYear(); 

        // Check if the birthday has already occurred this year
        const hasBirthdayOccurred = 
        today.getMonth() > birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasBirthdayOccurred) {
            age -= 1;
        }

        return age;
    }

    public getSalary(){
        return this.salary
    }
}
