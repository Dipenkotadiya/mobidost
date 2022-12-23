// JavaScript 
// function OpenButton(){
//     document.getElementById('mymodal').style.display = "block";
//     document.getElementById('Full_contain').style.backgroundColor = "#0000008a";
// }

// function CloseButton(){
//     document.getElementById('mymodal').style.display = "none";
//     document.getElementById('Full_contain').style.backgroundColor = "#fff";
// }



// JQUERY  :-
$(document).ready(function () {
    $('#signin').click(function () {
        $('#signin_modal').show()
        // $('.Full_contain').css('background-color', '#0000008a')
    })

    $('#remove').click(function () {
        $('#signin_modal').hide();
        // $('.Full_contain').css('background-color', '#fff')
    })

    $('#signup').click(function () {
        $('#signin_modal').hide()
        $('#signup_modal').show()
    })

    $('#remove2').click(function () {
        $('#signup_modal').hide();
    })

    $('#signupbtn').click(function () {
        $('#signup_modal').hide()
        $('#signup_modal1').show()
    })

    $('#signin1').click(function () {
        $('#signup_modal').hide()
        $('#signin_modal').show()
    })

    $('#remove3').click(function () {
        $('#signup_modal1').hide();
    })

    $('#signin2').click(function () {
        $('#signup_modal1').hide()
        $('#signin_modal').show()
    })

})