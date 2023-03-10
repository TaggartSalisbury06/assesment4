module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let fortunes = new Array (
            'Po Says: Pandas like eating bamboo, but I prefer mine dipped in chocolate.',
            'Practice makes perfect.',
            'Protective measures will prevent costly disasters.',
            'Put your mind into planning today. Look into the future.',
            'Remember the birthday but never the age.'
        )
        i = Math.floor(Math.random()*fortunes.length);
        res.status(200).send(fortunes[i])
        
    },

    signUp: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        res.status(200).send(req.body)
    }

}