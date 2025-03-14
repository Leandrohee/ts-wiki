function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        // console.log(char)
        if (char in bracketMap) {
            // If closing bracket, check if top of stack matches
            console.log(stack.pop())
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {
            // If opening bracket, push to stack
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Example test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([])"));      // true
 