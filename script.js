// === FILTERING LOGIC ===
const filterButtons = document.querySelectorAll(".filter-btn");
const mediaItems = document.querySelectorAll(".media-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");

    mediaItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");

      if (filterValue === "all" || filterValue === itemCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    // ✨ Update media count here
    updateMediaCount(filterValue);
  });
});


// === Zoom Logic (Open Modal) ===
mediaItems.forEach(item => {
  const media = item.querySelector("img, video");

  media.addEventListener("click", () => {
    const cloned = media.cloneNode(true);
    cloned.setAttribute("controls", true); // for video

    modalContent.innerHTML = "";
    modalContent.appendChild(cloned);

    modal.classList.add("active");

    // Delay showing (display: flex) to after class is added
    setTimeout(() => {
      modal.style.display = "flex";
    }, 10); // very short delay
  });
});

// === Close Logic ===
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");

  // Give time for opacity transition to finish
  setTimeout(() => {
    modal.style.display = "none";
  }, 400); // match transition duration
});
// Close modal when clicking outside the content
modal.addEventListener("click", (e) => {
  // If the user clicked directly on the black background (not inside modal content)
  if (e.target === modal) {
    modal.classList.remove("active");

    setTimeout(() => {
      modal.style.display = "none";
    }, 400); // match transition time
  }
});
function updateMediaCount(category) {
  const mediaCount = document.getElementById("mediaCount");

  let count = 0;
  mediaItems.forEach(item => {
    const isVisible = item.style.display !== "none";
    if (isVisible) count++;
  });

  const displayName = category.charAt(0).toUpperCase() + category.slice(1);
  mediaCount.textContent = `Showing ${count} item${count !== 1 ? 's' : ''} in "${displayName}"`;
}
