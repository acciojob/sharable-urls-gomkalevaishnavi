// your code here
 // Get references to form elements and the h3 element
        const urlForm = document.getElementById('urlForm');
        const nameInput = document.getElementById('name');
        const yearInput = document.getElementById('year');
        const urlElement = document.getElementById('url');

        // Add an event listener to the form submit
        urlForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get the input values
            const name = nameInput.value;
            const year = yearInput.value;

            // Construct the query string
            const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

            // Update the h3 element with the generated URL
            urlElement.textContent = ` https://localhost:8080/${queryString}`;
        });