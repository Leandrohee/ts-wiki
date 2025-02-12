export function longestCommonPrefix(strs: string[]): string {
    
    //If only one elements in the array return this element
    if (strs.length == 1){
        return strs[0]
    }

    let commonPrefix = ""

    const result = strs.reduce((previewItem, item, index)=>{
        // If any item is "" than there is no common prefix
        if (item == ""){
            commonPrefix = ""
        }

        //Check for the commonPrefix related to the preview item
        for (let i=0; i < item.length ;i++){
            if (previewItem[0] !== item[0]){
                commonPrefix = ""
                break;
            }
            else if (previewItem[i] !== item[i]){
                break;
            }
            commonPrefix = item.slice(0,i+1)
       }

        //This will be the previewItem in the next passage
        return commonPrefix
    })

    return commonPrefix
};

// const array1 = ["","b","ba"]         // "b"
// const array1 = ["a","b"]             // ""
// const array1 = ["", "b"]             // ""
// const array1 = ["b"]                 // "b"
// const array1 = ["abab","aba",""]     // "ab"



