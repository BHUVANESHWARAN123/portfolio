const mainMenu = document.querySelector('.mainmenu');
const openMenu = document.querySelector('.openmenu');
const closeMenu = document.querySelector('.closemenu');

var x=document.getElementsByTagName('a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show()
{
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
}

function close()
{
    mainMenu.style.top="-120%";
}

for(var i=0;i<9;i++)
{
    x[i].addEventListener('click',close);
}

// contact page to mail[Start]

var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
            form.reset()
            alert("Thanks for your submission!");
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
                alert("Oops! There was a problem in submitting your form");
            }
          })
        }
      }).catch(error => {
        alert("Oops! There was a problem in submitting your form");
      });
    }
    form.addEventListener("submit", handleSubmit);

    // contact page to mail[end]

    // chatbot start

    // for bot button clicking....

    var chatbox = document.querySelector(".chatbox");
    var botbutton = document.querySelector(".boticon");
    var closebutton = document.querySelector(".closeicon");

    botbutton.addEventListener('click',slideshow);
    closebutton.addEventListener('click',slideclose);

    function slideshow(){
      chatbox.style.bottom="0";
    }

    function slideclose(){
      chatbox.style.bottom="-120%";
    }
    
    // bot button end
    
    // get time

    function gettime(){
      var today = new Date();
      hours = today.getHours();
      minutes = today.getMinutes();
      if(hours<10)
      hours = "0" + hours;
      
      if(minutes<10)
      minutes = "0" + minutes;

      var time = hours + ":" + minutes;
      return time;
    }

    // first bot message

    function firstbotmessage(){
      var firstmessage = "Hello, how are you?";
      document.getElementById("botstartmessage").innerHTML = firstmessage;
      
      var time = gettime();

      $('#timestamp').append(time);
      document.getElementById("userinput").scrollIntoView(false);
    }
    firstbotmessage();

    // receive the final response from bot

    function getfinalresponse(userText){
      var botresponse = getbotresponse(userText);
      var bothtml = '<p class="botText"><span>' + botresponse + '</span></p>';

      $("#chattext").append(bothtml);

      // document.getElementById("chatbottom").scrollIntoView(true);
    }

    // get user input value
    function getresponse(){
      var userText = $("#textinput").val();
      var userhtml = '<p class="userText"><span>' + userText + '</span></p>';

      $("#textinput").val("");
      $("#chattext").append(userhtml);
      // document.getElementById("chatbottom").scrollIntoView(true);
      setTimeout(() => {
        
        getfinalresponse(userText);
      },1000)
    }

    // if send button clicks, message will be sent

    function sendbutton(){
      getresponse(); 
    }

    // if enter is clicked, message will be sent

    $("#textinput").keypress(function(e){
      if(e.which == 13)
      getresponse();
    });

    // simple responses

    function getbotresponse(input){
      if(input == "hello" || input == "hi" || input == "Hello" || input == "Hi"){
        return "Hello there!";
      }else if(input == "fine" || input == "nice"  || input == "Good" || input == "Fine" || input == "Nice"  || input == "Good"){
        return "Glad to hear this!";
      }else if(input == "goodbye" || input == "Goodbye" || input == "good bye" || input == "Good bye"){
        return "Talk to you later!"
      }else if(input == "what is your name" || input == "what is your name?" || input == "What is your name" || input == "What is your name?"){
        return "ChatBot!!";
      }else if(input == "who developed this website" || input == "who developed this website?" || input == "Who developed this website" || input == "Who developed this website?"){
        return "Bhuvaneshwaran!";
      }else{
        return "Try ask something else!";
      }
    }

    





    // chatbot end
