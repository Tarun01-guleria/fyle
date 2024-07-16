// 4th functionality Our Projects

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const projectImage = document.getElementById("project-image");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove bg-class from all items
      items.forEach((i) => {
        i.classList.remove("bg-class");
        i.style.color = ""; // Reset text color for all items
      });

      // Add bg-class to the clicked item

      item.classList.add("bg-class");

      item.classList.remove("item-background");
      item.style.color = "white";

      // Changing the image based on the currently clicked item
      const newImage = item.getAttribute("data-image");

      projectImage.setAttribute("src", newImage);

      // Verifying for debugging purpose the src attribute change
      //   console.log(`Current image src: ${projectImage.getAttribute("src")}`);
    });
  });
});

//3rd functionality what we do section where with all the images sliding from left to right

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const hoverContainers = document.querySelectorAll(".hover-container");
  let currentIndex = 0;

  function showSlide(index) {
    hoverContainers.forEach((container, i) => {
      container.style.display = i === index ? "block" : "none";
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"));
      showSlide(currentIndex);
    });
  });

  showSlide(currentIndex);
});

//2nd functionlaity popup form
function openPopup() {
  document.getElementById("popupForm").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Closing the popup when clicking outside of the popup content
window.onclick = function (event) {
  if (event.target == document.getElementById("popupForm")) {
    document.getElementById("popupForm").style.display = "none";
  }
};
