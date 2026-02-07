// MAIN RENDER FUNCTION 
function renderNews(filter = 'All') {
    const container = document.getElementById('news-container');
    if (!container) return;

    const filtered = filter === 'All' 
        ? newsData 
        : newsData.filter(item => item.category === filter);

    container.innerHTML = filtered.map(news => `
        <article class="news-card">
            <img src="${news.image}" class="card-img" onerror="this.src='https://via.placeholder.com/400x250'">
            <div class="card-body">
                <span class="cat-tag">${news.category}</span>
                <h2>${news.title}</h2>
                <p>${news.excerpt}</p>
                <a href="news/article.html?id=${news.id}" class="read-btn">Read More</a>
            </div>
        </article>
    `).join('');
}

// CATEGORY FILTER LOGIC 
document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const selectedCat = link.getAttribute('data-category');
        renderNews(selectedCat);

        // Close mobile menu after clicking a link
        document.getElementById('navMenu').classList.remove('mobile-active');
    });
});

// MOBILE TOGGLE LOGIC 
const mobileBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('navMenu');

mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
});

// INITIAL LOAD 
window.onload = () => renderNews('All');