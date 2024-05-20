
const convertButton = document.querySelector(".convert-button")
const currencySelectConvert = document.querySelector(".currency-select-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-current")


    if (currencySelectConvert.value == "dolar") { // Se o select estiver no dolar entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "euro") {// Se o select estiver no euro entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "libra") {// Se o select estiver no libra entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "bitcoin") {// Se o select estiver no bitcoin entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    }

    if (currencySelectConvert.value == "real") {// Se o select estiver no real entre aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


}

function toConvertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const euroToday = 6.3

    if (currencySelectConverted.value == "dolar") { // Se o select estiver no dolar entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectConverted.value == "euro") {// Se o select estiver no euro entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelectConverted.value == "libra") {// Se o select estiver no libra entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectConverted.value == "bitcoin") {// Se o select estiver no bitcoin entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectConverted.value == "real") {// Se o select estiver no real entre aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarToday)
    }


}

function changeCurrencyConvert() {
    const currenceConvert = document.getElementById("currency-convert")
    const currencyConvertImg = document.querySelector(".currency-convert-img")


    if (currencySelectConvert.value == "real") { // Se o select estiver no dolar entre aqui
        currenceConvert.innerHTML = "Real brasileiro"
        currencyConvertImg.src = "./assets/real.png"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarToday)

    }


    if (currencySelectConvert.value == "dolar") { // Se o select estiver no dolar entre aqui
        currenceConvert.innerHTML = "Dólar americano"
        currencyConvertImg.src = "./assets/dolar-americano.png"
    }

    if (currencySelectConvert.value == "euro") { // Se o select estiver no euro entre aqui
        currenceConvert.innerHTML = "Euro"
        currencyConvertImg.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "libra") { // Se o select estiver no libra entre aqui
        currenceConvert.innerHTML = "Libra esterlina"
        currencyConvertImg.src = "./assets/libra.png"
    }

    if (currencySelectConvert.value == "bitcoin") { // Se o select estiver no bitcoin entre aqui
        currenceConvert.innerHTML = "Bitcoin"
        currencyConvertImg.src = "./assets/bitcoin.png"
    }

    convertValues()
    toConvertValues()

}

function changeCurrencyConverted() {
    const currencyExchange = document.getElementById("currency-exchange")
    const currencyExchangeImg = document.querySelector(".currency-exchange-img")

    if (currencySelectConverted.value == "real") { // Se o select estiver no dolar entre aqui
        currencyExchange.innerHTML = "Real brasileiro"
        currencyExchangeImg.src = "./assets/real.png"
    }


    if (currencySelectConverted.value == "dolar") { // Se o select estiver no dolar entre aqui
        currencyExchange.innerHTML = "Dólar americano"
        currencyExchangeImg.src = "./assets/dolar-americano.png"
    }

    if (currencySelectConverted.value == "euro") { // Se o select estiver no euro entre aqui
        currencyExchange.innerHTML = "Euro"
        currencyExchangeImg.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "libra") { // Se o select estiver no libra entre aqui
        currencyExchange.innerHTML = "Libra esterlina"
        currencyExchangeImg.src = "./assets/libra.png"
    }

    if (currencySelectConverted.value == "bitcoin") { // Se o select estiver no bitcoin entre aqui
        currencyExchange.innerHTML = "Bitcoin"
        currencyExchangeImg.src = "./assets/bitcoin.png"
    }

    convertValues()
    toConvertValues()

}


currencySelectConvert.addEventListener("change", changeCurrencyConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)
convertButton.addEventListener("click", toConvertValues)


