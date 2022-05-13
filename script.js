$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let value = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, value);

        $("notification").addClass("show");

        setTimeout(function () {
            $(".notification").removeClass("show");
        }, 5000)
    })
    function hourUpdates() {
        let currentH = moment().hours();

        $(".time-block").each(function () {
            let blockH = parseInt($(this).attr("id").split("-")[1])
            if (blockH < currentH) {
                $(this).addClass("past");
            } else if (blockH === currentH) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourUpdates();
    let interval = setInterval(hourUpdates, 15000);
    $("hour-9 .description").val(localStorage.getItem("hour-9"));
    $("hour-10 .description").val(localStorage.getItem("hour-10"));
    $("hour-11 .description").val(localStorage.getItem("hour-11"));
    $("hour-12 .description").val(localStorage.getItem("hour-12"));
    $("hour-13 .description").val(localStorage.getItem("hour-13"));
    $("hour-14 .description").val(localStorage.getItem("hour-14"));
    $("hour-15 .description").val(localStorage.getItem("hour-15"));
    $("hour-16 .description").val(localStorage.getItem("hour-16"));
    $("hour-17 .description").val(localStorage.getItem("hour-17"));
    $("hour-18 .description").val(localStorage.getItem("hour-18"));
    $("hour-19 .description").val(localStorage.getItem("hour-19"));
    $("hour-20 .description").val(localStorage.getItem("hour-20"));
    $("hour-21 .description").val(localStorage.getItem("hour-21"));
    $("hour-22 .description").val(localStorage.getItem("hour-22"));
    $("hour-23 .description").val(localStorage.getItem("hour-23"));
    $("hour-24 .description").val(localStorage.getItem("hour-24"));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});


