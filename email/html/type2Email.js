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

const englishType2 = (firstName, ID) => {

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
                Thank you so much for joining <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Kudoku</strong> waiting list!<br>
                📣 You're officially a Kudos No. ${ID} out of ${IDVERSION}! 🥳 🎉
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                If you've got friends or colleagues who would also like Kudoku, we're super happy if you spread the word.
            </p>
            
            
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                We're also building a strong community of our users with <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">WhatsApp group</strong>. You can join it <a href="${WALINK}" style="background-color: transparent; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: #4183c4; text-decoration: none;" rel="nofollow">here</a>.
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Kudoku will enter its Alpha version. We're rolling it out as quickly as possible. You will get in soon!
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                I am wondering tho: what made you sign up? Would love to learn how to make Kudoku amazing for you. Feel free to reply this email and talk with me :)
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Hope you have a sunny day Kudos 🌞!
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

const bahasaType2 = (firstName, ID) => {

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
                Ketemu lagi kita!
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Terima kasih banget udah ikut <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Kudoku</strong> waiting list!<br>
                📣 You're officially a Kudos No. ${ID} out of ${IDVERSION}! 🥳 🎉
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Kalo lo punya temen/siapapun yang kira-kira suka banget sama Kudoku, boleh tolong kasih tau dia ya hehe.
            </p>
            
            
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Oiya, kita juga lagi bangun community bareng semua user Kudoku pake <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">WhatsApp group</strong> nih. Lo bisa join <a href="${WALINK}" style="background-color: transparent; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: #4183c4; text-decoration: none;" rel="nofollow">disini</a>.
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Aplikasi Kudoku bentar lagi masuk versi Alpha-nya. Tim Kudoku lagi pada ngopi semangat buat aplikasinya. Lo bakal segera masuk kok tenang aja!
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Tapi gua penasaran: apa yang buat lo daftar? Gua pengen tau buat bikin Kudoku tambah mantap banget. Feel free to reply this email and talk with me :)
            </p>
    
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
                Hope you have a sunny day Kudos 🌞!
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

module.exports = {englishType2, bahasaType2}