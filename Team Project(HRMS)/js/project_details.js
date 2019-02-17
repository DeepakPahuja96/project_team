$(document).ready(function () {

    var getUrl = function getUrl(param) {
        var pageUrl = window.location.search.substring(1);
        var urlVariables = pageUrl.split("&");
        var parameterName;
        var i;
        for (i = 0; i < urlVariables.length; i++) {
            parameterName = urlVariables[i].split("=");
            if (parameterName[0] == param) {
                return parameterName[1] == undefined ? true : decodeURIComponent(parameterName[1]);
            }
        }
    }

    var ProjectId = getUrl("id");
    // console.log(Projectid);

    var technologyArray = [];

    $.ajax({
        type: 'GET',
        url: 'http://localhost:64061/api/projectstable',  ////     change the url to hit  to show only desired project information
        success: function (data) {

            for (i = 0; i < data.length; i++) {
                $('#ProjectsListTable').append(
                    '<tr><td id = "SerialNo">' + (i + 1) +
                    '</td><td id = "ProjectName">' + data[i].name +
                    '</td><td id = "StartDate">' + data[i].Startdate +                ///////   just cahnge the name of variables as declared in the schema
                    '</td><td id = "Deadline">' + data[i].Deadline +                ///////   just cahnge the name of variables as declared in the schema
                    '</td><td id = "Techstack">' + data[i].technology +                ///////   just cahnge the name of variables as declared in the schema
                    '</td></tr>'
                );
            }

        }
    });


    $.ajax({
        type: 'GET',
        url: 'http://localhost:64061/api/employee',  ////     change the url to hit  to show desired users good to do project
        success: function (data) {

            for (i = 0; i < data.length; i++) {

                var skills = data[i].skills;



                $('#mydiv').append(
                    '<div class="col col-xs-4 col-sm-3" style = "background:none;">' +
                    '<div class="card">' +
                    '<img src="images/image.jpeg" style="width:100%; border-radius: 50%" alt="">' +
                    '<p style="font-size:14px;margin-top: 10px;"><b>' + 'Deepak Pahuja' + '</b></p>' +
                    '<p class="title" style="padding-bottom: 16px;">' + 'HTML, CSS, JAVASCRIPT, BOOTSTRAP, JQUERY, MERN  STACK' + '</p>' +
                    '</div>' +
                    '</div>'
                );
            }
        }
    });

});


