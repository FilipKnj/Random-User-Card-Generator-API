const url = `https://random-data-api.com/api/v2/users?response_type=json`;
const randBtn = document.querySelector('#randUser');
const card = document.querySelector('.card');
const colors = ['#A14943','#C29453','#545454','#961B1B','#730707','#6F3F99','#4D2A88','#498C61','#F9D09A'];

const getRandUser = () => {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        card.innerHTML = `
        <img src="${data.avatar}" alt="${data.first_name}">
        <h2 id="name">${data.first_name} ${data.last_name}</h2>
        <p id="title">${data.employment.key_skill}</p>
        <p><i class="fa-solid fa-location-dot"></i><span id="location">${data.address.state}</span></p>
        `
        setColor();
    });
};

const setColor = () => {
    let rand = Math.floor(Math.random() * colors.length) + 1;
    document.querySelector('body').style.background = `${colors[rand]}`;
    document.querySelector('i').style.color = `${colors[rand]}`;
    document.querySelector('img').style.border = `10px solid ${colors[rand]}`;
    console.log(colors[rand])
}

randBtn.addEventListener('click',getRandUser);
window.addEventListener('load',getRandUser);