document.addEventListener('DOMContentLoaded', function() {
    var dropdownMakanan = document.getElementById('dropdown-makanan');
    var dropdownMinuman = document.getElementById('dropdown-minuman');
    
    dropdownMakanan.addEventListener('mouseover', function() {
        dropdownMakanan.querySelector('.dropdown-content').style.display = 'block';
    });
    
    dropdownMakanan.addEventListener('mouseout', function() {
        dropdownMakanan.querySelector('.dropdown-content').style.display = 'none';
    });
    
    dropdownMinuman.addEventListener('mouseover', function() {
        dropdownMinuman.querySelector('.dropdown-content').style.display = 'block';
    });
    
    dropdownMinuman.addEventListener('mouseout', function() {
        dropdownMinuman.querySelector('.dropdown-content').style.display = 'none';
    });
});