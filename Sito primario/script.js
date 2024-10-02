
document.addEventListener("click", function(event) {
  
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (event.target.matches(".dropbtn")) {
    
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    
    } else {
    
      dropdownMenu.style.display = "none";
    
    }
  
});
