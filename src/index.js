module.exports = function check(str, bracketsConfig) {
    let newbracketsConfig2 = bracketsConfig.map(function(num) {
        return num.join('')
    });

    function replaceBrackets(string) {

        console.log(string, newbracketsConfig2)
        for (let i = newbracketsConfig2.length - 1; i >= 0; i--) {
            if (string.includes(newbracketsConfig2[i])) {
                string = string.replace(newbracketsConfig2[i], '');
                return replaceBrackets(string);
            } else if (string.length === 0) {
                return true;
            }
        }
        return false;
    }
    return replaceBrackets(str);
}