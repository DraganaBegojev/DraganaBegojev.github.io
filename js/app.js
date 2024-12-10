//Search Project

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const projects = document.querySelectorAll('.project');

        projects.forEach(project => {
            const name = project.querySelector('.card-title').textContent.toLowerCase();
            const description = project.querySelector('.card-text').textContent.toLowerCase();

            if (name.includes(query) || description.includes(query)) {
                project.style.display = ''; // Show the project
            } else {
                project.style.display = 'none'; // Hide the project
            }
        });
    });
});

// Modal

document.addEventListener('DOMContentLoaded', () => {
    const descriptionButtons = document.querySelectorAll('.description-btn');
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.querySelector('.modal-body');
  
    descriptionButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
  
        modalTitle.textContent = title;
        modalBody.textContent = description;
      });
    });
  });
