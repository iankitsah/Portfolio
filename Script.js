const contactLink = document.getElementById("contactLink");
const contactSidebar = document.getElementById("contactSidebar");
const closeBtn = document.getElementById("closeBtn");

// Open Sidebar
contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactSidebar.style.width = "350px";
});

// Close Sidebar on Outside Click
window.addEventListener("click", (e) => {
  if (
    contactSidebar.style.width === "350px" && 
    !contactSidebar.contains(e.target) && 
    e.target !== contactLink
  ) {
    contactSidebar.style.width = "0";
  }
});
