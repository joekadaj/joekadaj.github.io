
      function calculateBMI()
     {
       //vairbales to store information
       
       var feet = document.getElementById("feet").value;
       var inch = document.getElementById("inches").value;
       var height = feet * 12/10 + inch;
       
       var weight = document.getElementById("weight").value;
       var bmi = weight / height / height * 703 ;
       
       //output
       document.getElementById("bmi").value = bmi;

       var output = "<h3>BMI = (weight / height in inches * height in inches) * 703";
      if (document.getElementById("bmi").value < 18.5)
            output = "Underweight";
        else if ((document.getElementById("bmi").value >= 18.5) && (document.getElementById("bmi").value <= 24.9))
            output = "Normal";
        else if ((document.getElementById("bmi").value >= 25) && (document.getElementById("bmi").value <= 29.9))
            output = "Obese";
        else if (document.getElementById("bmi").value >= 30)
          output = "Overweight";

       document.getElementById("output").innerHTML = output ;
     }