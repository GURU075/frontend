const postData = async () => {
    // Define the URL and request body
    const url = "https://api.restful-api.dev/objects";
    const requestBody = {
        name: "Apple MacBook Pro 16",
        data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };

    try {
        // Make the POST request
        const response = await fetch(url, {
            method: "POST", // Specify the HTTP method
            headers: {
                "Content-Type": "application/json", // Inform server of JSON format
            },
            body: JSON.stringify(requestBody) // Convert JS object to JSON string
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse and log the response JSON
        const responseBody = await response.json();
        console.log("Response received:", responseBody);
    } catch (error) {
        console.error("Error during POST request:", error);
    }
};

// Call the function to send the request
postData();
