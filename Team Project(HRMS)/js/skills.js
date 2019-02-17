$(document).ready(function () {
    var user_list_page_navigation = document.getElementById("to_invisible");
    var SkillName = document.getElementById("SkillName");
    var selectmenu = document.getElementById("selectmenu");



    ///////////////////////////////////////////////////////////////////////////

    $("#select2dropdown").append(
        '<option value="AL">Alabama</option>' +
        '<option value="WY">Wyoming</option>' +
        '<option value="AL">delhi</option>' +
        '<option value="WY">mumbai</option>' +
        '<option value="AL">rajasthan</option>' +
        '<option value="WY">goa</option>' +
        '<option value="AL">pune</option>' +
        '<option value="WY">gujarat</option>' +
        '<option value="AL">allahabad</option>' +
        '<option value="WY">punjab</option>' 
    )


    $('.selectbox').select2({
        placeholder: 'Select an option'      });

      $('.selectbox').on('selec2:select', function(e){
          alert("selkebjkkxe");
      })


    ////////////////////////////////////////////////////////////////////////////////

    if (localStorage.getItem("Role") == "Admin") {

        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/tecchnologytable',        ////     change the url to hit   ///   if admin is logged in it will list all the skills
            success: function (data) {
                var table = document.getElementById("SkillsListTable");

                for (i = 0; i < data.length; i++) {
                    $('#SkillsListTable').append(
                        '<tr><td id = "SerialNo">' + (i + 1) +
                        '</td><td id = "SkillName">' + data[i].name +
                        '</td><td id = "Category">' + data[i].implementation +
                        '</td></tr>'
                    );
                }

            }
        });

        $("#AddSkillsBtn").click(addSkillFuncAdmin);

        function addSkillFuncAdmin() {
            var newskilldata = {
                "name": SkillName.value,      //////  set the key value as per the database key values
                "implementation": selectmenu.value       //////  set the key value as per the database key values
            };
            console.log(newskilldata);

            $.ajax({
                type: 'POST',
                url: 'http://localhost:64061/api/createnewskill',   ////////    change URL to hit the ADMIN skills table
                data: newskilldata,
                success: function (data) {
                    alert(SkillName.value + "added as a skill !!");
                }

            })
        }
    }




    if (localStorage.getItem("Role") == "Employee") {

        user_list_page_navigation.style.visibility = hidden;       //////     hiding the users navigation in navbar if employee logs in

        $.ajax({
            type: 'GET',
            url: 'http://localhost:64061/api/SkillstableOfEmployee',        ////     change the url to hit   ///   if employee is logged in it will show the techstack list
            success: function (data) {
                var table = document.getElementById("SkillsListTable");

                for (i = 0; i < data.length; i++) {
                    $('#SkillsListTable').append(
                        '<tr><td id = "SerialNo">' + (i + 1) +
                        '</td><td id = "SkillName">' + data[i].SkillName +
                        '</td><td id = "Category">' + data[i].Category +
                        '</td></tr>'
                    );
                }

            }
        });

        $("#AddSkillsBtn").click(addSkillFuncEmployee);

        function addSkillFuncEmployee() {
            var newskilldata = {
                "SkillName": SkillName.value,      //////  set the key value as per the database key values
                "selectmenu": selectmenu.value       //////  set the key value as per the database key values
            };
            console.log(newskilldata);

            $.ajax({
                type: 'POST',
                url: 'http://localhost:64061/api/createskill',   ////////    change URL to hit the EMPLOYEE skills table
                data: newskilldata,
                success: function (data) {
                    alert(SkillName.value + "added as a skill !!");
                }

            })
        }

    }




})