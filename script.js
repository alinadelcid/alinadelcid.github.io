/* _________________________________________________________

    Issues: 
    
    1. How can I have the mouse cursor change with dark/light mode?
    2. How can I have the mouse cursor still be circle when hovering over clickable items?
    3. Why does cursor work correctly as a white-circle over images on project pages but not on the index pg?
    
    4. Contact Me form on About page does not work (PHP File needed?)
    5. Glitch/Bug? On bottom of home page if you scroll too fast/slow after animation
    
    To Do:
    • Make mobile humburger menu
    • Maybe change pagination arrow style thicker
    
    • make responsive margins!!!

    
_____________________________________________________________*/  





/* _________________________________________________________

  In my code --> I tried to organize each "required skill" that we had to meet on the final project sheet [just to make grading a bit easier :) ] Few things I didn't include:
  
  - 1 image effect
  - at least 1 calculation ?
  - A JS form/popup dialog box ? I did a form (the contact me form) but it was done w/ HTML/CSS.. couldn't get it to actually work since I think I would need PHP file + a server
_____________________________________________________________*/  




/* _________________________________________________________

USING A "FOR LOOP", AN ARRAY, AND TEXT MANIPULATION
_____________________________________________________________*/ 

document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Hello,", " ", "I'm", " ", "Alina."];
    const textElement = document.getElementById("movingText1");

    for (let i = 0; i < textArray.length; i++) {
        const span = document.createElement("span");
        const letter = textArray[i];
        span.textContent = letter === " " ? "\u00A0" : letter; // Unicode for non-breaking space
        span.style.animationDelay = `${i * 0.10}s`; // Adjust desired delay here
        textElement.appendChild(span);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["I'm a multidisciplinary designer with a focus on graphic and UX/UI design. I value creating human-centered designs through a thoughtful and iterative process."];
    const textElement = document.getElementById("movingText2");

    for (let i = 0; i < textArray.length; i++) {
        const span = document.createElement("span");
        const letter = textArray[i];
        span.textContent = letter === " " ? "\u00A0" : letter; // Unicode for non-breaking space
        span.style.animationDelay = `${i * 0.30}s`; // Adjust desired delay here.. adjusts in CSS, not here
        textElement.appendChild(span);
    }
});


/* _________________________________________________________

EMAIL BUTTON FADES IN AFTER A FEW SECONDS
_____________________________________________________________*/ 

$(document).ready(function() {
    // Hide the button initially
    $('#emailButton').hide();

    // Fade in the button after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        $('#emailButton').fadeIn(500); // Fade in over 1 second
    }, 0); // Wait for 0 seconds before fading in

    // Email button click event
    $('#emailButton').on('click', function() {
        window.location.href = 'mailto:alinardel@gmail.com';
    });
});


/* Moves in letters of phrase one by one.. idk if I like

document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["H", "e", "l", "l", "o", ",", " ", "I'm", " ", "A", "l", "i", "n", "a", "."];
    const textElement = document.getElementById("movingText");

      textArray.forEach(function(letter, index) {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`; 
        textElement.appendChild(span);
    });
});
*/




/* _________________________________________________________

USING CONDITIONAL STATEMENT: If Statement for portfolio-section animation in screen window NOT USING ANYMORE!!!!! "css -> portfolio-animation delete it, im using body-wrapper-fade now
_____________________________________________________________*/ 

const the_animation = document.querySelectorAll('.animation');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
            observer.unobserve(entry.target); // Stop observing the element
        }
    });
}, { threshold: 0.11 }); // Adjust this value to suit needs for mobile viewing.....

the_animation.forEach((element) => {
    observer.observe(element);
});




/* _________________________________________________________

USING 1 OUT OF 3 EVENT HANDLERS and if/else statement: Hiding NavBar as you scroll
_____________________________________________________________*/  


var lastScrollTop = 0; // Initialize lastScrollTop
var navbar = document.getElementById('navbar'); // Get the navbar

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the location on scroll
    
    if (scrollTop === 0) { // If the user is at the top of the page
        navbar.style.top = '0'; // Ensure the navbar is visible
    } else if (scrollTop > lastScrollTop) { // If scrolling down
        navbar.style.top = '-80px'; // Hide the navbar
    } else { // If scrolling up
        navbar.style.top = '0'; // Show the navbar
    }
    
    lastScrollTop = scrollTop; // Update lastScrollTop
});





















