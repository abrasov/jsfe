const filters = document.querySelectorAll('.settings input');
const resetBtn = document.querySelector('.btn-reset');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
function resetFilters() {
  filters.forEach((filter) => {
    const suffix = filter.dataset.sizing || '';
    filter.value = filter.defaultValue;
    document.documentElement.style.setProperty(`--${filter.name}`, filter.value + suffix);
  });
}

filters.forEach((filter) => filter.addEventListener('change', handleUpdate));
filters.forEach((filter) => filter.addEventListener('mousemove', handleUpdate));

resetBtn.addEventListener('click', (resetFilters));
console.log(`
Общая оценка: 30
Повторить исходный проект +10
Обязательный дополнительный фукционал +10
Дополнительный фукционал:
Добавлена Кнопка сброса фильтров +10
`)