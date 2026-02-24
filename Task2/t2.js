//Use Promise.all() to simulate fetching 'User Data', 'Posts', and 'Comments' with different delays and log results together.

function fetchUser(){
  return new Promise(resolve =>{
    setTimeout(()=> resolve("User Data"),1000);
  });
}

function fetchPosts(){
  return new Promise(resolve =>{
    setTimeout(()=> resolve("Posts"),2500);
  });
}

function fetchComments(){
  return new Promise(resolve =>{
    setTimeout(()=> resolve("Comments"),1500);
  });
}

console.log("fetching data...");

Promise.all([fetchUser(), fetchPosts(),fetchComments()])
  .then(results => {
    console.log("Data fetching done: ",results);
  })
  .catch(error => {
    console.log("Error:",error);
});