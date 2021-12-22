// for the arithemetic section of the calculator

// a for loop getting all the numbers buttons
for (let i = 0; i < document.querySelectorAll(".no").length; i++) {
    document.querySelectorAll(".no")[i].addEventListener("click", function() {
      //  gets the innertext of all the buttons on click and stores it in a variable input
       var input = this.innerText; 
      //  pushes the innertext gotten into an array clickedArray
       clickedArray.push(input)
      // this reduces the font-size of text in the calculator screen
       if(clickedArray.length >= 12){
           document.querySelector(".screen h1").classList.add("minimize-text")
           document.querySelector(".screen h2").classList.add("minimize-text")
       }
       else{
          document.querySelector(".screen h1").classList.remove("minimize-text")
          document.querySelector(".screen h2").classList.remove("minimize-text")
       }
       // this reduces the font-size of text in the calculator screen further
       if(clickedArray.length >= 25){
           document.querySelector(".screen h1").classList.add("minimize-text-further")
       }
       else{
          document.querySelector(".screen h1").classList.remove("minimize-text-further")
       }
      //  targets the h1/display and shows the array without commas, hence join('')
       document.querySelector(".screen h1").innerText = clickedArray.join('')
    })
}

// an initialized array for all clicked buttons
let clickedArray = [];


// a function to remove numbers from the array
function removeNumber() { 
   clickedArray.pop()
   document.querySelector(".screen h1").innerText = clickedArray.join('')
}

// a function which prints the result of an calculation made on screen using the evall method, which accepts a string and gets the arithemtic equivalent.
function result () {
  let head =  document.querySelector(".screen h1").innerText;
  head = eval(head);
  document.querySelector(".screen h2").innerText = head;
}


// a function which reloads the page to remove the numbers from the screen
function reload() {
   window.location.reload()
}

// for the styling/toggling section of the calculator

let dark = document.querySelectorAll(".top p")[0];
let light = document.querySelectorAll(".top p")[1];
let purple = document.querySelectorAll(".top p")[2];

function lightTheme() { 
   document.getElementsByClassName("toggle-box")[0].classList.add("lighttoggler")
   document.getElementsByTagName("body")[0].classList.add("lightBack");
   document.querySelector(".numbers").classList.add("lightnumbers");
   document.querySelector(".screen").classList.add("lightscreen");
   document.querySelector("div.del").classList.add("lightdel");
   document.querySelector(".reset").classList.add("lightreset");
   document.querySelector(".reset button").classList.add("lightresetbutton");
   document.querySelector("div.equate").classList.add("lightequate");
   for (let i = 0; i < document.querySelectorAll("div.no").length; i++){
      document.querySelectorAll("div.no")[i].classList.add("lightKeypad")
   }

   document.getElementsByClassName("toggle-box")[0].classList.remove("purpletoggler")
   document.getElementsByTagName("body")[0].classList.remove("purpleBack");
   document.querySelector(".numbers").classList.remove("purplenumbers");
   document.querySelector(".screen").classList.remove("purplescreen");
   document.querySelector("div.del").classList.remove("purpledel");
   document.querySelector(".reset").classList.remove("purplereset");
   document.querySelector(".reset button").classList.remove("purpleresetbutton");
   document.querySelector(".equate button").classList.remove("purpleequatebutton");
   document.querySelector("div.equate").classList.remove("purpleequate");
   for (let i = 0; i < document.querySelectorAll("div.no").length; i++){
      document.querySelectorAll("div.no")[i].classList.remove("purplekeypad")
   }
}

function purpleTheme() { 
   document.getElementsByClassName("toggle-box")[0].classList.add("purpletoggler")
   document.getElementsByTagName("body")[0].classList.add("purpleBack");
   document.querySelector(".numbers").classList.add("purplenumbers");
   document.querySelector(".screen").classList.add("purplescreen");
   document.querySelector("div.del").classList.add("purpledel");
   document.querySelector(".reset").classList.add("purplereset");
   document.querySelector(".reset button").classList.add("purpleresetbutton");
   document.querySelector(".equate button").classList.add("purpleequatebutton");
   document.querySelector("div.equate").classList.add("purpleequate");
   for (let i = 0; i < document.querySelectorAll("div.no").length; i++){
      document.querySelectorAll("div.no")[i].classList.add("purplekeypad")
   }

   document.getElementsByClassName("toggle-box")[0].classList.remove("lighttoggler")
   document.getElementsByTagName("body")[0].classList.remove("lightBack");
   document.querySelector(".numbers").classList.remove("lightnumbers");
   document.querySelector(".screen").classList.remove("lightscreen");
   document.querySelector("div.del").classList.remove("lightdel");
   document.querySelector(".reset").classList.remove("lightreset");
   document.querySelector(".reset button").classList.remove("lightresetbutton");
   document.querySelector("div.equate").classList.remove("lightequate");
   for (let i = 0; i < document.querySelectorAll("div.no").length; i++){
      document.querySelectorAll("div.no")[i].classList.remove("lightKeypad")
   }
}

function darkTheme() {
   document.getElementsByClassName("toggle-box")[0].classList.remove("lighttoggler")
   document.getElementsByTagName("body")[0].classList.remove("lightBack");
   document.querySelector(".numbers").classList.remove("lightnumbers");
   document.querySelector(".screen").classList.remove("lightscreen");
   document.querySelector("div.del").classList.remove("lightdel");
   document.querySelector(".reset").classList.remove("lightreset");
   document.querySelector(".reset button").classList.remove("lightresetbutton");
   document.querySelector("div.equate").classList.remove("lightequate");
   for (let i = 0; i < document.querySelectorAll("div.no").length; i++){
      document.querySelectorAll("div.no")[i].classList.remove("lightKeypad")
   }

   document.getElementsByClassName("toggle-box")[0].classList.remove("purpletoggler")
   document.getElementsByTagName("body")[0].classList.remove("purpleBack");
   document.querySelector(".numbers").classList.remove("purplenumbers");
   document.querySelector(".screen").classList.remove("purplescreen");
   document.querySelector("div.del").classList.remove("purpledel");
   document.querySelector(".reset").classList.remove("purplereset");
   document.querySelector(".reset button").classList.remove("purpleresetbutton");
   document.querySelector(".equate button").classList.remove("purpleequatebutton");
   document.querySelector("div.equate").classList.remove("purpleequate");
   for (let i = 0; i < document.querySelectorAll("div.no").length; i++){
      document.querySelectorAll("div.no")[i].classList.remove("purplekeypad")
   }
}


