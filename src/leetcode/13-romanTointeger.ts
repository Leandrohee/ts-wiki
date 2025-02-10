export function romanToInt(s: string): number|string {
    const checkletters = s.replace(/[ \s i v x l c d m]/gi,"")
    if (checkletters.length > 0){
        return 'Invalid letters'
    }

    function calculateLetter(letter: string): number{
        switch (letter?.toUpperCase()){
            case "I":
                return 1

            case "V":
                return 5

            case "X":
                return 10

            case "L":
                return 50

            case "C":
                return 100

            case "D":
                return 500

            case "M":
                return 1000
        }

        return 0
    }

    let sum: number = 0

    for (let i=0; i < s.length; i++){

        //First letter - 2 cases
        if (i == 0){
            //Next letter is bigger: IX
            if (calculateLetter(s[i]) < calculateLetter(s[i+1])){
                sum =  sum + calculateLetter(s[i+1]) - calculateLetter(s[i])
            }

            //Next letter is smaller or iqual: XX or XI
            else{
                sum =  sum + calculateLetter(s[i])
            }
        }

        //Last letter - 2 cases
        else if ( i == (s.length - 1)){
            //Before letter is smaller: IX 
            if (calculateLetter(s[i-1]) < calculateLetter(s[i])){
                sum = sum;
            }
            
            //Before letter is bigger or equal: XX or XV
            else {
                sum = sum +  calculateLetter(s[i])
            }
        }

        //Letters in the middle 7 cases
        else {
            //Before letter is bigger and next letter is smaller: "XVI"
            if (calculateLetter(s[i-1]) > calculateLetter(s[i]) && calculateLetter(s[i+1]) < calculateLetter(s[i])){
                sum = sum + calculateLetter(s[i]);
            }

            //Before letter is bigger and next letter is equal: "XII"
            else if (calculateLetter(s[i-1]) > calculateLetter(s[i]) && calculateLetter(s[i+1]) == calculateLetter(s[i])){
                sum = sum + calculateLetter(s[i]);
            }

            //Before letter is bigger and next letter is bigger: I -> "XCIX"
            else if (calculateLetter(s[i-1]) > calculateLetter(s[i]) && calculateLetter(s[i+1]) > calculateLetter(s[i])){
                sum = sum + (calculateLetter(s[i+1]) - calculateLetter(s[i]))
            }

            //Before letter is equal and next letter is equal: "XXX"
            else if (calculateLetter(s[i-1]) == calculateLetter(s[i]) && calculateLetter(s[i+1]) == calculateLetter(s[i])){
                sum = sum + calculateLetter(s[i]);
            }

            //Before letter is equal and next letter is bigger: "XXV"
            else if (calculateLetter(s[i-1]) == calculateLetter(s[i]) && calculateLetter(s[i+1]) > calculateLetter(s[i])){
                sum = sum + calculateLetter(s[i]);
            }

            //Before letter is equal and next letter is smaller: "XXI"
            else if (calculateLetter(s[i-1]) == calculateLetter(s[i]) && calculateLetter(s[i+1]) < calculateLetter(s[i])){
                sum = sum + calculateLetter(s[i]);
            }

            //Before letter is smaller and next letter is smaller: C-> "XCIX"
            else if (calculateLetter(s[i-1]) < calculateLetter(s[i]) && calculateLetter(s[i+1]) < calculateLetter(s[i])){
                sum = sum
            }
        }
    }
return sum
};

const result = romanToInt("MMMCMXCix");
console.log(result)