    
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

function loads() {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden"); // Apply the 'container' class
    console.log("Contain function has been executed.");
       contain();
    
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
         
         function updateTime() {
             const now = new Date();
             let hours = now.getHours();
             const minutes = String(now.getMinutes()).padStart(2, '0');
             const seconds = String(now.getSeconds()).padStart(2, '0');
             const ampm = hours >= 12 ? 'PM' : 'AM';
             hours = hours % 12;
             hours = hours ? hours : 12;
             hours = String(hours).padStart(2, '0');
             document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
         }
         
         setInterval(updateTime, 1000);
         updateTime();
         
         const pastTime = new Date('2024-11-08T10:00:00');
         
         function calculateUptime() {
             const currentTime = new Date();
             const elapsedTime = currentTime - pastTime;
             const seconds = Math.floor((elapsedTime / 1000) % 60);
             const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
             const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
             const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
             const uptimeDisplay = 
                 String(days).padStart(2, '0') + ' days, ' +
                 String(hours).padStart(2, '0') + ':' +
                 String(minutes).padStart(2, '0') + ':' +
                 String(seconds).padStart(2, '0');
             document.getElementById('uptime').textContent = uptimeDisplay;
         };
         
         calculateUptime();
         setInterval(calculateUptime, 1000);
         
         let currentSlideIndex = 0;
         const slides = document.querySelectorAll('.carousel-slide');
         const totalSlides = slides.length;
         
         function showSlide(index) {
             slides.forEach((slide, i) => {
                 slide.style.display = i === index ? 'block' : 'none';
             });
         }
         
         let startX = 0;
         
         function touchStart(event) {
             startX = event.touches[0].clientX;
         }
         
         function touchMove(event) {
             const endX = event.touches[0].clientX;
             const deltaX = endX - startX;
             if (deltaX < -50) {
                 nextSlide();
                 startX = endX;
             } else if (deltaX > 50) {
                 prevSlide();
                 startX = endX;
             }
         }
         
         function nextSlide() {
             currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
             showSlide(currentSlideIndex);
         }
         
         function prevSlide() {
             currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
             showSlide(currentSlideIndex);
         }
         
         const container = document.querySelector('.carousel-container');
         container.addEventListener('touchstart', touchStart, false);
         container.addEventListener('touchmove', touchMove, false);
         
         showSlide(currentSlideIndex);
         
         
         
         fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('ip').textContent = data.ip;
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
        document.getElementById('ip').textContent = 'Could not retrieve IP address';
      });
      
      
      
      
      if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        // Update battery status initially
        function updateBatteryInfo() {
          const statusText = `
         ${battery.charging ? "Charging" : "Discharging"}   ${(battery.level * 100).toFixed(0)}% <i class="fa-solid fa-battery-three-quarters"></i>`;
         
         
         const statusText2=` ${(battery.level * 100).toFixed(0)}% <i class="fa-solid fa-bolt"></i>`;
          document.getElementById('battery-status').innerHTML = statusText;
           document.getElementById('battery').innerHTML = statusText2;
        
        }

        // Update battery information on any changes
        battery.addEventListener('chargingchange', updateBatteryInfo);
        battery.addEventListener('levelchange', updateBatteryInfo);
        battery.addEventListener('chargingtimechange', updateBatteryInfo);
        battery.addEventListener('dischargingtimechange', updateBatteryInfo);

        // Initial call to display battery info
        updateBatteryInfo();
      });
    } else {
      document.getElementById('battery-status').textContent = "Battery Status API not supported on this browser.";
    }
    
    
    
        const ctx = document.getElementById('speedChart').getContext('2d');
        const getThemeColor = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#000';

        const speedData = {
            labels: [],
            datasets: [{
                label: 'Internet Speed',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 10 // Rounded corners for bars
            }]
        };

        const config = {
            type: 'bar',
            data: speedData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                    datalabels: {
                        anchor: 'center',
                        align: 'center',
                        rotation: 90, // Rotate labels by 90°
                        color: getThemeColor,
                        font: {
                            size: 14,
                            weight: 'bold',
                            family: 'Arial, sans-serif'
                        },
                        formatter: (value) => `${value} KB/s`
                    }
                },
                scales: {
                    y: {
                        display: false,
                        beginAtZero: true,
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                                weight: 'bold',
                                family: 'Arial, sans-serif'
                            }
                        },
                        grid: { display: false }
                    }
                }
            },
            plugins: [ChartDataLabels]
        };

        const speedChart = new Chart(ctx, config);

        function getInternetSpeed() {
            const startTime = Date.now();
            const image = new Image();
            const speedUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png";

            image.onload = function () {
                const endTime = Date.now();
                const duration = (endTime - startTime) / 1000;
                const speedBps = Math.round((image.width * image.height * 8) / duration);

                let speed = speedBps >= 1024 ? speedBps / 1024 : speedBps;
                const unit = speedBps >= 1024 ? 'KB' : 'b';

                if (speedData.labels.length >= 4) {
                    speedData.labels.shift();
                    speedData.datasets[0].data.shift();
                }

                const currentTime = new Date();
                const minutes = currentTime.getMinutes();
                speedData.labels.push(minutes + "m");
                speedData.datasets[0].data.push(speed.toFixed(2));

                // Automatically adjust y-axis maximum to handle speeds above 400 KB/s
                const maxSpeed = Math.max(...speedData.datasets[0].data);
                speedChart.options.scales.y.max = Math.ceil(maxSpeed * 1.2); // Scale up by 20% of max value
                speedChart.update();
            };

            image.src = `${speedUrl}?time=${startTime}`;
        }

        setInterval(getInternetSpeed, 5000);

        // Automatically update label color on theme change
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            speedChart.options.plugins.datalabels.color = getThemeColor;
            speedChart.update();
        });
 
 
 function scaleCardOverlay(cardId) {
    const card = document.getElementById(cardId);
    const max = document.getElementById("maxb");
    const max2 = document.getElementById("maxb2");
const max3 = document.getElementById("maxb3");
    const max4 = document.getElementById("maxb4");

    max.classList.add("hidden");
    max2.classList.add("hidden");
 max3.classList.add("hidden");
    max4.classList.add("hidden");

    const overlay = document.createElement("div");
    overlay.classList.add("scaled-overlay");

    overlay.innerHTML = `
        ${card.innerHTML}
        <i onclick="downscaleOverlay(this)" class="fa-solid fa-xmark fa-beat close"></i>
    `;

    document.body.appendChild(overlay);
}

