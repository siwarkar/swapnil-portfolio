
fetch('data/projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('project-list');
    data.forEach(project => {
      const div = document.createElement('div');
      div.className = 'project-card';
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.impact}</p>
        <p><strong>Tech:</strong> ${project.tech}</p>
        <a href="${project.github}" target="_blank">GitHub</a>
      `;
      container.appendChild(div);
    });
  });
