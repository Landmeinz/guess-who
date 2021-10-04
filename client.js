console.log('Here are all the available people:', people);

$(readyNow)

let taco = []

function readyNow() {
    console.log('jq connected');
    pictures();
    $(`.image`).on(`click`, guess);
}

function pictures() {


    for (let pictures of people) {

        storedPhotos = $(`<div>
        <img class="image" src="https://github.com/${pictures.githubUsername}.png?size=250" alt="Profile image of ${pictures.name}">
        </div>`)

        storedPhotos.data('taco', pictures)
        $(`#imageContainer`).append(storedPhotos)
        console.log(storedPhotos.data());
        taco.push(storedPhotos);

    }

}

console.log(taco);




function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function guess() {
    console.log('GUESS');
    if (people[randomNumber(0, people.length - 1)] === $(this)) {
        return alert("CORRECT!!")
    } else {
        return alert("womp womp... try again!")
    }
}