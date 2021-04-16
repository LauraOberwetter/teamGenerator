function generateHTML(data) {
  return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Team Generator</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src='../index.js'></script>
    <script src='../generateHTML.js'></script>
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-warning">
        <div class="container">
          <h1 class="display-4 text-center">Team Generator</h1>
        </div>
      </div>
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
  </body>
</html>
    `
};

console.log(data);
module.exports = generateHTML;
