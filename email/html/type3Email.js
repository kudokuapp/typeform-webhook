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
        `<div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;" align="center">
            <a href="https://kudoku.id" style="background-color: transparent; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: #4183c4; text-decoration: none;" rel="nofollow">
                <img alt="Kudoku Logo" src="https://drive.google.com/uc?id=1pJH21GQufDoJu88E4TfrPu5GyjAh3X-l" style="border: none; border-style: none; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; width: 200px;">
            </a>
        </div>
        
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; border-radius: 4px; font-size: 1rem; line-height: 1.5; position: relative; margin: 1rem 0em; padding: 1.5em; border: 1px solid #c0c0c0;">
            
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Heyy ${firstName}👋🏼,
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                It's me again!
            </p>

            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
               Just a reminder that you <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">have already submitted</strong> our form and are 
               
               <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">already in the waiting list</strong>!
            </p>

            <h1 style="font-size: 1.71428571rem; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.28571429em; margin: -0.14285714em 0 0.83em; padding: 0;" align="center">
                📣 You're already a Kudos No. ${ID} out of ${IDVERSION}! 🥳 🎉
            </h1>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                If you want to help Kudoku, please spread the word about us to your friends/colleagues.
            </p>
            
            
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Oh, have you join our <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">WhatsApp group</strong>? If not, you can join by clicking the link <a href="${WALINK}" style="background-color: transparent; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: #4183c4; text-decoration: none;" rel="nofollow">here</a>.
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                We're gathering every bits of our resources to rolling the app out as quickly as possible. You will get in soon! I promise!😎
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                PS: You know you can always reply this email and talk to me right? :)
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Have a lovely day Kudos 😁!
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Furqon,<br>
                Founder of Kudoku
            </p>
        </div>
        
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;" align="center">
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">PT. Kudoku Finansial Indonesia<br style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">
                Jakarta, Indonesia
            </p>
        </div>
    </div>`
    )
}

const bahasaType3 = (firstName, ID) => {

    const IDVERSION = checkIDVERSION(ID)

    const WALINK = `https://chat.whatsapp.com/DI3Bpk9Lsu3B1u4C95oRAQ`

    return (
        `<div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;" align="center">
            <a href="https://kudoku.id" style="background-color: transparent; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: #4183c4; text-decoration: none;" rel="nofollow">
                <img alt="Kudoku Logo" src="https://drive.google.com/uc?id=1pJH21GQufDoJu88E4TfrPu5GyjAh3X-l" style="border: none; border-style: none; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; width: 200px;">
            </a>
        </div>
        
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; border-radius: 4px; font-size: 1rem; line-height: 1.5; position: relative; margin: 1rem 0em; padding: 1.5em; border: 1px solid #c0c0c0;">
            
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Heyy ${firstName}👋🏼,
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Ada gua lagi nih!
            </p>

            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
               Gua cuman mau ngingetin aja kalo lo <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">udah submit</strong> form kita dan lo 
               
               <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">udah terdaftar di waiting list</strong> Kudoku!
            </p>

            <h1 style="font-size: 1.71428571rem; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.28571429em; margin: -0.14285714em 0 0.83em; padding: 0;" align="center">
                📣 You're already a Kudos No. ${ID} out of ${IDVERSION}! 🥳 🎉
            </h1>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Kalo lo mau bantuin Kudoku, please spread the word about us to your friends/colleagues.
            </p>
            
            
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Oiya, lo udah join <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">WhatsApp group</strong> Kudoku? Kalo belom, lo bisa join dengan klik link <a href="${WALINK}" style="background-color: transparent; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: #4183c4; text-decoration: none;" rel="nofollow">ini</a>.
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Kudoku lagi kerja setengah mati untuk ngewujudin app kita secepat mungkin. You will get in soon! I promise!😎
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                PS: You know you can always reply this email and talk to me right? :)
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Have a lovely day Kudos 😁!
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Furqon,<br>
                Founder of Kudoku
            </p>
        </div>
        
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;" align="center">
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">PT. Kudoku Finansial Indonesia<br style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">
                Jakarta, Indonesia
            </p>
        </div>
    </div>`
    )
}

module.exports = {englishType3, bahasaType3}