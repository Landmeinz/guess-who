console.log('Here are all the available people:', people);

$(readyNow)

let usernameList = []



function readyNow() {
    console.log('jq connected');
    displayPictures();
    $(`.image`).on(`click`, guess);
}



function displayPictures() {

    for (let pictures of people) {

        storedPhotos = $(`<div>
        <img class="image" src="https://github.com/${pictures.githubUsername}.png?size=250" alt="Profile image of ${pictures.name}">
        </div>`)

        storedPhotos.data('list', pictures)

        $(`#imageContainer`).append(storedPhotos)

        console.log(storedPhotos.data());

        usernameList.push(storedPhotos);

    }

}
console.log(usernameList);



function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

$(`#displayText`).text(`yes`)

function guess() {
    console.log('clicked on image');
    
    if (people[randomNumber(0, people.length - 1)].name === clickedName) {
        return alert("CORRECT!!")
    } else {
        return alert("womp womp... try again!")
    }
}


