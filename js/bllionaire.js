document.getElementById('menu-button').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  const title = document.getElementById('title');
  if (sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('hidden');
      title.classList.add('hidden');
  } else {
      sidebar.classList.add('hidden');
  }
});