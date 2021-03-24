/*Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:
If, you can read?

Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:
The set of used punctuation is .!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(words) {
let alphabet = {
A: "Alfa", B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot', G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima', M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango', U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'Xray', Y: 'Yankee', Z: 'Zulu'}
let punctuation = ['.',',','!','?']
let map = new Map(Object.entries(alphabet));
let final = [];

//cutting array so it includes only first letters and punctuation
let res = Array.from(words).map(word => word.toUpperCase().slice(0,1));
    
for (let i = 0; i<res.length;i++) {
      //including punctuation as the instruction sets forth
    if (punctuation.includes(res[i])) 
    final.push(res[i]);
    //finding corresponding result in the map we created
    else if (res[i]!= ' ')
    final.push(map.get(res[i]))
  }
  
return final.splice(',').join(' ')
}