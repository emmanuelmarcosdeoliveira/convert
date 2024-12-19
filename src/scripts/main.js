// Criando as variáveis de valores das moedas cotação de moedas
const USD = 6.18
const EUR = 6.43
const GBP = 7.78

// Conectando com os elementos do HTML
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando o input para receber somente números
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Manipulando o elemento select através do formulário
form.onsubmit = (event) => {
  event.preventDefault()
  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
  }
}

// Função que ira formatar e exibir os valores no footer
function convertCurrency(amount, price, symbol) {
  try {
    // Atualizando o valor da moeda selecionada e usando uma função para modificar.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `
    // Calcula o total
    let total = amount * price
    // Abaixo estamos verificando se o total é um número
    if (isNaN(total)) {
      return alert('Digite o valor corretamente para converter')
    }
    total = formatCurrencyBRL(total).replace('R$', '')
    // Exibe o total
    result.textContent = ` ${total} Reais`
    // Exibindo o valor da moeda selecionada.

    footer.classList.add('show-result')
  } catch (error) {
    footer.classList.remove('show-result')
  }
}
// Criando uma função para formatar a exibição da cotação selecionada.
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
