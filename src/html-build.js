const createTeam = team => {

//html for managers
    const createManager = manager => {
        return `
        <article class="card column m-3">
            <div class="card-content">
                <div class="media">
                    <div class="media-left pr-1 pl-2 has-background-info">
                        <i class="has-text-light p-4 fas fa-2x fa-user-tie"></i>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">${manager.getName()}</p>
                        <p class="subtitle has-text-info mb-0 is-6">MANAGER</p>
                        <p class="subtitle is-6"><i class="far fa-id-badge"></i>  <small>${manager.getId()}</small></p>
                    </div>
                    <div class="media-right">
                        <button class="delete tag is-info"></button>
                    </div>
                </div>
                <div class="content">
                    <p class="icon-text">
                        <span class="icon has-text-info">
                            <i class="fas fa-phone"></i>
                        </span>
                        <span>${manager.getOfficeNumber()}</span>
                    </p>
                    <a class="icon-text" href="mailto:${manager.getEmail()}">
                        <span class="icon has-text-info">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span>${manager.getEmail()}</span>
                    </a> 
                </div>
            </div>
        </article>
        `;
    };

    //html for engineers
    const createEngineer = engineer => {
        return `    
        <article class="card column m-3">
            <div class="card-content">
                <div class="media">
                    <div class="media-left has-background-success">
                        <i class="has-text-light p-4 fas fa-2x fa-user-cog"></i>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">${engineer.getName()}</p>
                        <p class="subtitle has-text-success mb-0 is-6">ENGINEER</p>
                        <p class="subtitle is-6"><i class="far fa-id-badge"></i>  <small>${engineer.getId()}</small></p>
                    </div>
                    <div class="media-right">
                        <button class="delete tag is-success"></button>
                    </div>
                </div>
                <div class="content">
                    <a class="icon-text" href="mailto:${engineer.getEmail()}">
                        <span class="icon has-text-success">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span>${engineer.getEmail()}</span>
                    </a>
                    <a class="icon-text" href="https://github.com/${engineer.getGithub()}">
                        <span class="icon has-text-success">
                            <i class="fab fa-github"></i>
                        </span>
                        <span>${engineer.getGithub()}</span>
                    </a> 
                </div>
            </div>
        </article>
        `;
    };

    //html for interns
    const createIntern = intern => {
        return `    
        <article class="card column m-3">
            <div class="card-content">
                <div class="media">
                    <div class="media-left pr-1 pl-2 has-background-primary">
                        <i class="has-text-light p-4 fas fa-2x fa-user-graduate"></i>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">${intern.getName()}</p>
                        <p class="subtitle has-text-primary mb-0 is-6">INTERN</p>
                        <p class="subtitle is-6"><i class="far fa-id-badge"></i>  <small>${intern.getId()}</small></p>
                    </div>
                    <div class="media-right">
                        <button class="delete tag is-primary"></button>
                    </div>
                </div>
                <div class="content">
                    <a class="icon-text" href="mailto:${intern.getEmail()}">
                        <span class="icon has-text-primary">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span>${intern.getEmail()}</span>
                    </a>
                    <p class="icon-text">
                        <span class="icon has-text-primary">
                            <i class="fas fa-school"></i>
                        </span>
                        <span>${intern.getSchool()}</span>
                    </p>
                </div>
            </div>
        </article>
        `;
    };

    const html = [];
    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join('')
    );
    console.log(html)
        return html.join('');
};
//HTML page funtion
module.exports = team => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <title>My Team</title>
</head>
<body>
    <header class="hero is-link">
        <div class="hero-body">
            <p class="title">Meet the Team</p>
        </div>
    </header>
    <main id="team" class="columns">

    ${createTeam(team)}        

    </main>
</body>
</html>
`};