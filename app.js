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