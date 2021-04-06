// supporting page:
// - contact page

function req() {
    //change content and change button color
    document.getElementById("meeting").style.display = "none"
    document.getElementById("form").style.display = "block"
    document.getElementById("reqbtn").classList.remove('btn-outline-danger');
    document.getElementById("reqbtn").classList.add('btn-outline-success');
    document.getElementById("meetbtn").classList.remove('btn-outline-success');
    document.getElementById("meetbtn").classList.add('btn-outline-danger');
}

function meet() {
    //change content and change button color
    document.getElementById("meeting").style.display = "block"
    document.getElementById("form").style.display = "none"
    document.getElementById("meetbtn").classList.remove('btn-outline-danger');
    document.getElementById("meetbtn").classList.add('btn-outline-success');
    document.getElementById("reqbtn").classList.remove('btn-outline-success');
    document.getElementById("reqbtn").classList.add('btn-outline-danger');
}

$(document).ready(function () {
    // for email form animation 
    $('#email')
        .focusin(function () {
            $("#content-email").css({
                "transform": "translateY(-150%)",
                "font-size": "14px",
                "color": "rgb(204,133,1)"
            })
            $("#label-email").after(function () {
                $("#label-email").css("transform", "translateX(0%)")
            })
        })
        .focusout(function () {
            if ($('#email').val().length < 1) {
                $("#content-email").css({
                    "transform": "none",
                    "f ont-size": "inherit",
                    "color": "black"
                })

            } else {
                $("#content-email").css({
                    "transform": "translateY(-150%)",
                    "font-size": "14px",
                    "color": "rgb(204,133,1)"
                })
            }
        })
})

$("#txtarea").keydown(function (e) {
    // Enter was pressed without shift key
    if (e.keyCode == 13 && !e.shiftKey) {
        // prevent default behavior
        e.preventDefault();
    }
});

// prevent it from sending, to proc the modal
$("form").submit(function (e) {
    e.preventDefault();
});

//auto resizes the message box (external library)
$('#txtarea').autoResize()

// to measure the characters typed in message
$("#txtarea").keyup(function () {
    $("#char-max").text("Characters: " + $(this).val().length + "/2000");
});

//declaring vars
var modparent = document.querySelector(".modal-p"),
    btn = document.querySelector("#submitbtn"),
    x = document.querySelector(".close"),
    content = document.querySelector(".content-contact"),
    footer = document.querySelector("footer"),
    alertbox = document.querySelector(".alertbox"),
    closealert = document.querySelector(".close-btn")

var navbar = document.querySelector(".content-nav .lelogo")
var navbar1 = document.querySelector(".content-nav .topnav")
var navbar2 = document.querySelector(".content-nav nav")


$(document).ready(function () {
    //submit form
    $('form').on("submit", function () {
        //for blur animation and to make modal appear
        modparent.style.display = "block";
        navbar.style.filter = "blur(10px)";
        navbar1.style.filter = "blur(10px)";
        navbar2.style.filter = "blur(10px)";
        content.style.filter = "blur(10px)";
        footer.style.filter = "blur(10px)";
        //form object to store values from the form
        form = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            service: [],
            msg: document.getElementById('txtarea').value,
            // to get values selected for "service required"
            getservices: function () {
                $.each($(".chkbox:checked"), function () {
                    form.service.push($(this).val());
                });
            }
        }

        //call the method in object
        form.getservices()

        // if no service is selected, make the modal appear as "Not Selected"
        if (form.service.length == 0) {
            $(".modal-service").text("Service: Not Selected")
        } else {
            $(".modal-service").text("Service: " + form.service.join(", "))
        }
        // push all values to modal
        $(".modal-name").text("Name: " + form.name)
        $(".modal-email").text("Email: " + form.email)
        $(".modal-msg").text("Message: " + form.msg)
    });
});
// when "X" is clicked
x.addEventListener("click", function () {
    modparent.style.display = "none";
    navbar.style.filter = "";
    navbar1.style.filter = "";
    navbar2.style.filter = "";
    content.style.filter = "";
    footer.style.filter = "";
})
// when you click outside the modal
modparent.addEventListener("click", function (e) {
    if (e.target.className == "modal-p") {
        modparent.style.display = "none";
        navbar.style.filter = "";
        navbar1.style.filter = "";
        navbar2.style.filter = "";
        content.style.filter = "";
        footer.style.filter = "";
    }
})

// cancel function for modal's cancel button
function cancel() {
    modparent.style.display = "none";
    navbar.style.filter = "";
    navbar1.style.filter = "";
    navbar2.style.filter = "";
    content.style.filter = "";
    footer.style.filter = "";
}

// send function for modal's send button
function send() {
    modparent.style.display = "none";
    navbar.style.filter = "";
    navbar1.style.filter = "";
    navbar2.style.filter = "";
    content.style.filter = "";
    footer.style.filter = "";
    // to make the alert appear
    setTimeout(() => {
        alertbox.style.display = "inherit";
        alertbox.style.animation = "0.7s alertdrop";
        alertbox.style.opacity = "1"
        clearTimeout()
    }, 500);
}

//  to close the alert 
closealert.addEventListener("click", () => {
    alertbox.style.animation = "fadeOut ease-out 0.4s";
    alertbox.style.opacity = "0"
    setTimeout(() => {
        alertbox.style.display = "none";
        clearTimeout()
    }, 450);
})