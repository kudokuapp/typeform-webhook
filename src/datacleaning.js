const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//data cleaning
const dataCleaning = (firstNameArg, lastNameArg, emailArg, waArg) => {
    const firstName = capitalizeFirstLetter(firstNameArg.toString())
    const lastName = capitalizeFirstLetter(lastNameArg.toString())
    const email = emailArg.toString().toLowerCase()
    const wa = '+' + waArg.toString().trim()

    return {firstName, lastName, email, wa}
}

module.exports = dataCleaning