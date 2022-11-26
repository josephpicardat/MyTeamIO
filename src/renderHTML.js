// Builds team
const teamBuilder = team => {
  // builds manager div
  const managerBuilder = manager => {
    return `
        <div class="card employee"> <!-- bootstrap card + custom employee class to set styling -->
            <div class="card-header"> <!-- bootstrap card-header styling -->
                <h2 class="card-title d-flex justify-content-center">${manager.getName()}</h2> <!-- bostrap card-title with flex box centering content -->
                <h3 class="card-title d-flex justify-content-center">${manager.getRole()}</h3>
            </div>
            <div class="card-body body"> <!-- bootstrap card-body stlying & custom body styling with flex-box -->
                <ul class="list-group"> <!-- ul bootstrap styling -->
                    <li class="list-group-item listItems">id: ${manager.getId()}</li> <!-- Boostrap list-group-item stlying plus listItems stlying class that sets text color and no text-decoration -->
                    <li class="list-group-item listItems">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item listItems">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
  };

  const engineerBuilder = engineer => {
    return `
        <div class="card employee">
            <div class="card-header">
                <h2 class="card-title d-flex justify-content-center">${engineer.getName()}</h2>
                <h3 class="card-title d-flex justify-content-center">${engineer.getRole()}</h3>
            </div>
            <div class="card-body body">
                <ul class="list-group">
                    <li class="list-group-item listItems">id: ${engineer.getId()}</li>
                    <li class="list-group-item listItems">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item listItems">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
    `;
  };

  const internBuilder = intern => {
    return `
        <div class="card employee">
            <div class="card-header">
                <h2 class="card-title d-flex justify-content-center">${intern.getName()}</h2>
                <h3 class="card-title d-flex justify-content-center">${intern.getRole()}</h3>
            </div>
            <div class="card-body body">
                <ul class="list-group">
                    <li class="list-group-item listItems">id: ${intern.getId()}</li>
                    <li class="list-group-item listItems">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item listItems">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `;
  };

  const generateHTML = [];

  const generateManger = team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerBuilder(manager));
  const generateEngineer = team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerBuilder(engineer));
  const generateIntern = team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => internBuilder(intern));

  generateHTML.push(generateManger, generateEngineer, generateIntern);

  return generateHTML.join('');
};

module.exports = team => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style sheet/style.css">
</head>

<body>
    <div class="container-fluid"> <!-- container-fluid makes the the width equal to view width -->
        <div class="row"> <!-- Sets to row -->
            <div class="col-12 jumbotron"> <!-- sets column & jumbotron -->
                <h1 class="text-center">My Team</h1> <!-- Centers text -->
            </div>
        </div>
    </div>

    <div class="container "> <!-- container is responsive & fixed-width -->
        <div class="row">
            <div class="cardArea col-12 d-flex justify-content-center"> <!-- Centers content and create a flexbox container -->
                ${teamBuilder(team)}
            </div>
        </div>
    </div>
</body>
</html>
`;
};