function downscaleOverlay(button) {
    const overlay = button.parentElement;
    const max = document.getElementById("maxb");
    const max2 = document.getElementById("maxb2");
 const max3 = document.getElementById("maxb3");
    const max4 = document.getElementById("maxb4");

    overlay.style.animation = "scaleDown 0.5s ease-in-out";
    max.classList.remove("hidden");
    max.classList.add("max");
    max2.classList.remove("hidden");
    max2.classList.add("max");
  max3.classList.remove("hidden");
    max3.classList.add("max");
    max4.classList.remove("hidden");
    max4.classList.add("max");

    overlay.addEventListener("animationend", function() {
        overlay.style.display = "none";
        overlay.remove();
    });
}

 
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

    function toggleFullscreenCard() {
        const card = document.getElementById("card5");
        
        // Check if the card is in fullscreen mode
        if (card.classList.contains("fullscreen")) {
            // Remove fullscreen class and add minimized class
            card.classList.remove("fullscreen");
            card.classList.add("minimized");
            card.style.animation = "shrinkAnimation 0.5s ease-in-out"; // Shrink animation
        } else {
            // Add fullscreen class and remove minimized class
            card.classList.add("fullscreen");
            card.classList.remove("minimized");
            card.style.animation = "expandAnimation 0.5s ease-in-out"; // Expand animation
        }
    }


