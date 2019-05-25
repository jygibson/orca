
$(document).ready(function () {

    //how to handle the submit on the create form, sends data to the database
    $("#submitbutton").on("click", submitMember);

    function submitMember(event) {
        event.preventDefault();
        if (document.getElementById("gridCheck1").checked === true) {
            $("#successModal").modal("show");
            var newMember = {
                name: $("#name").val(),
                email: $('#inputEmail').val(),
                phone: $('#inputPhone').val(),
                memberType: $('input[name=gridRadios]:checked').val(),
                disabilityType: $('#disability').val(),
                agreement: $('input[name=gridCheck1]:checked').checked,
            }
            console.log(newMember)

            $.post("/api/signup", newMember)
                .then(function (dbPost) {
                    console.log("new member created", dbPost)
                })

        } else {
            $("#failModal").modal("show");
        };

    }
})