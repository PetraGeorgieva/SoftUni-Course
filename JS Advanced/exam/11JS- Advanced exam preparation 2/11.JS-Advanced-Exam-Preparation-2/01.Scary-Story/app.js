window.addEventListener("load", solve);

function solve() {
  const firstName =  document.getElementById("first-name");
  const lastName =  document.getElementById("last-name");
  const age =  document.getElementById("age");
  const storyTitle =  document.getElementById("story-title");
  const options = document.getElementById("genre");
  const story = document.getElementById("story");
  let divIdMain = document.getElementById("main");
  let bodyElement = document.querySelector(".body");
  
  let divUl = document.getElementById('preview-list')
  let btnPublish = document.getElementById("form-btn");
  
  btnPublish.addEventListener('click', addingStory)
  
  
  function addingStory (e){
    e.preventDefault();
      if(firstName.value == '' || lastName.value == '' || age.value == '' || storyTitle.value == '' || story.value == ''){
        return;
      }

      btnPublish.disabled = true;
  
      let list = document.createElement('li');
      let article =  document.createElement('article');
      article.setAttribute('class', 'story-info');
      let h4 =  document.createElement('h4');
      h4.textContent = `Name: ${firstName.value} ${lastName.value}`
      let p1 = document.createElement('p');
      p1.textContent = `Age: ${age.value}`
      let p2 = document.createElement('p');
      p2.textContent = `Title: ${storyTitle.value}`
      let p3 = document.createElement('p');
      p3.textContent = `Genre: ${options.value}`
      let p4 = document.createElement('p');
      p4.textContent = `${story.value}`;
      article.appendChild(h4)
      article.appendChild(p1)
      article.appendChild(p2)
      article.appendChild(p3)
      article.appendChild(p4)
      
      firstName.value = '';
      lastName.value = '';
      age.value = '';
      storyTitle.value = '';
      story.value = '';
  
  
     
      let btnSave  =  document.createElement('button');
      btnSave.className = "save-btn"
      btnSave.textContent = "Save"
      let btnEdit =  document.createElement('button');
      btnEdit.className = "edit-btn"
      btnEdit.textContent = "Edit"
      let btnDelete =  document.createElement('button');
      btnDelete.className = "delete-btn"
      btnDelete.textContent = 'Delete'
  
      btnSave.classList.disabled = false;
      btnEdit.classList.disabled = false;
      btnDelete.classList.disabled = false;
      
     btnSave.addEventListener('click', saves)
     btnEdit.addEventListener('click', edits)
     btnDelete.addEventListener('click',deleted)
  
  
      list.appendChild(article);
      list.appendChild(btnSave)
      list.appendChild(btnEdit)
      list.appendChild(btnDelete)
  
      divUl.appendChild(list)

      function saves() {
        divIdMain.remove();
        let h1Saved = document.createElement("h1");
        h1Saved.textContent = "Your scary story is saved!";
        let bodyElement2 = document.createElement("div");
        bodyElement2.setAttribute('id', 'main');
        bodyElement.appendChild(bodyElement2);
  
        bodyElement2.appendChild(h1Saved);
       }

     function edits (){
      
      let article = document.getElementsByClassName('story-info')[0]
      let children = article.children
      let [name,seconName] =  children[0].textContent
      .replace('Name: ','')
      .split(' ')
      let ages =  children[1].textContent.replace('Age: ','');
      let storyTitleValue =  children[2].textContent.replace('Title: ','');
      let optionsValue  =  children[3].textContent.replace('Genre: ','');
      let storyvalue  =  children[4].textContent
      firstName.value = name;                       
      lastName.value = seconName;
      age.value = ages;
      storyTitle.value = storyTitleValue;
      options.value = optionsValue
      story.value = storyvalue;
      let child = divUl.children
      child[1].remove();
      btnPublish.disabled = false;
      
     }
  

     function deleted() {
      list.remove()
      btnPublish.disabled = false;
     }
  }
  }