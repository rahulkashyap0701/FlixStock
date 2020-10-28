var x, i;
var total = 0;
x = document.querySelectorAll(".option");
for (i = 0; i < x.length; i++) {

    x[i].addEventListener("click", function (e) {
        $(event.currentTarget).addClass("disabled");
        $(event.currentTarget).next().filter('.cross').css("display", "block");
        $("#appchild").append(e.target.outerHTML);
        $("#appchild div").addClass("popup");
        $("#snackbarBtn").click();
        total = 0;
        $('.modal-body').find('.option').each(function (inx, ele) {
            total += +$(ele).attr('value')
        })

        $(".total").html(total);

    });

}

$(document).ready(function () {
    $('#modlBtn').click(function () {
        alert(total);
        $("#closebtn").click();
    });
    $('#snackbarBtn').click(function () {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);


    });
    var caltotal = function () {
        total = 0;
        $('.modal-body').find('.option').each(function (inx, ele) {
            total += +$(ele).attr('value')
        })

        $(".total").html(total);
    }
    $('.cross1').click(function () {

        $(".opt1.popup").remove();
        $(".opt1").removeClass("disabled");
        $(".cross1").css("display", "none");
        caltotal();


    });
    $('.cross2').click(function () {
        $(".opt2.popup").remove();
        $(".opt2").removeClass("disabled");
        $(".cross2").css("display", "none");
        caltotal();

    });
    $('.cross3').click(function () {
        $(".opt3.popup").remove();
        $(".opt3").removeClass("disabled");
        $(".cross3").css("display", "none");
        caltotal();
    });
    $('.cross4').click(function () {
        $(".opt4.popup").remove();
        $(".opt4").removeClass("disabled");
        $(".cross4").css("display", "none");
        caltotal();
    });
    $('.cross5').click(function () {
        $(".opt5.popup").remove();
        $(".opt5").removeClass("disabled");
        $(".cross5").css("display", "none");
        caltotal();
    });
    $('.cross6').click(function () {
        $(".opt6.popup").remove();
        $(".opt6").removeClass("disabled");
        $(".cross6").css("display", "none");
        caltotal();
    });
});


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var closebtn = document.getElementById("closebtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    $(".ani").addClass("flip-in-hor-bottom");
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
closebtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}