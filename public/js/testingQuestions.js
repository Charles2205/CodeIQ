// fetching data from the api endpoint
const API_KEY ='vKI5iIXDiOGE7eVu9K6mDGiMaXKZwGvD9UKk6JiR'
const quizQuestions = async()=>{
    return await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=code&difficulty=Easy&limit=1&tags=HTML`)
} 



// generate Questions
const questionTag = document.querySelector('#question-tag')
const questions = async () => {
    let {data}= await quizQuestions()
    data=(data[0])
    let answers =data.answers
    console.log(answers)
    console.log(data);
    questionTag.innerHTML=`
    <h2 class="my-5">${data.question}</h2>
        <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              ${answers.answer_a}
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
            <label class="form-check-label" for="flexRadioDefault2">
            ${answers.answer_b}
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
            <label class="form-check-label" for="flexRadioDefault3">
            ${answers.answer_c} 
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
            <label class="form-check-label" for="flexRadioDefault4">
            ${answers.answer_d}
            </label>
          </div>

          <div class="form-check fs-3">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked>
            <label class="form-check-label" for="flexRadioDefault5">
            ${answers.answer_e}
            </label>
          </div>
        </div>
    
    
    
    
    `
    console.log(questionTag);
    
}
questions()