// fetching data from the api endpoint
const API_KEY = "vKI5iIXDiOGE7eVu9K6mDGiMaXKZwGvD9UKk6JiR";
let storeQuestions =[]
const quizQuestions = async () => {
  return await axios.get(
    `https://the-trivia-api.com/v2/questions/`
  );
};

// generate Questions
const questionTag = document.querySelector("#question-tag");
// function to generate Question
const questions = async () => {
  let { data } = await quizQuestions();
  data = data[0];
  console.log(data);
  questionTag.innerHTML = `
    <h2 class="my-5">${data.question.text}</h2>
    <div class="form-check fs-3 ">
    <input class="form-check-input" type="radio" value="${data.incorrectAnswers}" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
    </label>
  </div><div class="form-check fs-3 ">
  <input class="form-check-input" type="radio" value="${data.incorrectAnswers[1]}" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  </label>
</div>

         

          


          
        </div>
    
    
    
    `;
  clearSelection();
  
  storeQuestions.push(data.id)
  console.log(data.incorrectAnswers[0]);  
};
questions();


const btnClear = document.querySelector("#btnClear");
const btnNext = document.querySelector("#btnNext");
// clear selection function
function clearSelection() {
  var radioButtons = document.getElementsByName("flexRadioDefault");
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

btnClear.addEventListener("click", clearSelection);
  // btnNext.addEventListener("click",questions);
  btnNext.addEventListener("click",getSelectedOptions )

// function to determine the options selected by the user
async function getSelectedOptions(){
  let { data } = await quizQuestions();
  const radioButtons =document.getElementsByName("flexRadioDefault")
  for(const radioButton of radioButtons) {
    if(radioButton.checked){
      let userAnswer =radioButton
      console.log(userAnswer);
      return
    }
  }
}

