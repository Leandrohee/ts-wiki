abstract class Animal{
    static cow(specie: string): string{
        return `This is cow of the specie: ${specie}`
    }
}

const result = Animal.cow("branca")

console.log(result)