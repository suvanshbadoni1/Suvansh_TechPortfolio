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