// Project: Portfolio Projects
// Description: This script manages the project list, search functionality, and modal display for a portfolio website.

document.addEventListener('DOMContentLoaded', () => {
  const projectsData = [
    {
      title: "Public API Requests",
      img: "images/project-14.jpg",
      alt: "Public API Requests Project",
      shortDescription: "An interactive employee directory built with vanilla JavaScript, using the Random User Generator API. Displays employee profiles in a responsive grid layout with modal popups for additional details.",
      fullDescription: `This project demonstrates the ability to work with public APIs and handle asynchronous JavaScript operations. Using the Random User Generator API, I created a responsive employee directory for a fictional distributed company called Awesome Startup. The app fetches and displays contact information for 12 randomly generated employees, including their name, photo, email, and location. Clicking on any employee opens a modal window with additional information like address and birthday. All functionality—including API requests, dynamic DOM manipulation, modal behavior, and error handling—was implemented using vanilla JavaScript, without external libraries or frameworks. This project highlights skills in working with JSON data, DOM scripting, event handling, and creating interactive, data-driven user interfaces.`,
      link: "https://draganabegojev.github.io/Public-API-Requests/",
      github: "https://github.com/DraganaBegojev/Public-API-Requests"
    },
    {
      title: "Phrase Hunter – OOP Word Guessing Game",
      img: "images/project-13.jpg",
      alt: "Phrase Hunter – OOP Word Guessing Game Project",
      shortDescription: "A browser-based word guessing game built with JavaScript and Object-Oriented Programming principles.",
      fullDescription: `A browser-based game built with vanilla JavaScript and ES6 classes, where users guess a hidden phrase by interacting with an on-screen keyboard. The project showcases Object-Oriented Programming principles, dynamic DOM updates, and responsive UI feedback—demonstrating strong front-end skills and clean, modular code structure.`,
      link: "https://draganabegojev.github.io/OOP-Game-Show-App/",
      github: "https://github.com/DraganaBegojev/OOP-Game-Show-App"
    },
    {
      title: "Interactive Form",
      img: "images/project-12.jpg",
      alt: "Interactive Form Project",
      shortDescription: "An enhanced registration form with dynamic interactivity and real-time input validation using vanilla JavaScript.",
      fullDescription: `This project features a fully functional and interactive registration form for a fictional Full Stack conference. Using core JavaScript, the form is enhanced to provide a smoother user experience through dynamic, context-aware behavior. Conditional logic is implemented to show or hide fields based on user selections, update costs in real time, and improve accessibility. The project also includes robust input validation with informative error messages that guide users to complete the form correctly. This hands-on exercise demonstrates strong DOM manipulation, event handling, and form validation skills without relying on external libraries.`,
      link: "https://draganabegojev.github.io/Interactive-Form/",
      github: "https://github.com/DraganaBegojev/Interactive-Form"
    },
    {
      title: "Data Pagination and Filtering",
      img: "images/project-11.jpg",
      alt: "Data Pagination and Filtering Project",
      shortDescription: "An interactive web app that displays student profiles using pagination to improve navigation and user experience.",
      fullDescription: `This project demonstrates the use of pagination — a common technique in web development — to manage and display a large list of student profiles. The app dynamically loads student data (including name, email, and picture) and displays only nine students per page to keep the interface clean and user-friendly. Navigation buttons allow users to move between pages, making the list easy to explore. The JavaScript solution is flexible and scalable, capable of handling lists of any length, not just the initial 42-student dataset. This project highlights practical DOM manipulation, event handling, and dynamic content rendering using core JavaScript.`,
      link: "https://draganabegojev.github.io/Data-Pagination-and-Filtering/",
      github: "https://github.com/DraganaBegojev/Data-Pagination-and-Filtering"
    },
    {
      title: "A Random Quote Generator",
      img: "images/project-10.jpg",
      alt: "A Random Quote Generator Project",
      shortDescription: "A simple app that displays random famous quotes at the click of a button using basic JavaScript logic.",
      fullDescription: `This project is a JavaScript-based quote generator that displays a random quote each time the user clicks a button. The quotes are selected from an array of objects, each containing a quote and its author. The project reinforces core JavaScript concepts such as variables, loops, conditionals, and functions. It demonstrates how to work with object literals, generate random output, and update the DOM dynamically.`,
      link: "https://draganabegojev.github.io/A-Random-Quote-Generator/",
      github: "https://github.com/DraganaBegojev/A-Random-Quote-Generator"
    },
    {
      title: "Employee Directory",
      img: "images/project-8.jpg",
      alt: "Employee Directory Project",
      shortDescription: "This project includes an employee directory that communicates with a third-party API.",
      fullDescription: `This project highlights building a dynamic Employee Directory for Awesome Startup using the Random User Generator API. It fetches data for 12 random employees, displaying their profiles in a responsive grid with details like name, email, and location. Clicking a card opens a modal with additional information, such as birthday and address. Key features include API communication, JSON parsing, responsive design, and modal functionality.`,
      link: "https://draganabegojev.github.io/Project-8/",
      github: "https://github.com/DraganaBegojev/Project-8"
    },
    {
      title: "WebApp Dashboard",
      img: "images/project-7.jpg",
      alt: "WebApp Dashboard Project",
      shortDescription: "This project features an interactive web dashboard that includes charts and graphs powered by JavaScript.",
      fullDescription: `This project demonstrates the creation of a dynamic web dashboard using HTML, CSS, and JavaScript. The dashboard mirrors real-world applications like GitHub or Mint, offering users an interactive control panel for managing web app functionality.`,
      link: "https://draganabegojev.github.io/Project-7/",
      github: "https://github.com/DraganaBegojev/Project-7"
    },
    {
      title: "Game Show App",
      img: "images/project-6.jpg",
      alt: "Game Show App Project",
      shortDescription: `This project represents the browser version of "Wheel of Success", a word-guessing game.`,
      fullDescription: `This project showcases a browser-based “Wheel of Success” word-guessing game where players interact with an onscreen keyboard to solve a random phrase. The game dynamically updates the board with correct guesses and deducts one of five guesses for incorrect ones. A win screen appears if the phrase is completed, while a losing screen is displayed after five incorrect guesses. Guessed letters are automatically disabled, providing a seamless and interactive gaming experience.`,
      link: "https://draganabegojev.github.io/Project-6/",
      github: "https://github.com/DraganaBegojev/Project-6"
    },
    {
      title: "Interactive Photo Gallery",
      img: "images/project-5.jpg",
      alt: "Interactive Photo Gallery Project",
      shortDescription: "This project showcases an interactive, searchable gallery of photos.",
      fullDescription: `This project features an interactive photo gallery built using JavaScript and CSS Grid Layout. It includes thumbnails and photos with descriptions, a dynamic search bar to filter photos based on user input, and a lightbox for viewing individual images.`,
      link: "https://draganabegojev.github.io/Project-5/",
      github: "https://github.com/DraganaBegojev/Project-5"
    },
    {
      title: "Web Style Guide",
      img: "images/project-4.jpg",
      alt: "Web Style Guide Project",
      shortDescription: "This project highlights a style guide that has been developed using Sass.",
      fullDescription: `This project focuses on converting a provided CSS file into Sass by organizing the code into multiple Sass partial files. Repeated values like colors and length units are identified and stored as Sass variables.`,
      link: "https://draganabegojev.github.io/Project-4/",
      github: "https://github.com/DraganaBegojev/Project-4"
    },
    {
      title: "Online Registration Form",
      img: "images/project-3.jpg",
      alt: "Online Registration Form Project",
      shortDescription: "This project showcases a responsive, mobile-first registration form.",
      fullDescription: `This project demonstrates the creation of a responsive registration form that adapts seamlessly to mobile and desktop layouts. Using a mobile-first approach and media queries, the design incorporates a variety of HTML input types and attributes.`,
      link: "https://draganabegojev.github.io/Project-3/",
      github: "https://github.com/DraganaBegojev/Project-3"
    }
  ];

  const projectList = document.getElementById("project-list");
  const searchBar = document.getElementById("search-bar");
  const modalTitle = document.getElementById("projectModalLabel");
  const modalBody = document.querySelector(".modal-body");

  // Pagination
  const projectsPerPage = 6;
  let currentPage = 1;
  let filteredProjects = projectsData;

  function renderProjects() {
    projectList.innerHTML = "";

    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const projectsToShow = filteredProjects.slice(start, end);

    projectsToShow.forEach(project => {
      const projectHTML = `
        <div class="col project">
          <div class="card h-100">
            <img src="${project.img}" class="card-img-top" alt="${project.alt}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.shortDescription}</p>
            </div>
            <div class="card-footer d-flex flex-wrap justify-content-between">
              <button class="btn btn-link text-body-secondary description-btn flex-grow-1" 
                      data-title="${project.title}" 
                      data-description="${project.fullDescription}" 
                      data-bs-toggle="modal" 
                      data-bs-target="#projectModal">
                <small>Description</small>
              </button>
              ${project.link ? `
                <a href="${project.link}" target="_blank" class="live-btn flex-grow-1 d-flex align-items-center justify-content-center text-decoration-none">
                  <div class="text-body-secondary"><small>Live Site</small></div>
                </a>` : ''
              }
              
              <a href="${project.github}" target="_blank" class="github-btn flex-grow-1 d-flex align-items-center justify-content-center text-decoration-none">
                <div class="text-body-secondary"><small>GitHub</small></div>
              </a>
            </div>
          </div>
        </div>`;
      projectList.insertAdjacentHTML("beforeend", projectHTML);
    });

    updateModalEvents();
    updatePaginationControls();
  }

  function updateModalEvents() {
    document.querySelectorAll('.description-btn').forEach(button => {
      button.addEventListener('click', () => {
        modalTitle.textContent = button.getAttribute('data-title');
        modalBody.textContent = button.getAttribute('data-description');
      });
    });
  }

  function updatePaginationControls() {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    document.getElementById("pageIndicator").textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;
  }

  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProjects();
    }
  });

  document.getElementById("nextPage").addEventListener("click", () => {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderProjects();
    }
  });

  searchBar.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    filteredProjects = projectsData.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderProjects();
  });

  renderProjects(); // Initial load
});
