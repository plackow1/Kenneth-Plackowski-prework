      
  /*Start the framework of the game to prepare for play*/    
      /* Pick a word after pressing a key*/
        /* List of optional words for game*/
        const gameList=['benny', 'bucky', 'goldy', 'herbie', 'joe', 'oski', 'sparky', 'sparty', 'swoop', 'tree', 'willie', 'buckeye', 'butch', 'harry', 'herky', 'nittany', 'red', 'traveler', 'wilbur'];

        /*Set the chosen word object for function overwriting*/
        var chosenWord = { 
            word:'',
            bArray: [],
            wArray: [],
            imtag: 0
            
        }

        /*Set some initializing conditions to check for gameplay wins/losses*/
        var initObj = {
            wLength: 0,
            rGuess: 10,
            outcome: ''
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

                    console.log(chosenWord.bArray);
                    console.log(chosenWord.wArray);
                    initObj.wLength=chosenWord.word.length;
                    document.getElementById("progress").innerHTML = chosenWord.bArray;


                    initObj.rGuess=10;
                    document.getElementById("lives").innerHTML = initObj.rGuess;
                    
                    letterGuess.count = [''];
                    document.getElementById("guesses").innerHTML = letterGuess.count.slice(1,letterGuess.count.length);
                    document.getElementById("outcome").innerHTML = "";
                    chosenWord.imtag = gameList.indexOf(chosenWord.word);
                    
                }    
                document.getElementById("clickbox").addEventListener('click', wordPick);


                 

;
         
    




/* registering the key pressed start by initializing the letterguess object*/
           
            var letterGuess = {
                guess: '',
                count: [''],
                
            
            };

            const keyLog = function (event) {
                letterGuess.guess = event.key;

                for(let i=0; i<1; i++){
                    if(letterGuess.count.indexOf(letterGuess.guess)===-1 && chosenWord.wArray.indexOf(letterGuess.guess)===-1)
                    {
                    
                        letterGuess.count.push(letterGuess.guess);
                        initObj.rGuess = initObj.rGuess-1;

                        
                
                    }
                    
                }

                for (let i=0; i<chosenWord.word.length; i++){
                    /*search random word for occurance of key pressed.*/
                    if (letterGuess.guess === chosenWord.wArray[i]){
                        chosenWord.bArray[i]=chosenWord.wArray[i];
    
                    } 
                    str=chosenWord.bArray.join();
                    document.getElementById("progress").innerHTML = str;

                                  

                    
                    }

                         z = chosenWord.bArray.join();
                         y = chosenWord.wArray.join();
                        initObj.outcome =  (y==z);
                        x=initObj.outcome;

                        switch (x){
                            case true:
                                document.getElementById("outcome").innerHTML = "you win";
                                /*document.getElementById("outim").src = imgArray[chosenWord.imtag];*/
        
                                break;
                        
            
                            case false:
                                if(initObj.rGuess > 0){
                                document.getElementById("outcome").innerHTML = "";
                                }
                                else {
                                    document.getElementById("outcome").innerHTML = "You Lose. Try Again.";
                                }
                                break;

                            
                        }
                
                document.getElementById("guesses").innerHTML = letterGuess.count.slice(1,letterGuess.count.length);
                document.getElementById("lives").innerHTML = initObj.rGuess;

            };

            
            document.addEventListener('keydown', keyLog);

            
               
            

                var imgArray = new Array();

                imgArray[0] = new Image();
                imgArray[0].src = '../images/benny.jpg';

                imgArray[1] = new Image();
                imgArray[1].src = '../images/Bucky.png';

                imgArray[2] = new Image();
                imgArray[2].src = '../images/Goldy.jpg';

                imgArray[3] = new Image();
                imgArray[3].src = '../images/Herbie.jpg';

                imgArray[4] = new Image();
                imgArray[4].src = '../images/Joe.jpg';

                imgArray[6] = new Image();
                imgArray[6].src = '../images/sparky.jpg';

                imgArray[7] = new Image();
                imgArray[7].src = '../images/sparty.jpg';

                imgArray[8] = new Image();
                imgArray[8].src = '../images/Swoop.jpg';

                imgArray[9] = new Image();
                imgArray[9].src = '../images/Tree.jpg';

                imgArray[10] = new Image();
                imgArray[10].src = '../images/willie.jpg';

                imgArray[11] = new Image();
                imgArray[11].src = '../images/buckeye.jpg';
                /* ... more images ... */

                imgArray[12] = new Image();
                imgArray[12].src = '../images/Butch.jpg';

                imgArray[13] = new Image();
                imgArray[13].src = '../images/harry.jpg';

                imgArray[14] = new Image();
                imgArray[14].src = '../images/Herky.jpg';

                imgArray[15] = new Image();
                imgArray[15].src = '../images/Nittany.jpg';

                imgArray[16] = new Image();
                imgArray[16].src = '../images/red.jpg';

                imgArray[17] = new Image();
                imgArray[17].src = '../images/Traveler.jpg';

                imgArray[18] = new Image();
                imgArray[18].src = '../images/Wilbur.jpg';

                
                imgArray[19] = new Image();
                imgArray[19].src = '../images/lose.jpg';

                /*------------------------------------*/

               
           