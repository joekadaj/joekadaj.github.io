function checkEmail()
{
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    //check textboxes to make sure they are not empty
    if( email == "")//condditional expression, when is true, the code in the block will execute
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
    }
    //check textboxes to make sure they are not empty
    if( confirm == "")
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("confirm-error").innerHTML = "";
    }

    //check to see if the text in both boxes have the same value
    if( email != confirm)
    {
        document.getElementById("email-error").innerHTML = "both emails must be the same";
        document.getElementById("confirm-error").innerHTML = "both emails must be the same";
    }
    else if( confirm == email && confirm != "" && email != "")
    {
      document.getElementById("email-error").innerHTML = "";
      document.getElementById("confirm-error").innerHTML = "";
       
    }
}

function pizzaOrder()
{
   
    var output = "<h3>Pizza Order: ";


    if( document.getElementById("small").checked == true )
    {
        output += " Small ";
    }

    else if( document.getElementById("medium").checked == true )
    {
        output += " Medium ";
    }

    else
    {
        output += " Large ";
    }

    if( document.getElementById("pepperoni").checked == true )
    {
        output += " Pepperoni ";        
    }

    if( document.getElementById("sausage").checked == true )
    {
        output += " Sausage ";
    }

    if( document.getElementById("mushrooms").checked == true )
    {
        output += " Mushrooms ";
    }

    document.getElementById("output").innerHTML = output + "</h3>";
}