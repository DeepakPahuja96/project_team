$(document).ready(function(){

    $("#createNewUser").click(redirect);
    function redirect(){
        location.replace("create_user.html");
    }

    $.ajax({
        type: 'GET',
        url: 'http://localhost:64061/api/userstable',        ////     change the url to hit
        success: function(data) {
        var table = document.getElementById("UserListTable");

                for(i=0; i<data.length;i++){
                    $('#UserListTable').append(
                        '<tr><td id = "SerialNo">' + (i+1) +
                        '</td><td id = "Name">' + data[i].user_name + 
                        '</td><td id = "EmployeeId">' + data[i].email + '</a>' + 
                        '</td><td id = "Password">' + data[i].password + 
                        '</td></tr>'
                    );
                }
            
        }  
        });
    });