const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = ({ name, location, githubUsername, github, linkedinUsername, linkedin }) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>${name}'s Portfolio</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${name}</h1>
            <p class="lead">I am from ${location}</p>
            <ul class="list-group">
                <li class="list-group-item"> My github username is
                    <a href="${github}">${githubUsername}</a>
                </li>
                <li class="list-group-item">My Linkedin is
                    <a href="${linkedin}">${linkedinUsername}</a>
                </li>
            </ul>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</body>

</html>`
}


inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github url'
    },
    {
        type: 'input',
        name: 'linkedinUsername',
        message: 'What is you linkedin username?'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is you linkedin url?'
    }

])


// const init = () => {
//         promptUser()
//             .then(ans => fs.writeFileSync(`./output/${ans.name}.html`, generateHtml(ans)))
//             .then(() => { console.log('file written!') })
//             .catch(err => console.error(err))
//     }
.then((ans) => {
    console.log(ans);
    fs.writeFile(`./output/${ans.name}.html`, generateHtml(ans), (err) => {
        if (err) { throw err; } else { console.log('file written!'); }
    })
})