function switchMode(event) {


    const stylesheet = document.getElementById("themeStylesheet");
    
    stylesheet.href = "whiteMode.css";
    event.preventDefault()
    let buttonClass = document.querySelector('.last_link');

    if (buttonClass.innerHTML === 'light mode') {
        buttonClass.innerHTML = 'dark mode';
    } else {
        buttonClass.innerHTML = 'light mode';
        stylesheet.href = "index-default.css";
    }
}