function renderManager(manager) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2">${manager.getRole()}</h6>
        </div>
  
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.getOffice}</li>
        </ul>
    </div>`;
}
function renderEngineer(engineers) {
    return `engineer`;
}
function renderInterns(interns) {
    return `intern`;
}

function generateTeam(teamMembers) {
    return `
    ${renderManager(teamMembers.manager)}
    ${renderEngineer(teamMembers.engineers)}
    ${renderInterns(teamMembers.interns)}`;
}

function render(teamMembers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <title>Team Generater</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Team Setup</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(teamMembers)}
                </div>
            </div>
        </div>
        
    </body>
    </html>`
};

module.exports = render;