
$(document).ready(function () {

    //how to handle the submit on the create form, sends data to the database
    $("#submitbutton").on("click", submitMember);

    function submitMember(event) {
        event.preventDefault();
        var newMember = {
            name: $("#name").val(),
            email: $('#inputEmail').val(),
            phone: $('#inputPhone').val(),
            memberType: $('input[name=gridRadios]:checked').val(),
            disabilityType: $('#disability').val(),
            agreement: $('#gridCheck1').checked
        }
        console.log(newMember)
        $.post("/api/signup", newMember)
            .then(function (dbPost) {
                console.log("new member created", dbPost)
            })


    }
})