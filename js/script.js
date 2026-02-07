document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    
    // Function to render news cards
    function displayNews() {
        newsContainer.innerHTML = ''; //  container

        newsData.forEach(item => {
            const article = document.createElement('article');
            article.className = 'news-card';
            article.innerHTML = `
                <div class="image-wrapper">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x250?text=News+Image'">
                    <span class="cat-tag">${item.category}</span>
                </div>
                <div class="card-content">
                    <p class="meta">${item.date}</p>
                    <h2>${item.title}</h2>
                    <p class="excerpt">${item.excerpt}</p>
                    <a href="news/article.html?id=${item.id}" class="read-more">Read Full Story &rarr;</a>
                </div>
            `;
            newsContainer.appendChild(article);
        });
    }

    displayNews();
});