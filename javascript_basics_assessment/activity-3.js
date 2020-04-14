const nameList=['Mark', 'Terry', 'Janice'];

for (i=0; i<3; i++){

var newname = prompt("Please write a new name to add");
  
nameList.push(newname);

}

for (i=0; i<nameList.length; i++){

    console.log(nameList[i]);
}
