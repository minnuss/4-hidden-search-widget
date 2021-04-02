const btnSearch = document.querySelector('.hidden-search__content--btn');
const input = document.querySelector('.hidden-search__content--input');
const searchDiv = document.querySelector('.hidden-search__content');

btnSearch.addEventListener('click', () => {
    searchDiv.classList.toggle('active');
    // put input focus automatically
    input.focus();
})