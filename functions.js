//The functions container object
const functions = {};
/**
 * Creates a randome string of length specified
 * @param {*} strLength String outcome length: required
 */
functions.createRandomString = (strLength) =>
{
    strLength = typeof strLength === 'number' && strLength > 0 ? strLength : false;
    if (strLength) 
    {
        var possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        var str = '';
        for (var i = 1; i <= strLength; i++) 
        {
            str += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
        return str;
    }
    else 
    {
        return false;
    }
}


module.exports = functions;
