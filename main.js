const name = "Artur";
const surname = "Bartkowicz";
const age = 29;

console.log(`Mam na imę ${name + " " + surname} i mam ${age} lat.`);

const empty = document.querySelector('.innerHTML');
empty.innerHTML = 'Uźycie innerHTML na potrzeby modyfikacji DOM, praktyczne uźycie JS modyfikujązego DOM';
empty.style.color = 'blue';