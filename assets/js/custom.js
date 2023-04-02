	
// Mosquito Game Javascript File

    let count = 0;

    let isGameStart = false;

    let hitShot = document.getElementById('hitShot');

    let begainGame = document.getElementById("begainGame");
  
    function startGame(){

    document.getElementById("hideShown").style = "display:none";

    document.getElementById("status").innerText = 0;

    isGameStart = true; 

    count = 0;

    let mosquit = document.getElementById('mosquito');

    progress();

    // if(isGameStart!==false){
    //    begainGame.innerText = "Stop Game";
    // } else if(isGameStart!==true){
    // 	begainGame.innerText = "Start Game ";
    // }
	
	let time = setInterval(()=>{
     
    let i = Math.floor(Math.random()*850)+1;

    let j = Math.floor(Math.random()*500)+1;

    let k = Math.floor(Math.random()*750)+1;

    mosquit.style.left = i + "px";

    mosquit.style.top = j + "px";

    mosquit.style.right = k + "px";

    //hitShot.style.left = i + "px";

    //hitShot.style.top = j + "px";

    //hitShot.style.right = k + "px";

	 }, 2000);

    setTimeout(()=>{
      clearTimeout(time);
      isGameStart = false;
      document.getElementById("hideShown").style = "display:inline-block";
      mosquit.style.top = 0 + "px";
      mosquit.style.left = 0 + "px";
      //hitShot.style.left = 0 + "px";
      //hitShot.style.top = 0 + "px";
      hitShot.style.display = "none";
    }, 20000);
    }

    function hitMosquito(){
      abc();
     if(isGameStart){
     	count++;
    	document.getElementById("status").innerText = count;
     } 
     
    }

    // Hit Shot function

       function abc(){
       hitShot.style.display = "block";
      let mark = setTimeout(function() { 
           hitShot.style.display = "none";
      }, 300);

      
    }


  // Progress Bar 
    var i = 0;
    function progress(){
     if(i==0){
      i = 1;
      let ele = document.getElementById("progressBar");
      let width = 10;
      var id = setInterval(frame, 225);
      function frame (){
        if(width>=100){
          clearInterval(id);
          i = 0;
        }else {
           width++;
           ele.style.width = width + "%";
           ele.innerText = width + "%";
        }
      }
     }

    }