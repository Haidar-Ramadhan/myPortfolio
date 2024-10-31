const projects = [
    {
        id: 2,
        image: 'photo/1.jpg',
        title: 'AES Encryption',
        links: [
            { 
                title: 'Structure', 
                url: 'https://drive.google.com/file/d/1zpxpnblAZJF829_RJIBOtuYb8LSGSBHS/view?usp=drive_link' 
            }
        ]
    },
    {
        id: 1,
        image: 'photo/1.jpg',
        title: 'Caesar Cipher',
        links: [
            { 
                title: 'Docker Image', 
                url: 'https://hub.docker.com/r/hairam/caesarcipher' 
            },
            { 
                title: 'GitHub Repo', 
                url: 'https://github.com/Haidar-Ramadhan/Caesar-Cipher' 
            }
        ]
    }  
    // Add more projects as needed
];

// Function to render projects
function renderProjects() {
    const projectSection = document.getElementById('project-section');

    projects.forEach(project => {
        // Create project container
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'project-image-container';

        // Create image element
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.className = 'project-image';

        // Create overlay text
        const overlayText = document.createElement('h1');
        overlayText.className = 'overlay-text';
        overlayText.textContent = project.title;

        // Append image and overlay text to the image container
        imageContainer.appendChild(img);
        imageContainer.appendChild(overlayText);
        projectDiv.appendChild(imageContainer);

        // Create links section
        const linksDiv = document.createElement('div');
        linksDiv.className = 'links';

        // Create toggle button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-btn';
        toggleButton.textContent = 'LINKS';
        
        // Create hidden links div
        const hiddenLinksDiv = document.createElement('div');
        hiddenLinksDiv.className = 'hidden-links';
        hiddenLinksDiv.style.maxHeight = '0'; // Initially hidden
        hiddenLinksDiv.style.overflow = 'hidden'; // To hide overflowing content
        hiddenLinksDiv.style.transition = 'max-height 0.2s ease-out'; // Smooth transition

        // Add links to hidden links div
        project.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title; // Use the link title
            anchor.target = '_blank'; // Open link in a new tab
            hiddenLinksDiv.appendChild(anchor);
        });

        // Append button and hidden links div to links div
        linksDiv.appendChild(toggleButton);
        linksDiv.appendChild(hiddenLinksDiv);
        projectDiv.appendChild(linksDiv);
        projectSection.appendChild(projectDiv);

        // Toggle link visibility on button click
        toggleButton.addEventListener('click', function() {
            // Check the maxHeight and toggle
            if (hiddenLinksDiv.style.maxHeight === '0px' || hiddenLinksDiv.style.maxHeight === '') {
                hiddenLinksDiv.style.maxHeight = hiddenLinksDiv.scrollHeight + 'px';
            } else {
                hiddenLinksDiv.style.maxHeight = '0px';
            }
        });
    });
}

// Call renderProjects to populate the project section
renderProjects();
