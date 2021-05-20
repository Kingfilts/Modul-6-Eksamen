
const feedbackRank = document.querySelectorAll('.feedback-rank')
const feedbackContainer = document.querySelector('.feedback-rank-container')
const submitBtn = document.querySelector('#submit')
const feedback = document.querySelector('#feedback')
const automatedRating = 'Very Good'


const modalFeedback = document.getElementById ('feedback-modal2');
const btnFeedback = document.getElementById('btnfeedback');
const feedbackClose = document.getElementById('cancel');

btnFeedback.addEventListener("click",function() {
  modalFeedback.style.display = "block";
});

feedbackClose.addEventListener("click",function() {
  modalFeedback.style.display = "none";
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode == 27  && modalFeedback.style.display == "block") {
        modalFeedback.style.display = "none";
    }
});


feedbackContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains
      ('feedback-rank')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        automatedRating = e.target.
        nextElementSibling.innerHTML
      }
})

submitBtn.addEventListener('click', (e) => {
    feedback.innerHTML = `
         <strong>Thank You for your feedback!</strong>
         <br>
         <span class="material-icons md-48" style="color: #FF3030";>favorite</span>
         <br>
         <strong>Feedback: ${automatedRating}</strong>
         <br>
         <p>We use your feedback to improve the experience</p>
         <br>
         <br>
         <br>
         <button class="btn-cancel" id="cancel">Cancel</button>
         `
         const feedbackClose = document.getElementById('cancel');
         feedbackClose.addEventListener("click",function() {
           modalFeedback.style.display = "none";
         });
})

function removeActive() {
  for(let i = 0; i < feedbackRank.length; i++) {
     feedbackRank[i].classList.remove('active')
  }
}

function popuptoast() {

  var bøjd = document.getElementById("toastPopup");

  bøjd.className = "show";

  setTimeout(function() { bøjd.className = bøjd.className.replace("show", ""); }, 3000);
}

function myFunction(event) {
  var x = event.which || event.keyCode;
  if (x == 13) {
    bøjd.className = "show";
  }
}