/* _________________________________________________________

    USING 2 OUT OF 3 EVENT HANDLERS: Image-hover cursor effect (Tracks the mouse/cursor and changes its style based on the CSS code)
_____________________________________________________________  

var cursor = document.getElementById('cursor');


//This section tracks the cursor 
document.addEventListener('mousemove', moveCursor)

function moveCursor(e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

//This section changes the cursor style when you hover an image
var image = document.querySelector('img'); //This is to get all the image elements
var img = Array.from(document.querySelectorAll('img')); //This goes through all img's in doc

img.forEach(img => {
  img.addEventListener('mousemove', function() {
    cursor.classList.add('hover-cursor');
  })

  img.addEventListener('mouseleave', function () { //Removes the class when it doesn't hover the img
    cursor.classList.remove('hover-cursor'); //The color of the circle is now white when you hover on images 
  })                                        
})
*/



/* _________________________________________________________

    USING 3 OUT OF 3 EVENT HANDLERS: Dark/Light Mode on click
_____________________________________________________________*/  
/*
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const currentTheme = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    themeToggle.textContent = `Toggle ${currentTheme}`;
});

*/



/* _________________________________________________________

    USING 1 OUT OF 2 JQUERY EFFECTS: FADING IN
_____________________________________________________________*/  

$('.body-wrapper-fade').animate({
        'bottom': '54%',
        'opacity': 1
        }, 'slow', function() {
        
});





/* _________________________________________________________

    USING 2 OUT OF 2 JQUERY EFFECTS: PAGINATION, and also JS variables
_____________________________________________________________*/  

$(document).ready(function() {
    // Define an array of project IDs or URLs
    var projects = [
        'nuestra_casita.html',
        'fire.html',
        'moco.html',
        'loopy.html',
        'revival.html',
        'tech_brochure.html',
        'exhibition_assets.html',
        'temaki.html',
        'zine.html'
    ];

    // Get the current project URL
    var currentProjectURL = window.location.href;

    // Find the index of the current project URL in the projects array
    var currentIndex = -1; // Initialize to -1 to indicate not found
    for (var i = 0; i < projects.length; i++) {
        if (currentProjectURL.includes(projects[i])) {
            currentIndex = i;
            break; // Stop loop if found
        }
    }

    // Function to load the next project
    function loadNextProject() {
        if (currentIndex < projects.length - 1) {
            currentIndex++; // Increment index to load the next project
            var nextProjectURL = projects[currentIndex];
            window.location.href = nextProjectURL; // Redirect to the next project page
        } 
    }

    // Function to load the previous project
    function loadPrevProject() {
        if (currentIndex > 0) {
            currentIndex--; // Decrement index to load the previous project
            var prevProjectURL = projects[currentIndex];
            window.location.href = prevProjectURL; // Redirect to the previous project page
        } 
    }

    // Event listener for clicking the "Next Project" button
    $('#nextProject').on('click', function() {
        loadNextProject(); // Call the function to load the next project
    });

    // Event listener for clicking the "Previous Project" button
    $('#prevProject').on('click', function() {
        loadPrevProject(); // Call the function to load the previous project
    });

    // Hide "Previous Project" button on first project
    if (currentIndex === 0) {
        $('#prevProject').hide();
    }

    // Hide "Next Project" button on last project
    if (currentIndex === projects.length - 1) {
        $('#nextProject').hide();
    }
});






/* _________________________________________________________

    USING SOUND EFFECT (Click on Dark Mode Button on website)
_____________________________________________________________

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/5251");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
*/




/* _________________________________________________________

   An extra! The cool text-highlighting thing
_____________________________________________________________*/  

(function (document) {
  const markers = [...document.querySelectorAll('mark')];
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8
  });
  
  markers.forEach(mark => {
    observer.observe(mark);
  });
})(document);






/* _________________________________________________________

   E-mail me button on homepage and about page
_____________________________________________________________*/  
$(document).ready(function() {
    $('#emailButton').on('click', function() {
        window.location.href = 'mailto:alinardel@gmail.com';
    });
});



/* _________________________________________________________

   Lazy Load Images 
_____________________________________________________________*/  

  $(function() {
    $("img.lazy").lazyload({
      effect: "show", // You can use other effects like "show", "fadeIn", etc.
      threshold: 500 // This defines how many pixels before the viewport the image should start loading
    });
  });






