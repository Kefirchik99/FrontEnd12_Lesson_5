async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

async function logData() {

    const data = await getData('https://jsonplaceholder.typicode.com/posts');
    data.forEach(post =>{
        //? CREATE ELEMENTS
    const postContainer = document.createElement('div');
    const postTitile = document.createElement('h3');
    const postMessage = document.createElement('p');
        //? ADD TEXT FROM POST TO ELEMENTS
    postTitile.innerText = post.title;
    postMessage.innerText = post.body;
        //? ADD ELEMENTS INTO CONTAINER
    postContainer.append(postTitile, postMessage);
    container.append(postContainer);
    
    // console.log(data);
    // const p = document.createElement('p');
    // p.innerText = data.title;
    // container.append(p);
})
}
const container = document.querySelector('#container');
logData();
