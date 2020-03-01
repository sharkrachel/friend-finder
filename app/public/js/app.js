$(document).ready(function(){
    $(".survey-submit").on("click", function() {
        // {
        //     name: "Rachel",
        //     photo: "url",
        //     scores: [
        //         5,
        //         5,
        //         5,
        //         5,
        //         5,
        //         5,
        //         5,
        //         5,
        //         5,
        //         5
        //     ]
        // }

            var newFriend = {
                name: $("#first_name").val(),
                photo: $("#photo_url").val(),
                scores: [$(".q1").val(),
                $(".q2").val(), 
                $(".q3").val(),
                $(".q4").val(),
                $(".q5").val(),
                $(".q6").val(),
                $(".q7").val(),
                $(".q8").val(),
                $(".q9").val(),
                $(".q10").val()          
            ]} 
        $.ajax({
            url: "/api/friends",
            method: "POST",
            data: newFriend
        }).then(function(matchedFriend){
            console.log(matchedFriend);
                
        });

    });


})