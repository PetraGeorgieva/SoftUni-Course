
 async function loadCommits() {
   let input =  document.getElementById('username');
   let repoInput =   document.getElementById('repo');
   let ul =  document.getElementById('commits')
   let username =  input.value;
   let repo  = repoInput.value;
   let url = `https://api.github.com/repos/${username}/${repo}/commits`;
   let commits =  await fetch(url)
      .then(response=> response.json());

      let arr = Object.values(commits)
      arr.forEach(c=>{
        let li = createLi(c.commit.author.name,c.commit.message)
        ul.appendChild(li)
      })
      function createLi(author,message){
        let li =  document.createElement('li');
        li.textContent = `${author}: ${message}`
        return li;
    }
}