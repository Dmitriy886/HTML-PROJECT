/** Search & Sort */
const riverCardsContainer = document.querySelector(".river-search")
const riverCards = [...document.querySelectorAll(".river-search-card")]

const searchInput = document.querySelector("#search-input")
const sortByLengthBtn = document.querySelector("#sort-by-length")
const sortByCountryBtn = document.querySelector("#sort-by-country")
const sortByExpenseBtn = document.querySelector("#sort-by-expense")

const search = ({ target }) => {
  let cards = riverCards
  let inputText = target.value.toLowerCase()

  let filtered = cards.filter((card) => {
    const title = card
      .querySelector(".river-details-title")
      .innerHTML.toLowerCase()
    if (title.includes(inputText) || inputText === "" || inputText === " ")
      return true
    else return false
  })

  riverCardsContainer.innerHTML = ""
  filtered.forEach((card) => riverCardsContainer.append(card))
  if (riverCardsContainer.innerHTML === "")
    riverCardsContainer.innerHTML = `<p class="nothing-found">Ничего не найдено :(</p>`
}

const sortByLength = () => {
  sortByLengthBtn.classList = "active"
  sortByExpenseBtn.classList = ""
  sortByCountryBtn.classList = ""

  let cards = riverCards

  cards.sort((a, b) => {
    const lengthSelectorA = a.querySelector(".river-details-length").innerHTML
    const lengthA = parseInt(lengthSelectorA.slice(0, -3).replace(" ", ""))

    const lengthSelectorB = b.querySelector(".river-details-length").innerHTML
    const lengthB = parseInt(lengthSelectorB.slice(0, -3).replace(" ", ""))

    return lengthB - lengthA
  })

  cards.forEach((card) => riverCardsContainer.append(card))
}

const sortByCountry = () => {
  sortByLengthBtn.classList = ""
  sortByExpenseBtn.classList = ""
  sortByCountryBtn.classList = "active"

  let cards = riverCards

  cards.sort((a, b) => {
    const countryA = a.querySelector(".river-details-country").innerHTML
    const countryB = b.querySelector(".river-details-country").innerHTML

    return countryB.localeCompare(countryA)
  })

  cards.forEach((card) => riverCardsContainer.append(card))
}

const sortByExpense = () => {
  sortByLengthBtn.classList = ""
  sortByExpenseBtn.classList = "active"
  sortByCountryBtn.classList = ""

  let cards = riverCards

  cards.sort((a, b) => {
    const expenseSelectorA = a.querySelector(".river-details-expense").innerHTML
    const expenseA = parseInt(expenseSelectorA.slice(0, -4).replace(" ", ""))

    const expenseSelectorB = b.querySelector(".river-details-expense").innerHTML
    const expenseB = parseInt(expenseSelectorB.slice(0, -4).replace(" ", ""))

    return expenseB - expenseA
  })

  cards.forEach((card) => riverCardsContainer.append(card))
}

sortByLengthBtn.addEventListener("click", sortByLength)
sortByCountryBtn.addEventListener("click", sortByCountry)
sortByExpenseBtn.addEventListener("click", sortByExpense)
searchInput.addEventListener("input", (event) => search(event))
