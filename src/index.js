module.exports = function check(str, bracketsConfig) {
    const newBracketsConfig = bracketsConfig.map((num)=> num.join(''));

    function replaceBrackets(string) {
        // console.log(string, newBracketsConfig)
        const lengthBracketsConfig=newBracketsConfig.length
        for (let i = 0; i < lengthBracketsConfig; i++) {
            if (string.includes(newBracketsConfig[i])) {
                string = string.replace(newBracketsConfig[i], '');
                return replaceBrackets(string);
            } else if (string.length === 0) {
                return true;
            }
        }
        return false;
    }
    return replaceBrackets(str);
}
