document.getElementById("button-submit-name").addEventListener("click", () => {
    localStorage.setItem("input-name", document.getElementById("input-name").value.trim())
    window.location.href = "yearbook-invitation/index-1.html"
})

