    var likesCount = document.querySelector("#likes-count span");

    likesCount = 3;
    // console.log(likesCount);

    var likesElement = document.querySelector("#likes-count");
    // console.log(likesElement);

function addToLikes() {
    
    likesCount++
    likesElement.innerText = likesCount
    // console.log(likesCount);
}