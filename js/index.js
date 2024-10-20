
//* animation 1 || home 
$(".openSidebar").on("click", function () {
    $(".sidebar").animate({ left: 0 }, 1000)
    $(".openSidebar").animate({ left: `278` }, 1000)
})
$(".close").on("click", function () {
    $(".sidebar").animate({ left: "-270px" }, 1000)
    $(".openSidebar").animate({ left: 8 }, 1000)
})

//* animation 2 || singer
$(".box1 .toggle").click(function () {
    $(this).next().slideToggle();
    $(".inner").not($(this).next()).slideUp();
})


//* animation 3 || contact

$("textarea").keyup(function () {
    let numWords = $(this).val().length;
    $(".num").text(
        100 - numWords <= 0 ? "error" : 100 - numWords
    )
})

//* animation 4 || sidebar
$("#home .sidebar a").click(function () {
    const valueHref = $(this).attr("href");
    const currentoffset = $(valueHref).offset().top;
    $("html, body").animate({ scrollTop: currentoffset }, 1000);
})

//* animation 5 || timer


window.onload = function () {
    countDownToTime("1 january 2025 12:00:00");
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    setInterval(function () { countDownToTime(countTo); }, 1000);
}