// Theme selector functionality
const themeButtons = document.querySelectorAll('.theme-btn');
const profilePic = document.querySelector('.profile-pic');

console.log('Theme buttons found:', themeButtons);
console.log('Profile pic element:', profilePic);

// Profile pictures for each theme
const themeProfiles = {
    '1': 'media/Background-Images/pink-pp.png',
    '2': 'media/Background-Images/cartoon-pp.png',
    '3': 'media/Background-Images/skull-pp.png',
    '4': 'media/Background-Images/goth-pp.png',
    '5': 'media/Background-Images/rainbow-pp.png'
};

console.log('Theme profiles object:', themeProfiles);

themeButtons.forEach(button => {
    console.log('Adding event listener to button:', button);
    
    button.addEventListener('click', () => {
        console.log('Button clicked!');
        
        const themeNumber = button.dataset.theme;
        console.log('Theme number selected:', themeNumber);
        
        // Change theme
        document.body.setAttribute('data-theme', themeNumber);
        console.log('Theme attribute set on body');
        
        // Change profile picture
        if (themeProfiles[themeNumber]) {
            console.log('Changing profile pic to:', themeProfiles[themeNumber]);
            profilePic.src = themeProfiles[themeNumber];
            console.log('Profile pic src updated');
        } else {
            console.log('No profile picture found for theme:', themeNumber);
        }
    });
});

console.log('All event listeners added!');

// USER BIO EDITING

//find the username element
const usernameElement = document.querySelector('.username');

//editable when clicked
usernameElement.addEventListener('click', function() {
    this.contentEditable = true;  
    this.focus();                
});

//find the location element
const locationElement = document.querySelector('.location');

//editable when clicked
locationElement.addEventListener('click', function() {
    this.contentEditable = true;  
    this.focus();                
});

//find the user quote element
const userQuoteElement = document.querySelector('.user-quote p');

//editable when clicked
userQuoteElement.addEventListener('click', function() {
    this.contentEditable = true;  
    this.focus();                
});

//stop editing when Enter is pressed
usernameElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();      // stops Enter from making a new line
        this.blur();                 // removes cursor from text
    }
});

// stop editing when user clicks away
usernameElement.addEventListener('blur', function() {
    this.contentEditable = false;    // makes it not editable anymore
});