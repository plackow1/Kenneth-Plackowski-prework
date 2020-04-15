const f1 = function (num1) {

    console.log(num1*num1);
};

f1(4);

const f2 = function (str1, str2) {

    console.log(`${str2}, ${str1}`);
};

f2("Ken","Plackowski");

var f3 = function (num2) {

    var remainder = num2%2;

    if (remainder === 0){console.log("True");}
    else {console.log("False")};
};

f3(7);