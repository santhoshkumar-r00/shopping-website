window.onload = function () {
    const links = document.getElementsByClassName("card-body");
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", handleLinkClick);
    }
  };
  
  function handleLinkClick(event) {
    event.preventDefault(); 
    alert("Your Order Placed SUCCESSFULLY");
  }
  