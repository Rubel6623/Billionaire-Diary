document.getElementById('menu-button').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
});

const loadPerson = async () => {
  try {
    const res = await fetch('https://forbes400.onrender.com/api/forbes400?limit=10');
    const data = await res.json();
    displayPerson(data);
    calculateWealth(data);
  }
  catch (err) {
    console.log(err);
  }
}

document.getElementById('all-person').addEventListener('click', function () {
  loadPerson();
  const tableContent=document.getElementById('table');
  tableContent.classList.add('hidden');
})

const displayPerson = (person) => {
  console.log(person);
  const personContainer = document.getElementById('person-container');
  personContainer.innerHTML = '';
  person.forEach(person => {
    console.log(person);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `
    <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img class="h-full w-full img-fluid" src="${person.squareImage}" alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${person.personName}</h2>
        <p>Rank : ${person.rank}</p>
        <p>Source : ${person.source}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>`;
    personContainer.appendChild(div);
  })
}

document.getElementById('calculate-wealth').addEventListener('click', function () {
  console.log('clicked');
  loadPerson();
  const personContainer=document.getElementById('person-container');
  personContainer.classList.add('hidden');
})

const calculateWealth=(person)=>{
  console.log(person);
}