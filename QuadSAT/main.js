const feedbackRank = document.querySelectorAll('.feedback-rank')
const feedbackContainer = document.querySelector('.feedback-rank-container')
const submitBtn = document.querySelector('#submit')
const feedback = document.querySelector('#feedback')
let automatedRating = 'Very Good'

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
         <button class="btn1" id="cancel">Cancel</button>
         `
})


function removeActive() {
  for(let i = 0; i < feedbackRank.length; i++) {
     feedbackRank[i].classList.remove('active')
  }
}
