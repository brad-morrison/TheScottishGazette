var logo = document.getElementById("logo");
var menu = document.getElementById("menu");
var menuItems = document.getElementById("menuItems");
var adTall = document.getElementById("ad-tall");

window.onscroll = function(){scrollAction()};

function scrollAction()
{
    console.log(window.pageYOffset);
    
    if (window.innerWidth > 1024)
    {
        if (pageYOffset > 140)
        {
            logo.style.width = "30%";
            menu.style.borderBottom = "1px solid #e5e5e5";
            menu.style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.1)";
            menuItems.style.borderBottom = "none";
        }
        else
        {
            logo.style.width = "60%";
            menu.style.borderBottom = "none";
            menuItems.style.borderBottom = "1px solid #e5e5e5";
            menu.style.boxShadow = "none";
        }
    }
    
    /*if (pageYOffset > 1564)
    {
        adTall.style.position = "fixed";
    }*/
}