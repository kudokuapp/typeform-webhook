const checkIDVERSION = (ID) => {
    let IDVERSION

    if (ID < 100) {
        IDVERSION = 100
    }
    
    else if (ID < 1000 && ID >= 100) {
        IDVERSION = 1000
    }
    
    else if (ID < 10000 && ID >= 1000) {
        IDVERSION = 10000
    }
    
    else if (ID < 100000 && ID >= 10000) {
        IDVERSION = 100000
    }
    
    else {
        IDVERSION = 1000000
    }

    return IDVERSION
}

const englishType3 = (firstName, ID) => {

    const IDVERSION = checkIDVERSION(ID)

    const WALINK = `https://chat.whatsapp.com/DI3Bpk9Lsu3B1u4C95oRAQ`

    return (
        `This is email type 3 ${ID} out of ${IDVERSION}`
    )
}

const bahasaType3 = (firstName, ID) => {

    const IDVERSION = checkIDVERSION(ID)

    const WALINK = `https://chat.whatsapp.com/DI3Bpk9Lsu3B1u4C95oRAQ`

    return (
        `This is email type 3 ${ID} out of ${IDVERSION}`
    )
}

module.exports = {englishType3, bahasaType3}