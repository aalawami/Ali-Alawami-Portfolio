// Function to check if an element overflows its container
function isOverflowing(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

// Get all the expandable arrow elements
const expandArrows = document.querySelectorAll('.course-description .expand-arrow');

// Iterate through the expandable arrow elements
expandArrows.forEach((arrow) => {
    // Get the parent element (the course description)
    const description = arrow.parentElement;

    // Get the description text element
    const descriptionText = description.querySelector('.description-text');

    // Check if the course description text overflows its container
    if (isOverflowing(descriptionText)) {
        // Add the click event listener to the arrow
        arrow.addEventListener('click', function () {
            description.classList.toggle('expanded');
            arrow.textContent = description.classList.contains('expanded') ? '\u25B2' : '\u25BC';
        });

        // Show the arrow if the text overflows
        arrow.style.display = 'inline';
    } else {
        // Hide the arrow if the text doesn't overflow
        arrow.style.display = 'none';
    }
});
