window.addEventListener('DOMContentLoaded', () => {
    const darkMode = () => {
        const themeToggleBtns = document.querySelectorAll('#theme_toggle');

        const sunBtn = document.querySelector('#sun_icon');
        const moonBtn = document.querySelector('#moon_icon');
        const mobileSunBtn = document.querySelector('#mobile_sun_icon');
        const mobileMoonBtn = document.querySelector('#mobile_moon_icon');
        
        
        themeToggleBtns.forEach((btn) => {

            btn.addEventListener('click', () => {
                sunBtn.classList.toggle('hiden');
                moonBtn.classList.toggle('hiden');
                mobileSunBtn.classList.toggle('hiden');
                mobileMoonBtn.classList.toggle('hiden');
                
                document.body.classList.toggle('light_mode');
            });
        });
    };
    
    darkMode();
});

