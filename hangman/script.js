// JavaScript Document
var keywords = ["Apple", "Banana", "Cherry", "Durian", "Fig", "Grape", "Honeydew", "Jackfruit", "Kiwi", "Lemon", "Mango", "Orange", "Papaya", "Rambutan", "Strawberry"];
var selectedKeyword, displayedKeyword, timar;
var seconds_left;
var fails = 0;
var score;
var startalr = 0;
//when html runs...
window.onload = function() {
	document.getElementById("hangman").style.letterSpacing = "0px";
	document.getElementById("fails").value = " ";
	document.getElementById("resetbtn").disabled = true;
	score = 0;
	fails = 0;
	seconds_left = 99;
};

function startGame() {
	startalr = 1;//startalr means to make the game run when you press. If not people will randomly click on letters and adding more fails to it
	
	//reset letter to either disabled or enabled
	var reset_letter = document.getElementsByClassName("letter");
	for(var i = 0;i <reset_letter.length;i++){
		reset_letter[i].disabled = false;
	}
	document.getElementById("resetbtn").disabled = false;
	//make reset button clickable
	fails = 0;
	 document.getElementById("dedguy").src = "img/1.jpg";
	document.getElementById("fails").value = fails;
	var num = Math.floor(Math.random() * keywords.length);
	
	selectedKeyword = keywords[num];
	selectedKeyword = selectedKeyword.toUpperCase();
	displayedKeyword = "";
	document.getElementById("score").value = score;
	
	for(i=0;i <selectedKeyword.length;i++) {
		console.log(selectedKeyword[i]);//display answer in console. IT IS FOR DEVELOPER PURPOSES!
		if(selectedKeyword.charAt(i) == " " || selectedKeyword.charAt(i) == "_"){
			displayedKeyword += selectedKeyword.charAt(i);
		}else{
			displayedKeyword += "_";
		}
	}
	document.getElementById("hangman").value = displayedKeyword;
	document.getElementById("hangman").style.letterSpacing = "5px";
	document.getElementById("msg").value = "The Category is Fruits";
	
	//start of timar
	document.getElementById("startbtn").disabled = true;
	document.getElementById("time").value = seconds_left;
	if(seconds_left == 99){
			timar = setInterval(
		function() {
		document.getElementById("time").value = --seconds_left;
		if(seconds_left == 0){
			document.getElementById("time").value = seconds_left;
			setTimeout(function(){
				alert("Too bad, you lose the game...");
			}, 50);
			stop_timer();
			document.getElementById("startbtn").disabled = false;
			startalr = 0;
			}
		}, 1000);
	}

	//end of timer	
}	

function find(letter) 
	{
		if(startalr == 1){

		var found = false;
		for(i=0;i < selectedKeyword.length;i++)
		{
			if(selectedKeyword.charAt(i) == letter)
				{
					displayedKeyword = setCharAt(displayedKeyword, i, letter);
					found = true;
				}
		}
			document.getElementById(letter).disabled = true;
			if(found == false){
				fails++;
				// ! is to make displayedkeyword.includes not to have an "_" 
			}else
				if(!displayedKeyword.includes("_")){
				win();
			}
			
	document.getElementById("fails").value = fails;
	document.getElementById("hangman").value = displayedKeyword;
	
		if(fails == 6){
			document.getElementById("dedguy").src = "img/7.jpg";
			score--;
			setTimeout(function(){
				alert("why though.... your score is now minus by 1.");
			startGame();}, 100);
		}
		
		//================== picturez================
			if(fails == 1){
		  document.getElementById("dedguy").src = "img/2.jpg";//each images comes with the man's body people drawn out
	  } else if(fails ==2){
		  document.getElementById("dedguy").src = "img/3.jpg";
	  }else if(fails == 3){
		  document.getElementById("dedguy").src = "img/4.jpg";
	  }else if(fails == 4){
		  document.getElementById("dedguy").src = "img/5.jpg";
	  }else if(fails == 5){
		  document.getElementById("dedguy").src = "img/6.jpg";
	  }else if(fails == 6){
		  document.getElementById("dedguy").src = "img/7.jpg";
		}
	
	}else{
//<------------------ to stop people from clicking the button and adding numbers to fail var
		alert("Please Click on the BIG RED 'Start' button!");
	}
	
}

function setCharAt(str,index,chr)
{
	if(index>str.length-1){ return str;}
	return str.substr(0,index) + chr + str.substr(index+1);
}

//------------------------DIFFERENT FUNCTION-------------------
//start of reset game
function resetgame() {
	startalr = 0;
	document.getElementById('time').value = " ";
	clearInterval(timar);
	seconds_left= 99;
	score = 0;
	document.getElementById("score").value = score;
	document.getElementById("startbtn").disabled = false;
	document.getElementById("score").value = " ";
	document.getElementById("resetbtn").disabled = true;
	document.getElementById("fails").value = " ";
	document.getElementById("msg").value = "Click Start to play the game";
	document.getElementById("hangman").style.letterSpacing = "0px";
	document.getElementById("hangman").value = "--- Hangman --- ";
	document.getElementById("dedguy").src = "img/1.jpg";
	var reset_letter = document.getElementsByClassName("letter");
	for(var i = 0;i <reset_letter.length;i++){
		reset_letter[i].disabled = false;
	}
}
//end of reset game


//-------------------------WIN---------------------------
function win() {
	score++;
	document.getElementById("score").value = score;
	
	if(score != 3){
		alert("you win grats, but you got 1 point......");
		document.getElementById("dedguy").src = "img/1.jpg";
		document.getElementById("fails").value = fails;
		document.getElementById("startbtn").disabled = false;
		startalr = 1;
		startGame();
	}else if(score == 3){
		stop_timer();
		//clearInterval(timar);
		document.getElementById('time').value = " ";
		alert("grats, you really beat the gaem, here is my 'sincerest' gratitude to you!");
		document.getElementById("startbtn").disabled = true;
		startalr = 0;
		seconds_left = 99;
		var reset_letter = document.getElementsByClassName("letter");
		for(var i = 0;i <reset_letter.length;i++){
			reset_letter[i].disabled = false;
			}
		}
}

//-------------------instructions function--------------------------------
function instruction() {
	alert("To play Hangman, click on the big red button named 'Start' on the left to play the game. The game rules are simple, \n 1. Click the alphabets that you think fits into the word. \n 2. It takes 6 failed letters to lose a point. (that poor man...) \n 3. After getting a word correct, you will be rewarded with 1 score point. \n 4. Attain a total of 3 points within the time limit to win the game!  \n 5. You will be given a total of 99 seconds to complete the game. \n Lasty, please enjoy the game!");
} 

//stops timer 
function stop_timer(){
	clearInterval(timar);
}
	