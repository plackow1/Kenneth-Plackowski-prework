const pin=prompt("Please enter your pin");

const pinstring=pin.toString();

if (pinstring.length > 4) {
alert("Your pin has more than 4 letters");    
}

else {
alert("Your pin is 4 letters or less");
}