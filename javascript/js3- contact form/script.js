function validation(event) {

    event.preventDefault();

    var firstName = document.querySelector("#firstName").value;
    var lastName = document.getElementById("lastName").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var message = document.getElementById("message").value;
    
    if (firstName.length < 3) {
        document.querySelector('#firstName').classList.add("invalid");
        alert("Please insert your first name.");
    } else if (lastName.length < 3) {
        document.querySelector('#firstName').classList.remove("invalid");
        document.querySelector('#lastName').classList.add("invalid");
        alert("Please insert your last name.");
        } else if (male.checked == false && female.checked == false) {
            document.querySelector('#lastName').classList.remove("invalid");
            alert ("Please select your gender");
        } else if (message < 10) {
            document.querySelector('#message').classList.add("invalid")
            alert ("Please insert a message for us.")
            } else {
                document.querySelector('#message').classList.remove("invalid")

                document.querySelector(".text").innerText = 'Thank you for contacting us,' + firstName;
                document.querySelector(".text").classList.remove("hidden"); 
            }
            
            
           

}