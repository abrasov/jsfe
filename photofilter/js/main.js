const filters = document.querySelectorAll('.settings input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

filters.forEach((filter) => filter.addEventListener('change', handleUpdate));
filters.forEach((filter) => filter.addEventListener('mousemove', handleUpdate));
