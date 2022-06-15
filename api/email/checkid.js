const checkid = (ID) => {
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

module.exports = checkid