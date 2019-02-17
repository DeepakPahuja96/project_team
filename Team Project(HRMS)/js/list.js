$(document).ready(function(){

    // alert("vsdcJWHE")
    $("#createNewUser").click(redirect);
    function redirect(){
        location.replace("create_user.html");
    }

    $.ajax({
        type: 'GET',
        url: 'http://localhost:64061/api/Employees',
        success: function(data) {
        var table = document.getElementById("UserListTable");
        // var emp = document.getElementById("EmployeeId").innerHTML;
        // emp = "vdchaj";
        // console.log(data);
        // for(i=0;i<data.length;i++){
        //     var rows = table.insertRow(table.length);
        //     var td1 = rows.insertCell(0);
        //     var td2 = rows.insertCell(1);
        //     var td3 = rows.insertCell(2);
        //     var td4 = rows.insertCell(3);
        //     var td5 = rows.insertCell(4);
        //     td1.innerHTML = data[i].EmployeeId;
        //     td1.innerHTML = data[i].Name;
        //     td1.innerHTML = data[i].Designation;
        //     td1.innerHTML = data[i].EmailId;
        //     td1.innerHTML = data[i].PhoneNo;
        //     console.log(data);
        // }


        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/SignUps',
            success: function(SignUpData) {
                
                for(i=0; i<data.length;i++){
                    $('#UserListTable').append(
                        '<tr><td id = "SerialNo">' + (i+1) +
                        '</td><td id = "EmployeeId"><a href="required_user.html?id=' + data[i].EmployeeId + '">' + data[i].EmployeeId + '</a>' + 
                        '</td><td id = "Name">' + data[i].Name + 
                        '</td><td id = "Designation">' + data[i].Designation + 
                        '</td><td id = "EmailId">' + SignUpData[i].EmailId + 
                        '</td><td id = "PhoneNo">' + data[i].PhoneNo + 
                        '</td></tr>'
                    );
                }
            }
        });    
        }
    });
});