
const calculateAnswer = (email) =>

{

const [localPart, domain] = emai.split("@");

const [hostname, ...countryCodes] = domin.split(".");

return `${localPart.length}${hostnme.length}${countryCodes.reduce( (a,cc) => a + cc.length, "") }`;


//  1 - first issue is typo ->
//         correction -> email.split("@")
//  2 - second issue is also typo in 3rd line in the variable name "domin"
//         correction -> domain
 

// this function split the domain into two or more parts separated bythe periods
// the first part is the hostname,and the remaining parts the last word in an email address or country code.

const calculateAnswer = (email) => {
    const [localPart, domain] = email.split("@");
    const [hostname, ...countryCodes] = domain.split(".");
    return `${localPart.length}${hostname.length}${countryCodes.reduce((a, cc) => a + cc.length, "")}`;
  }