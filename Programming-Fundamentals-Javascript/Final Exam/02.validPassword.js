function validPassword(params) {
  let n = Number(params.shift());
  let pattern = /^(.+)>(?<first>[0-9]{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1$/
  for (let i = 0; i < n; i++) {
    let passwordToCheck = params[i]
    let match = pattern.exec(passwordToCheck);
    let result = ''
    if(pattern.test(passwordToCheck)){
         result=match.groups.first+match.groups.second+match.groups.third+match.groups.fourth
        console.log(`Password: ${result}`);
    }else{
        console.log('Try another password!');
    }
  }
}
validPassword(["3",

"##>00|no|NO|!!!?<###",

"##>123|yes|YES|!!!<##",

"$$<111|noo|NOPE|<<>$$"])