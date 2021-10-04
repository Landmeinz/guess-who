console.log('Here are all the available people:', people);

$(readyNow)

function readyNow(){
    console.log('jq connected');
    pictures();
}


function pictures() {

    for (let pictures of people) {
    $(`#imageContainer`).append(`<div >
    <img src="https://github.com/${pictures.githubUsername}.png?size=250" alt="Profile image of ${pictures.name}">
    </div>`)
    }
}