
$(document).ready(function () {  
    $("a").on("click", function (event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate( {
            scrollTop: $(hash).offset().top,
                },1500, function () {            
                window.location.hash = hash;
                }
            );
        } 
    });
    $("#btn-cont").on("click", function (event){
        setTimeout(function() {
            $(".jumbotron").fadeIn(1500);
        },3000);        
    })
});
