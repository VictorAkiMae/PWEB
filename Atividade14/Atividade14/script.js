function transformText() {
    const textInput = document.getElementById("textInput");
    const selectedTransform = document.querySelector('input[name="textTransform"]:checked').value;

    if (selectedTransform === "uppercase") {
        textInput.value = textInput.value.toUpperCase();
    } else if (selectedTransform === "lowercase") {
        textInput.value = textInput.value.toLowerCase();
    }
}