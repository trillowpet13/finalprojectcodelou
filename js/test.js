
$(document).ready(function() {
    $(".expand-aboutme").click(function() {
       $("#hide").hide( {
       });
       
       $("#animate-aboutme").animate({
            width: "100%"
       });
       
       $("#show-aboutme").show({
       });
        
        $(".animate-fix").animate({
            width: "30%"
       });
    });
});

