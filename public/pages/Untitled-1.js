
// fetching data from the api endpoint
const API_KEY = "vKI5iIXDiOGE7eVu9K6mDGiMaXKZwGvD9UKk6JiR";
let storeQuestions =[]
const quizQuestions = async () => {
  return await axios.get(
    `https://the-trivia-api.com/v2/questions`
  );
};

// generate Questions
const questionTag = document.querySelector("#question-tag");
// function to generate Question
const questions = async () => {
  let { data } = await quizQuestions();
  data = data[0];
  let answers = data.answers;
  console.log(answers);
  console.log(data);
  questionTag.innerHTML = `
    <h2 class="my-5">${data.question}</h2>
        <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
            ${
              answers.answer_a.startsWith("<")
                ? "<code>"+ answers.answer_a.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>"
                : answers.answer_a
            }   
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
            <label class="form-check-label" for="flexRadioDefault2">
            ${answers.answer_b.startsWith("<")
                ? "<code>"+ answers.answer_b.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>"
                : answers.answer_b}
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
            <label class="form-check-label" for="flexRadioDefault3">
            ${answers.answer_c.startsWith("<")
                ? "<code>"+ answers.answer_c.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>"
                : answers.answer_c} 
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
            <label class="form-check-label" for="flexRadioDefault4">
            ${
                answers.answer_d.startsWith("<")
                ? "<code>"+ answers.answer_d.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>"
                : answers.answer_d}
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked>
            <label class="form-check-label" for="flexRadioDefault5">
            ${ 
                answers.answer_d.startsWith("<")
                ? "<code>"+ answers.answer_e.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>"
                : answers.answer_e
            }
            
            </label>
          </div>
        </div>
    
    
    
    `;
  clearSelection();
  // console.log(questionTag);
  storeQuestions.push(data.id)
  console.log(storeQuestions);
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
btnNext.addEventListener("click",questions);
