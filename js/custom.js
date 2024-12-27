// to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

document.querySelector('a[href="#info"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
});



// To redirect to top of the Home page after submit email 
function redirectToTop() {
    // Wait for a brief moment to ensure the form submission completes
    setTimeout(() => {
        // Redirect back to the same page
        window.location.href = window.location.pathname; // Reloads the current page from the top
    }, 3000); // Adjust delay as needed for form processing
    return true; // Allow the form submission to proceed
}


//Handle SUbmit
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    const messageDiv = document.getElementById('message');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        const responseData = await response.json();

        if (response.ok && responseData.result === 'success') {
            messageDiv.style.color = 'green';
            messageDiv.textContent = 'Thank you for subscribing!';
        } else {
            throw new Error(responseData.error || 'An error occurred. Please try again.');
        }
    } catch (error) {
        // messageDiv.style.color = 'red';
        // messageDiv.textContent = error.message;
        console.log(error);

    }

    messageDiv.style.display = 'block';

    // Wait 3 seconds and then reload the page
    setTimeout(() => {
        window.location.href = window.location.pathname; // Reload the current page
    }, 2000);

    return true; // Allow the form processing to complete
}