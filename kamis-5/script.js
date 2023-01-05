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
  