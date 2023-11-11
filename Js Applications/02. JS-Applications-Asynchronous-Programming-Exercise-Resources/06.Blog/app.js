function attachEvents() {
    //Get DOM elements
    let postsSelect = document.querySelector('select#posts');
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');
    let postTitle = document.getElementById('post-title');
    let postContent = document.getElementById('post-body');


    //Add event listeners
    btnLoadPosts.addEventListener('click', handleLoadPosts);
    btnViewPost.addEventListener('click', handleViewPost);
    let commonData;

    function handleLoadPosts() {
        //Get posts
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => addPosts(data));

        function addPosts(data) {
            commonData = data;

            postsSelect.innerHTML = '';

            for (let [id, postInfo] of Object.entries(data)) {
                //Create option
                let option = document.createElement('option');
                option.value = id;
                option.textContent = postInfo.title;
                option.dataset.body = postInfo.body;
                postsSelect.appendChild(option);
            }
        }
    }

    async function handleViewPost() {
        //Get post id
        let selectedPostId = document.getElementById('posts').value;

        postTitle.textContent = commonData[selectedPostId].title;
        postContent.textContent = commonData[selectedPostId].body;


        //Fetch comments
       let res =  await fetch('http://localhost:3030/jsonstore/blog/comments')
          let data =  await res.json()
        let result = handleComments(data)
        return result

        //Handle comments
        function handleComments(data) {
            let commentsUl = document.getElementById('post-comments');
            commentsUl.textContent = '';

            for (let commentInfo of Object.entries(data)) {
                if (commentInfo[1].postId == selectedPostId) {
                    //Create comment li
                    let li = document.createElement('li');
                    li.id = commentInfo[1].id
                    li.textContent = commentInfo[1].text;
                    commentsUl.appendChild(li);
                }
            }
        }
    }
}

attachEvents();