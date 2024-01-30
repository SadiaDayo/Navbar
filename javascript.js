window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

var menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#555'; // Change background color on hover
    });
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; // Reset background color on mouse leave
    });
});
