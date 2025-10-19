const ebook = [
    {"judul": "Ebook Pertama", "link": "#", "image": "../assets/images/d1.jpeg"},
    {"judul": "Ebook Kedua", "link": "#", "image": "../assets/images/image.jpeg"},
    {"judul": "Ebook Ketiga", "link": "#", "image": "../assets/images/d5.jpeg"},
    {"judul": "Ebook Keempat", "link": "#", "image": "../assets/images/d3.jpeg"},
    {"judul": "Ebook Kelima", "link": "#", "image": "../assets/images/d7.jpeg"},
    {"judul": "Ebook Keenam", "link": "#", "image": "../assets/images/d2.png"},
    {"judul": "Ebook Ketujuh", "link": "#", "image": "../assets/images/d4.jpeg"},
    {"judul": "Ebook Kedelapan", "link": "#", "image": "../assets/images/d6.jpeg"}
]

function loadEbooks() {
    const cardContainer = document.getElementById('card-container');
    ebook.forEach((item) => {
        const card = document.createElement('div');
        card.className = "border border-gray-300 shadow-md hover:shadow-gray-300  hover:-translate-y-2 transition-all duration-200 rounded-lg p-4 overflow-hidden flex flex-col shrink-0 w-1/4 h-[491px] items-centers";
        card.innerHTML = `
        <img id="ebook-image" class="w-full h-3/4 rounded-lg object-cover object-top bg-center"
                    src="${item.image}" alt="Ebook Image">
                <div class="p-6 flex flex-col items-center">
                    <h2 id="ebook-title" class="text-2xl font-bold mb-2">${item.judul}</h2>
                    <a id="ebook-link" href="${item.link}"
                        class="px-4 py-2 bg-[#2CC295] hover:bg-[#49796B] transition-all duration-300 text-white rounded">Baca
                        Sekarang</a>
                </div>`
        cardContainer.appendChild(card);
    });
}


loadEbooks();