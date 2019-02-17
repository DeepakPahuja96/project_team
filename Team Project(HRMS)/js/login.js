$(document).ready(function(){
    $("#LoginBtn").click(redirect);
    function redirect(){
        location.replace("list.html");
    }

    $("#LoginBtn").click(Login);
    function Login(){
        var EmailId = document.getElementById("EmailId");
        var Password = document.getElementById("Password");
        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/logintable',    ////     change the url to hit
            success: function(data) {
                for(i=0; i<data.length;i++){
                    if(EmailId.value == data[i].email){
                        if(Password.value == data[i].password){
                            if(data[i].Admin == "1"){
                                localStorage.setItem("Role", "Admin");
                                localStorage.setItem("Token", "       HERE         ")  ///////   here set the value of token coming from jwt to authenticate for other pages
                                location.replace("list.html");
                            }
                            else{
                                localStorage.setItem("Role", "Employee");
                                localStorage.setItem("Token", "       HERE         ")  ///////   here set the value of token coming from jwt to authenticate for other pages
                                location.replace("skills.html");
                            }
                        } 
                    }
                }
            }
        });
    }
})
