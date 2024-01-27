document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { title: 'Project 1', description: 'Short description of Project 1.', image: 'project1.jpg' },
        { title: 'Project 2', description: 'Short description of Project 2.', image: 'project2.jpg' },
        // Add more project data as needed
    ];

    const projectContainer = document.getElementById('projectContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const projectsPerPage = 3; // Number of projects to show initially
    let projectsDisplayed = 0;

    // Function to create a project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectContainer.appendChild(card);
    }

    // Function to display initial projects
    function displayInitialProjects() {
        for (let i = 0; i < projectsPerPage; i++) {
            createProjectCard(projects[i]);
            projectsDisplayed++;
        }
    }

    // Function to display additional projects on 'Load More' click
    function displayMoreProjects() {
        const remainingProjects = projects.length - projectsDisplayed;
        const projectsToDisplay = Math.min(projectsPerPage, remainingProjects);

        for (let i = projectsDisplayed; i < projectsDisplayed + projectsToDisplay; i++) {
            createProjectCard(projects[i]);
            projectsDisplayed++;
        }

        if (projectsDisplayed === projects.length) {
            loadMoreBtn.style.display = 'none'; // Hide the button when all projects are displayed
        }
    }

    // Event listener for 'Load More' button
    loadMoreBtn.addEventListener('click', displayMoreProjects);

    // Initial display of projects
    displayInitialProjects();
});
