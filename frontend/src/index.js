document.addEventListener("DOMContentLoaded",function(){
    let welcome = document.createElement("h1")
        welcome.innerText = "Welcome"
    let formDiv = document.createElement("div")
        formDiv.setAttribute("class","login-page")
    let div = document.createElement("div")
        div.setAttribute("class","form")
    let loginForm = document.createElement("form")
        loginForm.setAttribute("class","login-form")
    let input = document.createElement("input")
        input.type = "text"
        input.placeholder = "User Name"
    let playButton = document.createElement("button")
        playButton.innerText = "Play"
        playButton.id = "play"
    let register = document.createElement("p")
        register.setAttribute("class", "message")
        register.innerText = "Not Registered ?"
    let createAccount = document.createElement("a")
        createAccount.setAttribute("id", "create")
        createAccount.innerText = "  Create Account" 
        createAccount.href = "#"  
    let logMessage = document.createElement("h2")
        logMessage.innerText = "Log in to play"

        
        document.body.append(welcome,formDiv)
        formDiv.append(div)
        div.append(logMessage)
        div.append(loginForm)
        register.append(createAccount)
        loginForm.append(input,playButton,register)
        
        playButton.addEventListener("click", function(){
            console.log("Click")
        
        })
        
        createAccount.addEventListener("click", function(){
            loginForm = document.querySelector(".form")
            loginForm.remove()
            // document.body.innerText = ""
            let createUserDiv = document.createElement("div")
            createUserDiv.setAttribute("class", "form")
            let createUserForm = document.createElement("form")
            createUserForm.setAttribute("class", "login-form")
            let inputTag = document.createElement("input")
            inputTag.type = "text"
            inputTag.placeholder = "username"
            let playButton_1 = document.createElement("button")
            playButton_1.setAttribute("id","play1")
            playButton_1.innerText = "Play"
            let createMessage = document.createElement("h2")
            createMessage.innerText = "Create account to play"

            createUserDiv.append(createMessage)
            document.body.append(createUserDiv)
            createUserDiv.append(createUserForm)
            createUserForm.append(inputTag, playButton_1)
            
        playButton_1.addEventListener("click", function(e){
            e.preventDefault()
            console.log("I was clicked")
            
        
            })
        })



})

