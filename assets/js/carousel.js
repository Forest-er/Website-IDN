const carouselImages = [
  "../assets/images/d1.jpeg",
  "../assets/images/d2.png",
  "../assets/images/d3.jpeg",
  "../assets/images/d4.jpeg",
  "../assets/images/d5.jpeg",
  "../assets/images/d6.jpeg",
  "../assets/images/d7.jpeg",
  "../assets/images/d8.png",
  "../assets/images/d9.jpeg",
  "../assets/images/d10.jpeg"
];

const track = document.getElementById("stairCarousel");
let currentIndex = 0;

const config = [
  { size: 320, left: "10%", zIndex: 5 },
  { size: 360, left: "30%", zIndex: 6 },
  { size: 400, left: "50%", zIndex: 7 }, 
  { size: 360, left: "70%", zIndex: 6 }, 
  { size: 320, left: "90%", zIndex: 5 }   
];

function renderCarousel() {
  if (!track) return;
  track.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const imgIndex = (currentIndex + i) % carouselImages.length;
    const src = carouselImages[imgIndex];

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Slide ${imgIndex + 1}`;
    img.style.position = "absolute";
    img.style.width = `${config[i].size}px`;
    img.style.height = `${config[i].size}px`;
    img.style.left = config[i].left;
    img.style.bottom = "0";
    img.style.transform = "translateX(-50%)";
    img.style.zIndex = config[i].zIndex;
    img.style.objectFit = "cover";
    img.style.borderRadius = "1.25rem";
    img.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
    img.style.opacity = "1";
    img.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    track.appendChild(img);
  }
}

function slideNext() {
  const images = track.querySelectorAll("img");
  images.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateX(-50%) scale(0.95)";
  });

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    renderCarousel();
    const newImages = track.querySelectorAll("img");
    newImages.forEach(img => {
      img.style.opacity = "1";
      img.style.transform = "translateX(-50%) scale(1)";
    });
  }, 600);
}

renderCarousel();
setInterval(slideNext, 5000);