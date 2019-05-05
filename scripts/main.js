const setup = document.querySelector('#setup')
const punchline = document.querySelector('#punchline')
const answerButton = document.querySelector('#answer-btn')
const newJokeButton = document.querySelector('#newJoke')

tellJoke = (joke) => {
    const p = document.createElement('p')
    p.textContent = joke.setup
    setup.appendChild(p)
}

tellAnswer = (joke) => {
    const p = document.createElement('p')
    p.textContent = `${joke.punchline} 😂`
    punchline.appendChild(p)
}

newJokeButton.addEventListener('click', () => {
    newJokeButton.textContent = 'Tell me another joke......'
    fetch('https://official-joke-api.appspot.com/random_joke')
	.then(jokes => jokes.json())
	.then(parsedJoke => {
        setup.textContent = ''
        punchline.textContent = ''
        tellJoke(parsedJoke)
        answerButton.addEventListener('click', () => {
            punchline.textContent = ''
            tellAnswer(parsedJoke)
        })
    })
})

