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