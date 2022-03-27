


// *** Star wars Character lookup *** //

//***** DECLARATIONS ********//
let h1 = document.querySelector('h1');
let input = document.querySelector('#input');
let button = document.querySelector('button');
let skin = document.getElementById('skin');
let birth = document.getElementById('birth');
let gender = document.getElementById('gender');
let height = document.getElementById('height');
let mass = document.getElementById('mass');




// ******** FUNCTION LOGIC ********* //

const swCharSearch = (value) => {
    axios
        .get(`https://swapi.dev/api/people/?search=${value}`)
        .then((res) => {
            let data = res.data.results[0];
            console.log(data);
            h1.textContent = data.name;
            skin.textContent = data.skin_color;
            birth.textContent = data.birth_year;
            gender.textContent = data.gender;
            height.textContent = data.height;
            mass.textContent = data.mass;
        })
        .catch((e) => {
            console.log("ERROR!", e);
        });
}



// ************ EVENT LISTENER**************//
button.addEventListener('click', (value) => {
    if( input.selectionEnd == 0) {
        alert('please enter a name');
    } else {
        value = input.value;
        swCharSearch(value);
    }
});

