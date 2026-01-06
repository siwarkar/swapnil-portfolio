
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
fetch("notebooks.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("notebook-list");
    list.innerHTML = data.notebooks.map(nb => `
      <a href="${nb.link}" target="_blank" class="notebook-card">
        <h3>${nb.title}</h3>
        <p>${nb.description}</p>
        <span>${nb.tech.join(", ")}</span>
      </a>
    `).join("");
  });