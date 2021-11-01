// let postTitle = document.getElementById('post-title');
// let postBody = document.getElementById('post-body');
// let postForm = document.querySelector('#post-form')

// postForm.addEventListener('submit', createPost)

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            // console.log(e)
            html += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                                <h6 class="text-danger">${e.id}</h6>
                            </div>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}</p>
                        </div>
                        <div class="text-center py-2">
                            <button type="submit" id="click" onclick="page(${e.id})" class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            `
            postLayout.innerHTML = html
        });
    })  
}

getPosts();

function page(id) {
    localStorage.setItem("postid", id);
    
    postId = localStorage.getItem("postid");
    console.log(postId);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((e) => {
        let postLayout = document.getElementById('post-layout')
        let contents = "";
            contents = `
            <div class="p-5">
                <div class="card bg-white" onclick="page()">
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 text-dark">${e.id}</h5>
                        </div>
                        <h5 class="post-title mb-4 text-dark">${e.title}</h5>
                        <p class="post-body text-dark">${e.body}</p>
                    </div>
                    <div class="text-center py-2">
                        <a href="index.html"><button type="submit" class="btn btn-danger text-white text-center">All Posts</button></a>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML =  contents
           

    });
    
}

// function createPost(e) {
//     e.preventDefault();
//     let pTitle = postTitle.value;
//     let pBody = postBody.value;
//     console.log('post-Title', pTitle)
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: pTitle,
//             body: pBody,
//             userId: '3'
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .th
// }