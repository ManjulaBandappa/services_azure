$(document).ready(function(){
   $('#module').change(function() {
        var module="";
        module = $(this).val();
        environment = $('#environment').val();
        console.log(module + " " + environment);
        if (environment == "0"){
            console.log("Please select environment");
        }else if (module == "ibplanning" && environment == "prod"){
            $('.ibplanning-prod').show()
            $('.ibplanning-nonprod').hide()
            $('.dispatch-prod').hide()
            $('.dispatch-nonprod').hide()
        }else if (module == "dispatch" && environment == "prod"){
            $('.ibplanning-prod').hide()
            $('.ibplanning-nonprod').hide()
            $('.dispatch-prod').show()
            $('.dispatch-nonprod').hide()
        }else if (module == "ibplanning" && environment == "nonprod"){
            $('.ibplanning-prod').hide()
            $('.ibplanning-nonprod').show()
            $('.dispatch-prod').hide()
            $('.dispatch-nonprod').hide()
        }else if (module == "dispatch" && environment == "nonprod"){
            $('.ibplanning-prod').hide()
            $('.ibplanning-nonprod').hide()
            $('.dispatch-prod').hide()
            $('.dispatch-nonprod').show()
        }else{
            alert("OOPS")
        }
    });

    $('#environment').change(function() {
        var environment="";
        environment = $(this).val();
        module = $('#module').val();
        console.log(module + " " + environment);
        if (module == "0"){
            alert("Please select environment");
        }else if (module == "ibplanning" && environment == "prod"){
            console.log('demo')
            $('.ibplanning-prod').show()
            $('.ibplanning-nonprod').hide()
            $('.dispatch-prod').hide()
            $('.dispatch-nonprod').hide()
        }else if (module == "dispatch" && environment == "prod"){
            $('.ibplanning-prod').hide()
            $('.ibplanning-nonprod').hide()
            $('.dispatch-prod').show()
            $('.dispatch-nonprod').hide()
        }else if (module == "ibplanning" && environment == "nonprod"){
            $('.ibplanning-prod').hide()
            $('.ibplanning-nonprod').show()
            $('.dispatch-prod').hide()
            $('.dispatch-nonprod').hide()
        }else if (module == "dispatch" && environment == "nonprod"){
            $('.ibplanning-prod').hide()
            $('.ibplanning-nonprod').hide()
            $('.dispatch-prod').hide()
            $('.dispatch-nonprod').show()
        }else{
            alert("OOPS")
        }
    });
  
});