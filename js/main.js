
//event listener
document.querySelector('button').addEventListener('click', namesGen)





function namesGen() {
    //store user answers in variables
    let firstN = document.querySelector('#input-1').value
    let lastN = document.querySelector('#input-2').value
    let introExtro = document.querySelector('#input-3').value
    let userState = document.querySelector('#input-5').value
    const randomizeAll = Math.floor(Math.random() * 20)
    
    document.querySelector()

    if (firstN.length > 0) {
        let firstnames = [

        "Method Man ",
        "Ghost ",
        "Inspectah ",
        "Master ",
        "U-God ",
        "Raekwon ",
        "RZA ",
        "GZA ",
        "Masta ",
        "Ol' Dirty "
        ]
       
        const wutangFn = firstnames[randomizeAll]
        document.querySelector('#firstN').innerText = wutangFn
    }
    else {
        alert("Enter your first name!")
    }

    if (lastN.length > 0) {
        const lastNames = [
    'Da Vinci',
    'Killah Jones',
    'Eagle',
    'Killa Divine',
    'Maximus',
    'the Scientist',
    'Thunderstrike',
    'the Shadow',
    'Disciple',
    'Professor'

        ]
        const wutangLn = lastNames[randomizeAll]
        document.querySelector('#lastN').innerText = wutangLn
    }
    else {
      alert("Enter your last name!")  
    }
   
    if (introExtro === 'introvert') {
        const introvertNames = [
    'Timid',
    'Shy',
    'Whisper',
    'Quiet',
    'Shadow',
    'Reluctant',
    'Hidden',
    'Low-key',
    'Silent',
    'Bashful'
        ]
    
       const testintronames = introvertNames[randomizeAll]
         document.querySelector('#introvert').innerText = testintronames
    }
    else if (introExtro === 'extrovert') {
        const extrovertNames = [
    'Verbal',
    'Shogun',
    'Electric',
    'Thunder',
    'Loud Liquid',
    'Social',
    'Social Killa',
    'Supreme Shoutmaster',
    'Energetic',
    'Charismatic'
        ]
       let testextronames = extrovertNames[randomizeAll]
        document.querySelector('#extrovert').innerText = testextronames
    }



}


