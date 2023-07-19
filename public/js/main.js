// fetching data from the api endpoint
const API_KEY ='vKI5iIXDiOGE7eVu9K6mDGiMaXKZwGvD9UKk6JiR'
const quizQuestions = async()=>{
    return await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=code&difficulty=Easy&limit=1&tags=HTML`)
} 

// generate Questions
const questions = async () => {
    const {data}= await quizQuestions()
    console.log(data[0])
    
}

questions()