$(document).ready(function () {
    var ProjectName = document.getElementById("ProjectName");
    var StartDate = document.getElementById("StartDate");
    var Deadline = document.getElementById("Deadline");
    var Techstack = document.getElementById("Techstack");


    if (localStorage.getItem("Role") == "Admin") {

        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/projectstable',  ////     change the url to hit   ///   if admin is logged in it will list all the projects in the company
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    $('#ProjectsListTable').append(
                        '<tr><td id = "SerialNo">' + (i + 1) +
                        '</td><td id = "ProjectName"><a href="project_details.html?id=' + data[i].name + '">' + data[i].name + '</a>' +
                        '</td><td id = "StartDate">' + data[i].Startdate +                ///////   just cahnge the name of variables as declared in the schema
                        '</td><td id = "Deadline">' + data[i].Deadline +                ///////   just cahnge the name of variables as declared in the schema
                        '</td></tr>'
                    );
                }

            }
        });

        ///////////////////////////////     SELECT 2 DATA GET REQUEST///////////////////////////

        $('.selectbox').select2({
            placeholder: 'Select an option'
        });


        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/technologytable',  ////     change the url to hit   ///   if admin is logged in it will list all the projects in the company
            success: function (data) {

                for (i = 0; i < data.length; i++) {
                    $("#select2dropdown").append(
                        '<option value="' + data[i].name + '">' + data[i].name + '</option>' 
                    )
            
                }

            }
        });


        ////////////////////////////////////////////////////////////////////////////////


        $("#AddProjectBtn").click(addProjectFuncAdmin);

        function addProjectFuncAdmin() {
            var newprojectdata = {
                "name": ProjectName.value,      //////  set the key value as per the database key values
                "Startdate": StartDate.value,       //////  set the key value as per the database key values
                "Deadline": Deadline.value,       //////  set the key value as per the database key values
                "technology": Techstack.value       //////  set the key value as per the database key values
            };
            console.log(newprojectdata);

            $.ajax({
                type: 'POST',
                url: 'http://localhost:64061/api/createskill',   ////////    change URL to hit the ADMIN skills table
                data: newprojectdata,
                success: function (data) {
                    alert("Project" + ProjectName.value + "Added !!");
                }
            })
        }
    }



    if (localStorage.getItem("Role") == "Employee") {

        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/projectstableofemployee',  ////     change the url to hit   ///   if admin is logged in it will list all the projects in the company
            success: function (data) {
                var table = document.getElementById("ProjectsListTable");

                for (i = 0; i < data.length; i++) {
                    $('#ProjectsListTable').append(
                        '<tr><td id = "SerialNo">' + (i + 1) +
                        '</td><td id = "ProjectName">' + data[i].ProjectName +
                        '</td><td id = "StartDate">' + data[i].Startdate +                ///////   just cahnge the name of variables as declared in the schema
                        '</td><td id = "Deadline">' + data[i].Deadline +                ///////   just cahnge the name of variables as declared in the schema
                        '</td></tr>'
                    );
                }

            }
        });

        document.getElementById("right_div").style.visibility = "collapse";
        document.getElementById("left_div").style.top = "16%";

        var x = window.matchMedia("(max-width: 767px)");

        function resizeFunc(x) {
            if (x.matches) {
                alert("1")
                document.getElementById("left_div").style.width = "92%";
            } else {
                alert("2")
                document.getElementById("left_div").style.width = "92%";
            }
        }

        resizeFunc(x);
        x.addListener(myFunction);

    }
});