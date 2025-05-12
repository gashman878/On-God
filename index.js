function switchMode(event) {
    const stylesheet = document.getElementById("themeStylesheet");
    stylesheet.href = "whiteMode.css";
    event.preventDefault()
}