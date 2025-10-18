
const { container } = ("postcss");

  const blogs = [
    { id: 1, title: "Tips Hidup Sehat", image: "https://picsum.photos/id/1018/800/600" },
    { id: 2, title: "Pentingnya Tidur Cukup", image: "https://picsum.photos/id/1025/800/600" },
    { id: 3, title: "Manfaat Air Putih", image: "https://picsum.photos/id/1035/800/600" },
    { id: 4, title: "Cara Mengelola Stres", image: "https://picsum.photos/id/1042/800/600" },
    { id: 5, title: "Nutrisi Seimbang", image: "https://picsum.photos/id/1058/800/600" },
    { id: 6, title: "Kesehatan Mental", image: "https://picsum.photos/id/1069/800/600" }
  ];

  let currentPage = 1;
  const blogsPerPage = 3;

function displayBlogs(){
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';

    const start= (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const currentBlogs = blogs.slice(start, end);

    blogContainer.className="container flex flex-row items-center justify-center space-x-4 px-10 w-3/4 mt-8";

    const leftBlog = document.createElement('a');
    leftBlog.className = "w-2/3 h-[400px] overflow-hidden shadow-lg hover:scale-103 transition-transform duration-300 hover:rounded-lg cursor-pointer";
    const rightColumn = document.createElement('a');
    rightColumn.className = "w-1/3 flex flex-col h-[400px] space-y-2";
    
    currentBlogs.forEach((blog, index)=>{
        const blogDiv = document.createElement('div');
        blogDiv.className = "relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:rounded-lg cursor-pointer";
        blogDiv.innerHTML = `
        <img src="${blog.image}" class="w-full h-full object-cover" alt="${blog.title}">
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity">
            ${blog.title}
        </div>`;
        if (index == 0){
            blogDiv.classList.add("w-full", "h-full");
            leftBlog.appendChild(blogDiv);
        }else {
            blogDiv.classList.add("w-full", "h-1/2");
            rightColumn.appendChild(blogDiv);
        }
    });
    blogContainer.appendChild(leftBlog);
    blogContainer.appendChild(rightColumn);

    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = end >= blogs.length;
  }

  document.getElementById('prev').addEventListener('click', ()=>{
    if(currentPage > 1){
        currentPage--;
        displayBlogs();
    }
  });

  document.getElementById('next').addEventListener('click', ()=>{
    if((currentPage * blogsPerPage) < blogs.length){
        currentPage++;
        displayBlogs();
    }
  });

  displayBlogs();

// carousel ajg
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