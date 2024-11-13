    
function load() {
    const loader = document.getElementById("loader");
 
    
    // Set a timeout to call the 'loads' function after 4 seconds
    setTimeout(loads, 3000);
}

function contain() {
    const cont = document.getElementById("contain");
    cont.classList.add("container"); // Hide the loader
    cont.classList.remove("hidden");

}

function contain2() {

}

function loads() {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden"); // Apply the 'container' class
    console.log("Contain function has been executed.");
       contain();
       contain2();
    
  }
    // You can add additional actions here i

window.onload = load; // Call the 'load' function when the page loads


    
    
         const toggleBtn = document.getElementById('themeToggle');
         const cards = document.querySelectorAll('.card img');
         const buttons = document.querySelectorAll('.card button');
         
         function toggleImages() {
             cards.forEach(img => {
                 const lightSrc = img.getAttribute('data-light');
                 const darkSrc = img.getAttribute('data-dark');
                 img.src = document.body.classList.contains('dark-mode') ? darkSrc : lightSrc;
             });
         
             buttons.forEach(button => {
                 if (document.body.classList.contains('dark-mode')) {
                     button.style.color = 'white';
                 } else {
                     button.style.color = 'black';
                 }
             });
         }
         
         toggleBtn.addEventListener('click', () => {
             document.body.classList.toggle('dark-mode');
             toggleBtn.innerHTML = document.body.classList.contains('dark-mode') 
                 ? '<i class="fas fa-sun"></i>' 
                 : '<i class="fas fa-moon"></i>';
             toggleImages();
         });
         
         toggleImages();
         
 function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    
    if (sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        sideNav.classList.add("close");
    } else {
        sideNav.classList.remove("close");
        sideNav.classList.add("open");
    }
}
