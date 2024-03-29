function getArticleGenerator(articles) {
    return function () {
        let div = document.getElementById("content");
        let article = document.createElement("article");
        if (articles.length > 0) {
            article.textContent = articles.shift();
            div.appendChild(article)
        }
    }
}
