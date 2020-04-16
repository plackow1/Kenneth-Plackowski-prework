      
  /*Start the framework of the game to prepare for play*/    
      /* Pick a word after pressing a key*/
        /* List of optional words for game*/
        const gameList=['benny', 'bucky', 'goldy', 'herbie', 'joe', 'oski', 'sparky', 'sparty', 'swoop', 'tree', 'willie', 'buckeye', 'butch', 'harry', 'herky', 'nittany', 'red', 'traveler', 'wilbur'];

        /*Set the chosen word object for function overwriting*/
        var chosenWord = { 
            word:'',
            bArray: [],
            wArray: []
        }

        /*selecting a random name from the gameList*/
        const wordPick = function(event) {
            var wordBlank = gameList[Math.floor(Math.random()*gameList.length)];
            console.log(wordBlank);
            chosenWord.word = wordBlank;

            /*resets chosenWord arrays*/
            chosenWord.bArray = [];
            chosenWord.wArray = [];

                            /*Fixes the arrays for game play*/
                            for (let index = 0; index < chosenWord.word.length; index++) {
                                        chosenWord.bArray.push('_');
                                }
                            for (let i=0; i < chosenWord.word.length; i++){
                                        chosenWord.wArray.push(chosenWord.word.charAt(i))
                                        console.log(chosenWord.word.charAt(i))
                                }

            console.log(chosenWord.bArray)
            console.log(chosenWord.wArray)
        }    
        document.addEventListener('keydown', wordPick);
    



/* registering the key pressed*/
const keyLog = function (event) {
    chosenLetter = event.key;
    console.log(chosenLetter)
}
document.addEventListener('keydown', keyLog);

/*search random word for occurance of key pressed.*/
    

for (let i=0; i<wordArray.length; i++){
    if (chosenLetter === wordArray[i]){
        answerArray[i]=wordArray[i];
    }
}