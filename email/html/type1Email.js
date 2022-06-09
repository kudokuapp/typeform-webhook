const englishType1 = (firstName, lastName, email, wa) => {

    const link = `https://kudoku.typeform.com/to/ZWatAGlx#firstname=${firstName}&lastname=${lastName}&email=${email}&wa=${wa}&index=1`

    return 
    (`<div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto;">
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
            First of all, thank you for letting us know who you are!
        </p>

        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
            It is nice to see that you also have been wanting a personal finance app that can solve all of our problem.
        </p>
        
        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
            That's why I started <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Kudoku</strong>. It's so hard to manage my finances using the tools available now😞.
        </p>

        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
            Anyway, you should completed the next form by now. But, just in case you want to finish it later, here's the link for you.
        </p>
        
        <div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; padding: 1em;" align="center">
            <a href="${link}" style="background-color: #2C5EA8; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; color: white; text-decoration: none; font-weight: bold; display: inline-block; cursor: pointer; line-height: 1em; text-align: center; border-radius: 6px; padding: 13px 27px;" rel="nofollow">
                Continue Form
            </a>
        </div>

        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
            Once again, nice to meet you ${firstName}!
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
</div>`)
}

const bahasaType1 = (firstName, lastName, email, wa) => {

    const link = `https://kudoku.typeform.com/to/ZWatAGlx#firstname=${firstName}&lastname=${lastName}&email=${email}&wa=${wa}&index=1`

    return (
        ``
    )
}

module.exports = {englishType1, bahasaType1}