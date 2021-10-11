//define the actions of the Employee object, method
function printEmployee()
{
  var name_line = "<td>" + this.name + "</td>";
  var title_line = "<td>" + this.title + "</td>";
  var phone_line = "<td>" + this.phone + "</td>";

  var row = "<tr>" + name_line + title_line + phone_line + "</tr>";

  document.write(row);
}


//define and object using constructor function
function Employee(name, title, phone)
{

    //list of attributes for this object
    this.name = name;
    this.title = title;
    this.phone = phone;

    //assign the method to the employee object
    this.printEmployee = printEmployee;
    
}

//create employee objects
var nick = new Employee("Nick","Instructor", "956-872-3445");
var lisa = new Employee("Lisa Simpson", "Teacher", "956-333-1111");
var mike = new Employee("Mike Tyson","Boxer", "956-787-2222");

//display the employee information
/*nick.printEmployee();
lisa.printEmployee();
mike.printEmployee();*/

//create an array of employee
var empArray = [nick.name, lisa.name, mike.name];

empArray = empArray.sort(); //built in sort function letters not numbers

for (var x = 0; x < empArray.length; x++)
{
  document.write(empArray[x] + "<br>");
}