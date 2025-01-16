let titles = [
    "m", "ma", "mar", "mart", "marty", "martyc",
    "martyc.", "martyc.c", "martyc.cz", "martyc.cz", "martyc.cz", "martyc.cz",
    "martyc.cz", "martyc.cz", "martyc.c", "martyc.", "martyc", "marty", "mart", "mar", "ma", "m", "\u200B", "\u200B"
];
let index = 0;
let maxIndex = titles.length - 1;

// clantag
function changeTitle() {
    document.title = titles[index]; 
    index++;

    if (index > maxIndex) {
        index = 0; 
    }
}

// discord
function copyDiscordUsername() {
    const discordUsernameElement = document.getElementById('discord-username');  
    const copyIcon = document.getElementById('copy-icon'); 
    const originalUsername = discordUsernameElement.textContent; 
    const regularIcon = copyIcon.querySelector('.fa-regular');
    const solidIcon = copyIcon.querySelector('.fa-solid');
    const textarea = document.createElement('textarea');
    textarea.value = discordUsernameElement.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    discordUsernameElement.textContent = 'Copied';
    regularIcon.style.display = 'none';
    solidIcon.style.display = 'inline-block';
    copyIcon.classList.add('copied');
    setTimeout(() => {
        discordUsernameElement.textContent = originalUsername;
        copyIcon.classList.remove('copied'); 
        regularIcon.style.display = 'inline-block';
        solidIcon.style.display = 'none'; 
    }, 2000); 
}

document.getElementById('discord-icon-container').addEventListener('click', copyDiscordUsername);

window.onload = function () {
    setInterval(changeTitle, 500);

    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function() {
        overlay.style.opacity = '0'; 
        overlay.style.visibility = 'hidden';
        
        setTimeout(function() {
            document.getElementById('content').classList.add('visible');

            // muzicka
            const backgroundMusic = document.getElementById('background-music');
            backgroundMusic.play(); 
            backgroundMusic.volume = 0.2;
        }, 300);

        // trail
        
        new cursoreffects.trailingCursor({
            particles: 10,               
            rate: 0.4,                   
            baseImageSrc: '/ru-main/assets/mac-os-x.cur'  
        });

        // zakazuje se vsechno
        document.addEventListener('dragstart', function (e) {
            e.preventDefault(); 
        });
    });
}