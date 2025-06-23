function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const bgColor = document.querySelector('.widget p .color');
const body = document.body;



btn.addEventListener('click', btnClickHandler);

function btnClickHandler() { 
  
  const color = getRandomHexColor();
  bgColor.textContent = color;
  body.style.backgroundColor = color;
};

const widget = document.querySelector('.widget');
Object.assign(widget.style, {
  width: `${345}px`,
  height: `${280}px`,
  backgroundColor: '#fff',
  borderRadius: `${8}px`,
  padding: `${100}px ${88}px`,
  fontFamily: `"Montserrat", sans-serif`,
  lineHeight: 1.5,
  letterSpacing: `${0.04}px`,
});

const widgetText = document.querySelector('.widget p');
Object.assign(widgetText.style, {
  color: '#2e2f42',
  fontWeight: 400,
  marginTop: 0,
  marginBottom: `${16}px`
});

Object.assign(btn.style, {
  width: `${148}px`,
  height: `${40}px`,
  backgroundColor: '#4e75ff',
  color: '#fff',
  borderRadius: `${4}px`,
  padding: `${8}px ${16}px`,
  border: 'none',
  fontWeight: 500
});

btn.addEventListener('mouseenter', () => {
  btn.style.backgroundColor = '#6c8cff';
});
btn.addEventListener('mouseleave', () => {
  btn.style.backgroundColor = '#4e75ff';
});