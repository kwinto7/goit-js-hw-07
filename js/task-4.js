
const form = document.querySelector('.login-form');

form.addEventListener('submit', formHandler);

function formHandler(event) { 
    event.preventDefault()
    
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const userData = {
        email,
        password
    };
    console.log(userData);
    event.target.reset();
};

Object.assign(form.style, {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    width: `${408}px`,
    borderRadius: `${8}px`,
    padding: `${24}px`,
    gap: `${8}px`
});

const labels = document.querySelectorAll('.login-form label');
labels.forEach(label => {
    Object.assign(label.style, {
        display: 'flex',
        flexDirection: 'column',
        gap: `${8}px`,
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: `${0.04}em`,
        color: '#2e2f42'
    });
});

const inputs = document.querySelectorAll('.login-form input');
inputs.forEach(input => {
    Object.assign(input.style, {
        height: `${40}px`,
        width: `${360}px`,
        border: `${1}px solid #808080`,
        borderRadius: `${4}px`,
        padding: `${8}px ${16}px`
    });
    input.addEventListener('mouseenter', () => {
        input.style.border = `${1}px solid #000`; 
    });
    input.addEventListener('mouseleave', () => {
        input.style.border = `${1}px solid #808080`; 
    });
    input.addEventListener('focus', () => {
        input.style.border = `${1}px solid #808080`; 
        input.placeholder = 'Type area';
    });
    input.addEventListener('blur', () => {
        input.style.border = `${1}px solid #808080`; 
        input.placeholder = '';
    });
});



const btn = document.querySelector('.login-form button');
Object.assign(btn.style, {
    marginTop: `${8}px`,
    width: `${86}px`,
    height: `${40}px`,
    padding: `${8}px ${16}px`,
    borderRadius: `${8}px`,
    backgroundColor: '#4e75ff',
    border: 'none',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 500,
    fontSize: `${16}px`,
    lineHeigth: 1.5,
    letterSpacing: `${0.04}em`,
    color: '#fff'
});

btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = '#6c8cff'; 
});
btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = '#4e75ff'; 
});
