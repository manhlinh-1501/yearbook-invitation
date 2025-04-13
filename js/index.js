// Hiển thị tên
const name = localStorage.getItem('input-name');
document.getElementById("display-name").textContent = name;

// Script chuyển đổi ảnh background
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Hiển thị slide đầu tiên
slides[0].style.opacity = 1;

function changeSlide() {
    // Ẩn slide hiện tại
    slides[currentSlide].style.opacity = 0;
    
    // Chuyển đến slide tiếp theo
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Hiển thị slide mới
    slides[currentSlide].style.opacity = 1;
    
    // Đặt thời gian chuyển slide (5 giây)
    setTimeout(changeSlide, 5000);
}

// Bắt đầu slideshow sau 5 giây
setTimeout(changeSlide, 5000);