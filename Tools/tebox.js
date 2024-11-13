
 function scaleCardOverlay(cardId) {
    const card = document.getElementById(cardId);
    const max = document.getElementById("maxb");
 const max2 = document.getElementById("maxb2");

    max.classList.add("hidden");
max2.classList.add("hidden");

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

    overlay.style.animation = "scaleDown 0.5s ease-in-out";
    max.classList.remove("hidden");
    max.classList.add("max");
 max2.classList.remove("hidden");
    max2.classList.add("max");
 

    overlay.addEventListener("animationend", function() {
        overlay.style.display = "none";
        overlay.remove();
    });
}






    
function load() {
    const loader = document.getElementById("loader");
 
    
    // Set a timeout to call the 'loads' function after 4 seconds
    setTimeout(loads, 3000);
}

function contain() {
    const cont = document.getElementById("contain1");
    cont.classList.add("container"); // Hide the loader
    cont.classList.remove("hidden");

}

function contain2() {
    const cont = document.getElementById("contain2");
    cont.classList.add("container2"); // Hide the loader
    cont.classList.remove("hidden");

}


function contain3() {
    const cont = document.getElementById("contain3");
    cont.classList.add("container2"); // Hide the loader
    cont.classList.remove("hidden");

}
function contain4() {
    const cont = document.getElementById("contain4");
    cont.classList.add("container2"); // Hide the loader
    cont.classList.remove("hidden");

}

function contain5() {
    const cont = document.getElementById("contain5");
    cont.classList.add("container2"); // Hide the loader
    cont.classList.remove("hidden");

}
function contain6() {
    const cont = document.getElementById("contain6");
    cont.classList.add("container2"); // Hide the loader
    cont.classList.remove("hidden");

}



