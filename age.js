function calculateAgeFromDOB(dob) {
    let birthDateObj = new Date(dob);
    let today = new Date();
    
    let age = today.getFullYear() - birthDateObj.getFullYear();
    let monthDiff = today.getMonth() - birthDateObj.getMonth();
    let dayDiff = today.getDate() - birthDateObj.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    return age;
}

function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Please enter your birthdate");
        return;
    }
    
    let age = calculateAgeFromDOB(birthdate);
    document.getElementById("result").innerText = "Your age is " + age + " years old";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", calculateAge);
});
