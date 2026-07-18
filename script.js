function book(type) {
  window.location.href = "https://wa.me/966540012913?text=Je%20veux%20réserver%20l'offre%20" + type;
}

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  let message = "Nouvelle réservation AHAD HADJ & OUMRA";
  window.location.href = "https://wa.me/966540012913?text=" + encodeURIComponent(message);
});

const cards = document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let position =
card.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

function toggleMenu(){

document
.getElementById("menu")
.classList.toggle("active");

}

const texts = {

fr:{
title:"Votre Voyage Sacré Commence Ici",
subtitle:"Hajj & Oumra VIP depuis l’Europe"
},


en:{
title:"Your Sacred Journey Starts Here",
subtitle:"VIP Hajj & Umrah from Europe"
},


ar:{
title:"رحلتكم المقدسة تبدأ من هنا",
subtitle:"خدمات حج وعمرة VIP من أوروبا"
}

};



function changeLang(lang){

document
.getElementById("title")
.innerHTML=texts[lang].title;


document
.getElementById("subtitle")
.innerHTML=texts[lang].subtitle;

}

function book(pack){

let message = 
"Salam AHAD HADJ & OUMRA,%0A%0A" +

"Je suis intéressé par : " + pack + "%0A" +

"Pouvez-vous me contacter avec plus d'informations ?";


window.open(
"https://wa.me/+966540012913?text=" + message,
"_blank"
);

}

document.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let country = document.getElementById("country").value;
let pack = document.getElementById("package").value;
let people = document.getElementById("people").value;
let date = document.getElementById("date").value;
let room = document.getElementById("room").value;
let message = document.getElementById("message").value;


let text =
"🕋 *NOUVELLE DEMANDE CLIENT* %0A%0A" +

"👤 Nom : " + name + "%0A" +
"📞 Téléphone : " + phone + "%0A" +
"🌍 Pays : " + country + "%0A%OA" +

"📦 Forfait : " + pack + "%0A" +
"👥 Voyageurs : " + people + "%0A" +
"📅 Date : " + date + "%0A" +
"🛏️ Chambre : " + room + "%0A%0A" +

"💬 Message : " + message;


window.open(
"https://wa.me/+966540012913?text=" + text,
"_blank"
);

});

const input = document.querySelector("#phone");

window.intlTelInput(input, {

initialCountry: "auto",

geoIpLookup: function(callback) {

fetch("https://ipapi.co/json")
.then(res => res.json())
.then(data => callback(data.country_code))
.catch(() => callback("FR"));

},

utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18/build/js/utils.js"

});

preferredCountries: ["fr", "sa", "dz", "tn", "ae"]