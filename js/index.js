
$(document).ready(function () {

    console.log('the jquery is loading')
    //how to handle the submit on the create form, sends data to the database
    $(".btn").on("click", submitMember);

    function submitMember(event) {
        event.preventDefault();
        var newMember = {
            name: $("#name").val(),
            email: $('#inputEmail').val(),
            phone: $('#inputPhone').val(),
            memberType: $('#form-check-input').checked,
            disabilityType: $('#disability').val(),
            agreement: $('#gridCheck1').checked
        }
        console.log(newMember)
        app.post("https://localhost:3000/api/signup", function (req, res) {
        console.log(req.body);
        db.Member.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            type: req.body.memberType,
            disabilityType: req.body.disabilityType,
            agreement: req.body.agreement,
        })
        .then(function(dbPost){
            res.json(dbPost);
        });
    });
        // $.ajax("/api/signup", {
        //     method: "POST",
        //     data: newMember,
        // }).then(function () {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.log("posted to database", newMember);
        //     }
        //     location.reload()
        // });
    }
})