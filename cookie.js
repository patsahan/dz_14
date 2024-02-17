document.addEventListener("DOMContentLoaded", function() {
    const cookieForm = document.getElementById("cookieForm");

    cookieForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const days = document.getElementById("days").value;

        if (name && age && days) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + parseInt(days));
            
            document.cookie = `name=${name}; expires=${expirationDate.toUTCString()}`;
            document.cookie = `age=${age}; expires=${expirationDate.toUTCString()}`;

            
            document.write(`Cookie "name": ${getCookie("name")}<br>`);
            document.write(`Cookie "age": ${getCookie("age")}<br>`);
        }
    });

    
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return cookieValue;
            }
        }
        return null;
    }
});