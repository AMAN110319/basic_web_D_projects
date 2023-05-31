let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let string = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            string += buttonText;
            screen.value = string;
        }
        else if (buttonText == 'C') {
            string = "";
            screen.value = string;
        }
        else if (buttonText == '=') {
            screen.value = eval(string);
        }
        else {
            string += buttonText;
            screen.value = string;
        }

    })
}
