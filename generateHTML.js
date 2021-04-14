function generateHTML(data) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body bg-info text-white">
      <h5 class="card-title text-center">${data.name}</h5>
      <p class="card-text text-center">${data.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
      <li class="list-group-item">${data.officeGithubSchool}</li>
    </ul>
    <div class="card-body">
    </div>
  </div>
    `
};

module.exports = generateHTML;
