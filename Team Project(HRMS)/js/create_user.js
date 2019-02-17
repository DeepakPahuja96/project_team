$(document).ready(function(){
    $("#createNewUser").click(createNewUser);


    function createNewUser(){
        var Username = document.getElementById("Username");
        var Password = document.getElementById("Password");

        var newuserdata =  {    
            "user_name": Username.value,
            "password": Password.value,
            "admin": "1"
        };
        console.log(newuserdata);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:64061/api/createuser',   ////////    change URL to hit
            data: newuserdata,
            success: function(data) {
                alert("User Created !!");
                location.replace("list.html");
            }
          
        })
    }; 
})
