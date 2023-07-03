function comments(params) {
    let users = new Set();
    let articles = new Map();
    for (let line of params) {
        if (line.includes('user')) {
            let [user, userName] = line.split(' ');
            users.add(userName)
        } else if (line.includes('article')) {
            let [article, articleName] = line.split(' ');
            articles.set(articleName, new Map())
        } else if (line.includes('posts on')) {
            let [userName, commands] = line.split(' posts on ')
            let [nameofTheArticle, otherCommands] = commands.split(': ');
            let [commentName, commentContent] = otherCommands.split(', ');
            if (users.has(userName)) {
                if (articles.has(nameofTheArticle)) {
                    let info = {}
                    info[commentName] = commentContent;
                    articles.get(nameofTheArticle).set(userName, info);
                }
            }
        }
    }
  let articlesArr = [...articles.entries()].filter((a)=> a[1].size > 0).sort((a,b)=> b[1].size - a[1].size )
  
  for (let [key,value] of articlesArr) {
    let valueArr = [...value.entries()].sort((a,b)=> a[0].localeCompare(b[0]))
    console.log(`Comments on ${key}`)
    for (let [keys,values]of valueArr) {
       for ( let article of Object.keys(values)){
        console.log(`--- From user ${keys}: ${article} - ${values[article]} `)
       }
    }
  
  }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);