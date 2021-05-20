function popuptoast() {

  var bøjd = document.getElementById("toastPopup");

  bøjd.className = "show";

  setTimeout(function() { bøjd.className = bøjd.className.replace("show", ""); }, 3000);
}
