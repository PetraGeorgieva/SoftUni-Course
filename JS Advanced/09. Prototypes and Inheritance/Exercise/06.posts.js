function solution() {
    class Post {
        constructor(title,content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(str){
           this.comments.push(str);
        }
        toString() {
            const result = [
                super.toString(),
                `Rating: ${this.likes - this.dislikes}`,
            ];
            if (this.comments.length > 0) {
                result.push('Comments:');
                this.comments.forEach(c => result.push(` * ${c}`));
            }

            return result.join('\n');
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
let scm1 = new classes.BlogPost("TestTitle", "TestContent",1);
let boh = scm1.views()
console.log(scm1.toString())


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
