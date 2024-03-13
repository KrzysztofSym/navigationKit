document.getElementById('latest').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('menu').checked = false;
    }
});
document.getElementById('menu').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('latest').checked = false;
    }
});
