# Email
This folder only used for return a `string` that has been loaded with `html`

## checkid.ts
This is a function that checks what the template for
```
You are a Kudos no. {ID} out of {IDVERSION}
```
Pass in the `ID` and get the `IDVERSION`

# type1.ts
This is type 1 email.
<div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto;">
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
            It is nice to see that you also have been wanting a personal finance app that can solve all of our finance problems.
        </p>
        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
            That's why I started <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Kudoku</strong>. It's so hard to manage my finances using the tools available now😞.
        </p>
        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">
            Anyway, you should completed the next form by now. But, just in case you want to finish it later, here's the link for you:
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
            <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">PT. Kudoku Finansial Indonesia<br style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Jakarta, Indonesia
            </p>
        </div>
</div>


# type2.ts
This is type 2 email.
<div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto;">
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
            Thank you so much for joining <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Kudoku</strong> waiting list!
        </p>
        <h1 style="font-size: 1.71428571rem; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.28571429em; margin: -0.14285714em 0 0.83em; padding: 0;" align="center">
            📣 You're officially a Kudos No. ${ID} out of ${IDVERSION}! 🥳 🎉
        </h1>
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
        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">PT. Kudoku Finansial Indonesia<br style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Jakarta, Indonesia
        </p>
    </div>
</div>

# type3.ts
This is type 3 email.
<div style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; max-width: 700px; margin: 0 auto;">
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
            Just a reminder that you <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">have already submitted</strong> our form and are <strong style="font-weight: bolder; box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">already in the waiting list</strong>!
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
        <p style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif; line-height: 1.4285em; font-size: 1rem; color: rgba(0,0,0,0.87); margin: 0 0 1em;">PT. Kudoku Finansial Indonesia<br style="box-sizing: inherit; font-family: Avenir, Helvetica, Arial, sans-serif;">Jakarta, Indonesia
        </p>
    </div>
</div>