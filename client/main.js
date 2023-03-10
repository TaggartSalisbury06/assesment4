const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune-btn")
const signUpForm = document.querySelector("form")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune").then(res => {
        alert(res.data)
    })
}

const signUp = body => axios.post("http://localhost:4000/api/signUp", body).then(res => {
    createUserCard(res.data)
  }).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work.')
  })

function createUserCard(data) {
    
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
signUpForm.addEventListener('submit', signUp)
