function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
let password = generateRandomString(10);
let ucl = document.querySelector('.ul');
let lcl = document.querySelector('.ll');
let num = document.querySelector('.n');
let sym = document.querySelector('.s');
let refresh = document.querySelector('.refresh');
let gen_btn = document.querySelector('.gen-btn');
let copy_btn = document.querySelector('.copy');

console.log(password);

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
}

function isNumber(char) {
    return /^[0-9]$/.test(char);
}

function isSpecialChar(char) {
    return /[^a-zA-Z0-9]/.test(char);
}

function modifyPassword(password) {
    let modifiedPassword = '';

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (ucl.checked && isUpperCase(char)){
            modifiedPassword += char;
        }
        if (lcl.checked && isLowerCase(char)){
            modifiedPassword += char;
        }
        if (num.checked && isNumber(char)){
            modifiedPassword += char;
        }
        if (sym.checked && isSpecialChar(char)){
            modifiedPassword += char;
        }
        
    }

    document.querySelector('.password').textContent = modifiedPassword;
}

function copyPassWord(){
    let text = document.querySelector('.password').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

refresh.addEventListener('click', () => {
    password = generateRandomString(10);
    modifyPassword(password);
});

gen_btn.addEventListener('click', () => {
    modifyPassword(password);
});

copy_btn.addEventListener('click', () => {
    copyPassWord();
})