function loads() {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden"); // Apply the 'container' class
    console.log("Contain function has been executed.");
       contain();
       contain2();
     contain3();
     contain4();
     contain5();
     contain6();
    
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





//╭──────────────────────fact──────────────────────╮//




        function hide(){
        
          const resu = document.getElementById('resu');
         
         resu.classList.add("hidden"); // Hide the loader
    
            
        }
        
        
        
        // Populate the year dropdown
        const yearSelect = document.getElementById('year');
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1900; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            yearSelect.appendChild(option);
        }

        // Populate the day dropdown based on selected month and year
        const daySelect = document.getElementById('day');
        const monthSelect = document.getElementById('month');

        function populateDays() {
            const selectedYear = parseInt(yearSelect.value);
            const selectedMonth = parseInt(monthSelect.value);
            const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

            daySelect.innerHTML = '';

            for (let i = 1; i <= daysInMonth; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                daySelect.appendChild(option);
            }
        }

        yearSelect.addEventListener('change', populateDays);
        monthSelect.addEventListener('change', populateDays);

        document.getElementById('calculate-btn').addEventListener('click', function() {
            const birthdate = new Date(yearSelect.value, monthSelect.value, daySelect.value);
            const now = new Date();

            if (isNaN(birthdate)) {
                alert("Please Select A Valid Date!");
                return;
            }

            const diffInMilliseconds = now - birthdate;
            const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            const diffInHours = Math.floor(diffInMinutes / 60);
            const diffInDays = Math.floor(diffInHours / 24);
            const diffInYears = Math.floor(diffInDays / 365.25);
            const diffInMonths = Math.floor((diffInDays % 365.25) / 30.4375);

            const nextBirthday = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate());
            if (nextBirthday < now) {
                nextBirthday.setFullYear(now.getFullYear() + 1);
            }
            const timeToNextBirthday = nextBirthday - now;
            const daysToNextBirthday = Math.floor(timeToNextBirthday / (1000 * 60 * 60 * 24));
            const hoursToNextBirthday = Math.floor((timeToNextBirthday / (1000 * 60 * 60)) % 24);
            const minutesToNextBirthday = Math.floor((timeToNextBirthday / (1000 * 60)) % 60);
            const secondsToNextBirthday = Math.floor((timeToNextBirthday / 1000) % 60);

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>Age:</strong> ${diffInYears} years, ${diffInMonths} months, ${(diffInDays % 30)} days</p>
                <p><strong>Total Time:</strong> ${diffInHours} hours, ${diffInMinutes} minutes, ${diffInSeconds} seconds</p>
                <p><strong>Next Birthday:</strong> ${daysToNextBirthday} days, ${hoursToNextBirthday} hours, ${minutesToNextBirthday} minutes, ${secondsToNextBirthday} seconds</p>
            `;
        });

        // Initial population of days based on the current month and year
        populateDays();
    
    
    
    
 
    
    
    
    
    
    //╭──────────────────────fact──────────────────────╮//
    
    
    
            const generateBtn = document.getElementById('generate-btn');
        const generatedPassword = document.getElementById('generated-password');

        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
        const textWords = ['smooth', 'bench', 'gummy', 'cheez', 'console', 'fluffy', 'jazzy', 'pixel', 'twist', 'glow', 'spark', 'ripple', 'swift', 'charm', 'quark'];

        const includeUppercase = document.getElementById('include-uppercase');
        const includeLowercase = document.getElementById('include-lowercase');
        const includeNumbers = document.getElementById('include-numbers');
        const includeSymbols = document.getElementById('include-symbols');
        const textPassword = document.getElementById('text-password');

        textPassword.addEventListener('change', () => {
            const isTextPassword = textPassword.checked;
            includeUppercase.disabled = isTextPassword;
            includeLowercase.disabled = isTextPassword;
            includeNumbers.disabled = isTextPassword;
            includeSymbols.disabled = isTextPassword;
        });

        generateBtn.addEventListener('click', () => {
            const length = parseInt(document.getElementById('length').value);

            if (textPassword.checked) {
                let password = '';
                for (let i = 0; i < length; i++) {
                    const randomWord = textWords[Math.floor(Math.random() * textWords.length)];
                    password += randomWord;
                }
                generatedPassword.textContent = password.slice(0, length);
            } else {
                let charSet = '';
                if (includeUppercase.checked) charSet += uppercaseChars;
                if (includeLowercase.checked) charSet += lowercaseChars;
                if (includeNumbers.checked) charSet += numberChars;
                if (includeSymbols.checked) charSet += symbolChars;

                if (charSet === '') {
                    generatedPassword.textContent = 'Please select at least one option.';
                    return;
                }

                let password = '';
                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charSet.length);
                    password += charSet[randomIndex];
                }

                generatedPassword.textContent = password;
            }
        });



//╭──────────────────────fact──────────────────────╮//


 
        document.getElementById('get-weather-btn').addEventListener('click', () => {
            const location = document.getElementById('location-input').value;
            const apiKey = '060a6bcfa19809c2cd4d97a212b19273';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherInfo = document.getElementById('weather-info');
                    if (data.cod === '404') {
                        weatherInfo.innerHTML = '<p class="error">Please enter a valid location.</p>';
                    } else {
                        const { main, weather, wind, sys, name } = data;
                        const iconCode = weather[0].icon; // Weather icon code
                        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`; // Weather icon URL
                        
                        weatherInfo.innerHTML = `
                <center>            <h2>${name}</h2>
                            <img src="${iconUrl}" alt="${weather[0].description}" style="height:90px; width:90px;" >

                            <p>Temperature: ${main.temp}°C</p>
                            <p>Feels Like: ${main.feels_like}°C</p>
                            <p>Weather: ${weather[0].description}</p>
                            <p>Humidity: ${main.humidity}%</p>
                            <p>Wind Speed: ${wind.speed} m/s</p>
                            <p>Sunrise: ${new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
                            <p>Sunset: ${new Date(sys.sunset * 1000).toLocaleTimeString()}</p></center>
                        `;
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('weather-info').innerHTML = '<p class="error">Error fetching weather data.</p>';
                });
        });
 

        
        
        
//╭──────────────────────fact──────────────────────╮//



