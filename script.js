let textarea=document.getElementById("posting");
let post_btn=document.getElementById("post-btn");
let count=document.getElementById("count");
let feed_container=document.getElementById("feed-cont");
let content_editable=false;

// counting the value in the feed

textarea.addEventListener("keyup", function(){
    
})

// Creating a feed

post_btn.addEventListener("click",function(){
    generate_feed(textarea.value);
    textarea.value="";
})


// making the content editable when 


// function to genterate feed

function generate_feed(data){
    let newfeed=document.createElement("div");
    newfeed.className="feed";
    newfeed.innerHTML=`
    <div class="heading">
        <img class="person" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="person">
        <div class="name">Jonne Graham</div>
        <div class="twitid">@jonnegraham123</div>
        <img class="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit icon">
        <img class="delete-icon empty"src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete icon">
    </div>
    <textarea name="posting" id="posting-in-feed" cols="30" rows="10">${data}</textarea>
    <div class="footer-icons">
        <img class="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment icon">
        <img class="like" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="heart icon">
    </div>
    `
    feed_container.appendChild(newfeed);
    // newfeed.getElementById("posting-in-feed").setAttribute("contentEditable",false);

    // Adding editing feature

    let editbtn=newfeed.querySelector(".edit");
    editbtn.addEventListener("click",function(){
        content_editable=true;
        if (content_editable){
            newfeed.textarea.setAttribute("contentEditable",true);
        }
    })

    let deletebtn=newfeed.querySelector(".delete-icon");
    deletebtn.addEventListener("click",function(){
        deletebtn.classList.remove(".empty");
        console.log("delete btn clicked");
        deletebtn.classList.add(".filled");
    })
    // let deletebtnfilled=newfeed.querySelector(".delete-icon-filled");
    // deletebtnfilled.addEventListener("click",function(){
    //     newfeed.classList.remove(deletebtnfilled);
    //     newfeed.classList.add(deletebtn);
    // })
}