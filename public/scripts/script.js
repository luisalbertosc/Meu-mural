
document.addEventListener("DOMContentLoaded", () => {

    updatePosts();


});

function updatePosts() {
    fetch("http://localhost:3000/api/all")
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            let postElements = "";
            let posts = JSON.parse(json);

            posts.forEach((post) => {
                let postElement = `<div id=${post.id} class="task-container">
          <div>
              <h5>${post.title}</h5>
          </div>
          <div>
              <p>${post.description}</p>
          </div>
          <button id="btn" onclick="deletePost('${post.id}')" type="button">
          <i class="ph-trash"></i>
          </button>
      </div>
  </div>`;
                postElements += postElement;
            });
            document.getElementById("posts").innerHTML = postElements;
        });

}


function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post),
    };

    fetch("http://localhost:3000/api/new", options).then((res) => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
        handleButtonAble()

       
    });
}

let container = document.getElementById("posts");

container.addEventListener("click", (e) => {
    let id = e.target.id;
    if (id == btn) {
        deletePost();
    }
    
});

function deletePost(id) {
 
    fetch("http://localhost:3000/api/del/" + id, { method: "DELETE" })
        .then((res) => {
            return res.text();
        })
        .then((id) => {
            document.getElementById(id).remove();
            updatePosts();
            document.getElementById("title").value = "";
            document.getElementById("desc").value = "";
        });
}

function handleButtonAble() {
    let buttonDisabled = document.querySelector('.catch-button');
    let inputTitle = document.querySelector('.input-title').value
    let inputDesc = document.querySelector('.input-desc').value

    if (inputTitle.length == 0){
        buttonDisabled.classList.add('button-disabled')
        buttonDisabled.disabled = true;
    } else if (inputTitle.length > 0) {
        buttonDisabled.classList.remove('button-disabled')
        buttonDisabled.disabled = false;
    }
}