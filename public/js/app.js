
 const weatherForm = document.querySelector('form')
 const search = document.querySelector('input')
 const messageOne = document.querySelector('#message-1')
 const messageTwo = document.querySelector('#message-2')
 const image = document.querySelector('image')

//  messageOne.textContent = 'From JS'
 
 weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?adress='+ location).then((response) => {
    response.json().then((data) => {
            if (data.error) {
                    messageOne.textContent = 'Error message: '+ data.error
                    messageTwo.textContent = ''
            }else{
                messageOne.textContent = 'Location: ' + data.Weather.Location
                messageTwo.textContent = 'Weather: ' +data.Weather.Weather
            }
        })
    }) 

 })