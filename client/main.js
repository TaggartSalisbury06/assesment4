const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune-btn")
const signUpForm = document.querySelector("form")
const userContainer = document.getElementById("userMotiv")
const getCatBtn = document.getElementById("catBut")
let apiKey = "live_LiPKYg2HfxInCCnRTGZP1vVP9JrGrcW4gWgxRY72UWLx7X6AWPbHQLLVN8hq5IG4"
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

const catPic = () => {
    axios.get("http://localhost:4000/api/cat").then(res => {
        getCatPic(res.data)
    })
}

  function registerSubmitHandler(e) {
    e.preventDefault()
  
    let firstName = document.querySelector('#first-name')
    let lastName = document.querySelector('#last-name')
  
  
    let bodyObj = {
        firstName: firstName.value,
        lastName: lastName.value,
    }
  
    signUp(bodyObj)
  
    firstName.value = ''
    lastName.value = ''
  }

function createUserCard(data) {
    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')
    let motivation = new Array (
        "We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein",
        "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi",
        "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. — Mark Twain",
        "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.— Eleanor Roosevelt",
        "When you change your thoughts, remember to also change your world. —Norman Vincent Peale",
        "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
        "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.—Diane McLaren"

        
    )
    i = Math.floor(Math.random()*motivation.length);

    userCard.innerHTML = `
    <p>${data.firstName} ${data.lastName}, ${motivation[i]}</p>
    `


    userContainer.appendChild(userCard)
}

let getCatPic = (data) => {
    let img = document.querySelector("img")
    img.src = data;
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
signUpForm.addEventListener('submit', registerSubmitHandler)
getCatBtn.addEventListener('click', catPic)
