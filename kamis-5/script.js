var toggleClose = document.getElementById('close');
var sidebar = document.querySelector('.sidebar-wrapper');


document.getElementById('toggle-sidebar').addEventListener('click', function() {
    
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-200px';
      toggleClose.style.display = 'none';
    } else {
      sidebar.style.left = '0px';
      toggleClose.style.display = 'block';
    }
});

toggleClose.addEventListener('click', function(){
    sidebar.style.left = '-200px';
});
  

var text = 'Lorem ipsum dolor sit amet';
var textArray = text.split('');
var typingText = document.getElementById('typing-text');

var colors = ["red", "blue", "green", "yellow"];
// console.log(colors.random());

var randomIndex = Math.floor(Math.random() * colors.length);
var randomString = colors[randomIndex];
var x = 0;

function animateText() {
    console.log(randomString);
  if (textArray.length > 0) {
    x++;
    console.log(x);
    randomIndex = Math.floor(Math.random() * colors.length);
    randomString = colors[randomIndex];
    typingText.innerHTML += textArray.shift();
    typingText.style.color = randomString;
    console.log(randomString);
    setTimeout(animateText, 500);
  }
}

animateText();

var button = document.querySelector('.modern-button');

button.addEventListener('mouseenter', function() {
  button.style.animation = 'pulse .5s ease-in-out';
  button.style.backgroundColor = "red";
});

button.addEventListener('mouseleave', function() {
  button.style.animation = 'none';
});

