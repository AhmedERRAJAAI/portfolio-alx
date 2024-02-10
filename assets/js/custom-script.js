$(document).ready(function(){

    function calculateAge(birthdate) {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        let difference = currentDate - birthDate;
        
        // Calculate years
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        difference -= years * (1000 * 60 * 60 * 24 * 365);
        
        // Calculate months
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
        difference -= months * (1000 * 60 * 60 * 24 * 30.4375);
        
        // Calculate days
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        difference -= days * (1000 * 60 * 60 * 24);
        
        // Calculate hours
        const hours = Math.floor(difference / (1000 * 60 * 60));
        difference -= hours * (1000 * 60 * 60);
        
        // Calculate minutes
        const minutes = Math.floor(difference / (1000 * 60));
        difference -= minutes * (1000 * 60);
        
        // Calculate seconds
        const seconds = Math.floor(difference / 1000);
        
        return `${years}Y ${months}M ${days}D ${hours}:${minutes}:${seconds}`

    }
    
    // Function to display the age
    function displayAge() {
        const birthdate = '1999-10-27T02:30:00';
        const age = calculateAge(birthdate);
        console.log(age);
        document.getElementById('birthdate').textContent = age;
    }
    
    // Call the displayAge function every second
    setInterval(displayAge, 1000);
    
})