
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

    blogContainer.className="container flex flex-row items-center justify-center space-x-2 px-10 w-3/4 mt-8";

    const leftBlog = document.createElement('a');
    leftBlog.className = "w-2/3 h-[400px] overflow-hidden shadow-lg hover:scale-103 transition-transform duration-300 ";
    const rightColumn = document.createElement('a');
    rightColumn.className = "w-1/3 flex flex-col h-[400px] gap-2";
    
    currentBlogs.forEach((blog, index)=>{
        const blogDiv = document.createElement('div');
        blogDiv.className = "relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300";
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