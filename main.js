        var menu_btn = document.getElementById('menu-btn');
        var side_nav = document.getElementById('side-nav');

        side_nav.style.right = "-250px";

        menu_btn.onclick = function (){
            if(side_nav.style.right == "-250px"){

            side_nav.style.right = "0";

            }   else{

                side_nav.style.right = "-250px";
            }
        }
        