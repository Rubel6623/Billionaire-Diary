document.getElementById('menu-button').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  const title = document.getElementById('title');
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
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>`;
    personContainer.appendChild(div);
  })
}