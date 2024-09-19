// console.log("event ongonig");

// option 2 : we will use it
function ShowNow() {
  document.body.style.backgroundColor = "blue";
}

// option 3:
showMoreButton = document.getElementById("showMoreBtn");
showMoreButton.onclick = showMore;

function showMore() {
  document.body.style.backgroundColor = "red";
}

// option 4:
clickMoreBtn = document.getElementById("click-More");
clickMoreBtn.addEventListener("click", clickMore);

function clickMore() {
  document.body.style.backgroundColor = "pink";
}
// option 4 another:
clickMoreBtn = document.getElementById("click-More");
clickMoreBtn.addEventListener("click", function clickMore() {
  document.body.style.backgroundColor = "pink";
});

// final btn: we will use it
document.getElementById("final-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

// <!-- event handeler seystem 2 way -->

// option-1:

function handleOnClick() {
  // console.log('cliked');

  // document.getElementById('reset-text').innerText ='change by handle clicked';  my owan try
  const resetText = document.getElementById("reset-text");
  resetText.innerText = "Change by handle cliked";
}

//   option-2:
  document.getElementById("event-listener").addEventListener("click", function (){
    document.getElementById("reset-text").innerText =
      "Change by event listener";
  });




//   input type: option-2 recap---->

 document.getElementById('update-btn').addEventListener('click',function(){
    // console.log('clicked');
    const inputFeild = document.getElementById('input-field');
    const inputText = inputFeild.value; 
    // console.log(inputText);
     const p = document.getElementById('display-text');
      p.innerText = inputText;
      inputFeild.value = '';
      
    
 });



//  comment section start :



// step-1: get the btn ,

  document.getElementById('send-btn').addEventListener('click', function(){
  // console.log('clicked');

  // step-2: get the area of comment box, and after get the value of comment.

   const commentBox = document.getElementById('comment-box');
   const newComment = commentBox.value;
  // console.log(newComment);

  // step-3: get the area of show the comment,

  const commentContainer = document.getElementById('comment-conteiner');
  const p = document.createElement('p');
  p.innerText = newComment;
  commentContainer.appendChild(p)
  
  // step-4 clear the comment box
  commentBox.value = '';
  
});






// delete method uses............

document.getElementById('delete-btn').addEventListener('click', function(){
  // console.log('cliked');
  
})