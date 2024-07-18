function toggleDrawer(id) {
  var drawer = document.getElementById(id);
  var caret = document.getElementById('caret-' + id).querySelector('i');
  if (drawer.style.display === "none" || drawer.style.display === "") {
      drawer.style.display = "block";
      caret.classList.remove('fa-caret-down');
      caret.classList.add('fa-caret-up');
  } else {
      drawer.style.display = "none";
      caret.classList.remove('fa-caret-up');
      caret.classList.add('fa-caret-down');
  }
}