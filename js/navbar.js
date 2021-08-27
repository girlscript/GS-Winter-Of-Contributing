
        let toggler=document.getElementById("navbar-toggle");
        let navbar=document.getElementsByClassName("nav-items");
        let togglebutton=document.getElementsByClassName("fa-bars");
        let count=0;
        toggler.addEventListener("click",function(){
            togglebutton[0].classList.toggle("fa-times");
            navbar[0].classList.toggle("active");
        });