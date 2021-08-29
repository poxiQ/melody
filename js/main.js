$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var apartmentPath = $(".apartment-image path");
    var apartmentLi = $(".popup-menu li");
    
    
    floorPath.on("mouseover", function(){
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
        floorPath.removeClass("current-floor");
        $(".counter-floor").text("Этаж " + currentFloor.toLocaleString('en-US', {minimumIntegerDigits:1, 
            useGrouping:false}));
    });

    apartmentPath.on("mouseover", function(){
        currentApartment = $(this).attr("data-apartment");
        apartmentLi.removeClass("current-li");
        apartmentPath.removeClass("current-apartment");
        $(`[data-apart=${currentApartment}]`).toggleClass("current-li");
        
    });
    
    apartmentLi.on("mouseover", function(){
        currentLi = $(this).attr("data-apart");
        apartmentLi.removeClass("current-li");
        apartmentPath.removeClass("current-apartment");
        $(`[data-apartment=${currentLi}]`).toggleClass("current-apartment");
    });

    counterUp.on("click", function () {
        if(currentFloor < 18){
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, 
                useGrouping:false})
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(".counter-floor").text("Этаж " + currentFloor.toLocaleString('en-US', {minimumIntegerDigits:1, 
                useGrouping:false}));
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if(currentFloor > 2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, 
                useGrouping:false})
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(".counter-floor").text("Этаж " + currentFloor.toLocaleString('en-US', {minimumIntegerDigits:1, 
                useGrouping:false}));
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    $(".button-primary").on("click", function () {
        $("#popup1").show();
    });

    $(".exit").on("click", function () {
        $("#popup1").hide();
    });

    $("#popup1").hide();
    
});