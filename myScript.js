function checkName() {
            
        var nameBox = document.getElementById("name");
        var name = nameBox.value;
            
        if (name.length < 5) {
            nameBox.style.borderColor = "red";
        } else {
            nameBox.style.borderColor = "green";
        }    
        }
function checkEmail() {
            
        var emailBox = document.getElementById("email");
        var email = emailBox.value;
            
        if (email.length < 8) {
            emailBox.style.borderColor = "red";
        } else {
            emailBox.style.borderColor = "green";
        }    
        }
function checkPhone() {
            
        var phoneBox = document.getElementById("phone");
        var phone = phoneBox.value;
            
        if (phone.length < 10) {
            phoneBox.style.borderColor = "red";
        } else {
            phoneBox.style.borderColor = "green";
        }    
        }
function checkCountry() {
            
            var USA = document.getElementById("usa");
            var Other = document.getElementById("other");
            var country = document.getElementById("country");
            var postalCodeLabel = document.getElementById("postalCodeLabel")
            var zipCodeLabel = document.getElementById("zipCodeLabel")
            var postalCode = document.getElementById("postalCode")
            var zipCode = document.getElementById ("zipCode")
            
            if (country == "canada") {                
                postalCodeLabel.className = "visible";
                postalCode.className = "visible";
                zipCodeLabel.className = "hidden";
                zipCode.className = "hidden";
            }
            
            else if (country == "usa") {                
                postalCodeLabel.className = "hidden";
                postalCode.className = "hidden";
                zipCodeLabel.className = "visible";
                zipCode.className = "visible";
                
            } 
            else {
                postalCodeLabel.className = "hidden";
                postalCode.className = "hidden";
                zipCodeLabel.className = "hidden";
                zipCode.className = "hidden";
            }

        }

