document.getElementById('menu-button').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  const title = document.getElementById('title');
  if (sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('hidden');
  } else {
      sidebar.classList.add('hidden');
  }
});

const loadPerson=async()=>{
  try{
    const res=await fetch('https://forbes400.onrender.com/api/forbes400?limit=10');
  const data=await res.json();
  displayPerson(data);
  }
  catch(err){
    console.log(err);
  }
}

document.getElementById('all-person').addEventListener('click', function(){
  loadPerson();
})

const displayPerson=(person)=>{
  console.log(person);
  const personContainer=document.getElementById('person-container');
  personContainer.innerHTML='';
  person.forEach(person=>{
    console.log(person);
    const div=document.createElement('div');
    div.classList.add('person');
    div.innerHTML=``
  })
}