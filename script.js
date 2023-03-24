let buttonOne = document.querySelector("#btn-1")
let buttonTwo = document.querySelector("#btn-2")
let buttonThree = document.querySelector("#btn-3")
let buttonFour = document.querySelector("#btn-4")

const generatePassword = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  console.log(generatePassword(8)); // will output a random password with 10 characters

    buttonOne.textContent = generatePassword(8)
    buttonTwo.textContent = generatePassword(8)
    buttonThree.textContent = generatePassword(8)
    buttonFour.textContent = generatePassword(8)



function btn1(){
            navigator.clipboard.writeText(buttonOne.textContent);
            alert(`${buttonOne.textContent} has been copied to clipboard`)}

function btn2(){
            navigator.clipboard.writeText(buttonTwo.textContent);
            alert(`${buttonTwo.textContent} has been copied to clipboard`)}

function btn3(){
            navigator.clipboard.writeText(buttonThree.textContent);
            alert(`${buttonThree.textContent} has been copied to clipboard`)}

function btn4(){
            navigator.clipboard.writeText(buttonFour.textContent);
            alert(`${buttonFour.textContent} has been copied to clipboard`)}




            const reloadPage = () => {
                location.reload();
              };

              const reloadButton = document.getElementById("#generate"); // replace "reload-button" with the ID of your button
              generate.addEventListener("click", reloadPage);