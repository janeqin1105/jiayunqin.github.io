var password ="123";
var pass;

// password protect before into the website
pass = prompt('Please enter password to view this page')

do {
    if (pass == password){
        window.location="http://www.jiayunqin.com";
    }
    else{
        alert('Wrong password, please try again.');
        pass = prompt('Please enter password to view this website.')
    }
} while (pass != password)
  


//password protect modal into a project page
function passcheck(){
 
   if(document.getElementById('password').value != password){
        alert("Wrong password, please try again.");
         return false;
     }

   if(document.getElementById('password').value == password){
        modal_container.classList.add('hide');
    }
}

//show or hide the password input
 function toggle(){
    if (state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='rgba(0, 0, 0, 0.15)';
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='rgba(0, 0, 0, 0.55)';
        state = true;
    }
} 


   