document.getElementById('get-thought-btn').addEventListener('click', () => {
    const language = document.getElementById('language').value;
    const shortThoughts = document.getElementById('short-thoughts').checked;

    // Thoughts data embedded directly into the script
    const data = {
        "english": [
            { "thought": "Success is not the key to happiness. Happiness is the key to success.", "author": "Albert Schweitzer", "length": "long" },
            { "thought": "The only way to do great work is to love what you do.", "author": "Steve Jobs", "length": "short" },
            { "thought": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson", "length": "short" },
            { "thought": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau", "length": "long" },
            { "thought": "The harder you work for something, the greater you'll feel when you achieve it.", "author": "Unknown", "length": "long" },
            { "thought": "Dream bigger. Do bigger.", "author": "Unknown", "length": "short" },
            { "thought": "Don't stop when you're tired. Stop when you're done.", "author": "Unknown", "length": "short" },
            { "thought": "The best way to predict the future is to create it.", "author": "Peter Drucker", "length": "long" },
            { "thought": "It’s not whether you get knocked down, it’s whether you get up.", "author": "Vince Lombardi", "length": "short" },
            { "thought": "Wake up with determination. Go to bed with satisfaction.", "author": "Unknown", "length": "long" },
            { "thought": "Little things make big days.", "author": "Unknown", "length": "short" },
            { "thought": "Hustle in silence and let your success make the noise.", "author": "Unknown", "length": "long" },
            { "thought": "Do something today that your future self will thank you for.", "author": "Unknown", "length": "long" },
            { "thought": "Failure is the condiment that gives success its flavor.", "author": "Truman Capote", "length": "long" },
            { "thought": "Don't dream of success, work for it.", "author": "Unknown", "length": "short" },
            { "thought": "Work hard in silence, let your success be the noise.", "author": "Frank Ocean", "length": "long" },
            { "thought": "Stay positive, work hard, make it happen.", "author": "Unknown", "length": "short" },
            { "thought": "Success is the sum of small efforts, repeated day in and day out.", "author": "Robert Collier", "length": "long" },
            { "thought": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar", "length": "short" },
            { "thought": "Great things never come from comfort zones.", "author": "Unknown", "length": "short" }
        ],
        "sinhala": [
            { "thought": "සාර්ථකත්වය සඳහා උත්සාහයම මාර්ගයයි.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "ඔබට ආදරය කරන දෙයකි කරන්නේ නම්, ඔබ පසුතැවෙන්නේ නැහැ.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "උදේට අවදිවී සාර්ථකත්වයෙකු වන්න.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "මොනවා වුණත්, දිගටම ගමන් කරන්", "author": "අනන්‍ය", "length": "short" },
            { "thought": "හැමෝම එකම ගමනේ නෙවෙයි.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "ඔබේ සිත සාර්ථකත්වය දෙසට අරක්ස", "author": "අනන්‍ය", "length": "short" },
            { "thought": "මහන්සි නොවන්න, නිම කලේ නැත්නම්.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "පැතුමට වඩා කාර්යය දැඩි.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "පෙරහසට පසුතැවෙන තැන් නෑ.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "මොන දේවල් කළත්, හොඳට කරමු.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "ඉස්සරහට ගියොත්, හොඳටම හොඳයි.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "ඔබේ ජීවිතය ඔබටම සොයා ගන්න.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "මහන්සි වී ජීවිතය ජයගන්න.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "තනිකඩ වැඩවලට අනුභවය දෙන්න.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "අපේ සෑම පියවරක්ම ජයමයයි.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "අමාරු කාර්යවලින් සාර්ථකත්වය වෙත යන්න.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "ඔබේ විශ්වාසය ජීවිතයේ අනාගතය වෙනස් කරයි.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "අනුවාදයේ අත්‍යවශ්‍යයි.", "author": "අනන්‍ය", "length": "short" },
            { "thought": "විශ්වාසය සමග ජීවිතය ජය ගන්න.", "author": "අනන්‍ය", "length": "long" },
            { "thought": "තනියම නිරෝගීව ජීවත් වෙන්න.", "author": "අනන්‍ය", "length": "short" }
        ]
    };

    let thoughts = data[language];
    if (shortThoughts) {
        thoughts = thoughts.filter(thought => thought.length === 'short');
    }

    const randomIndex = Math.floor(Math.random() * thoughts.length);
    const selectedThought = thoughts[randomIndex];
    document.getElementById('thought-display').textContent = `"${selectedThought.thought}" - ${selectedThought.author}`;
});



//╭──────────────────────fact──────────────────────╮//

