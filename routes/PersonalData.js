const express = require("express");
const router = express.Router();

const verifySignature = require("../api/components/verifysignature");
const { dbQueryUsersData, dbQueryIfUsersExists } = require("../api/database");
const { dataCleaning1 } = require("../api/components/datacleaning");
const sendMail = require("../api/gmail");

router.get("/", (req, res) => {
	res.send("it's live!");
});

router.post("/", async (req, res) => {
	console.log("~> webhook received");

	//Security check
	const signature = req.headers["typeform-signature"];
	const isValid = verifySignature(signature, req.body.toString());
	if (!isValid) {
		throw new Error("Webhook signature is not valid");
	}

	res.sendStatus(200);

	const { event_type, form_response } = JSON.parse(req.body);

	//Filter response events only
	if (event_type === "form_response") {
		const waUnclean = form_response.hidden.wa.trim();
		const { firstName, lastName, age, gender, email, wa } = dataCleaning1(
			form_response.answers[0].text,
			form_response.answers[1].text,
			form_response.answers[2].number,
			form_response.answers[3].choice.label,
			form_response.answers[4].email,
			waUnclean
		);
		const genderUnclean = form_response.answers[3].choice.label;
		const form_id = form_response.form_id;

		const form_lang_en = "PZR271ql";
		const form_lang_id = "Aq7EqLjd";

		dbQueryIfUsersExists(email)
			.then(
				(data) => {
					let ID = data.id;

					if (form_id === form_lang_en) {
						sendMail(
							3,
							"en",
							email,
							firstName,
							lastName,
							age,
							genderUnclean,
							waUnclean,
							ID
						)
							.then((messageId) =>
								console.log("Message sent successfully:", messageId)
							)
							.catch((err) => console.error(err));
					} else if (form_id === form_lang_id) {
						sendMail(
							3,
							"id",
							email,
							firstName,
							lastName,
							age,
							genderUnclean,
							waUnclean,
							ID
						)
							.then((messageId) =>
								console.log("Message sent successfully:", messageId)
							)
							.catch((err) => console.error(err));
					}
				},

				dbQueryUsersData(firstName, lastName, age, gender, email, wa)
					.then(() => {
						if (form_id === form_lang_en) {
							sendMail(
								1,
								"en",
								email,
								firstName,
								lastName,
								age,
								genderUnclean,
								waUnclean
							)
								.then((messageId) =>
									console.log("Message sent successfully:", messageId)
								)
								.catch((err) => console.error(err));
						} else if (form_id === form_lang_id) {
							sendMail(
								1,
								"id",
								email,
								firstName,
								lastName,
								age,
								genderUnclean,
								waUnclean
							)
								.then((messageId) =>
									console.log("Message sent successfully:", messageId)
								)
								.catch((err) => console.error(err));
						}
					})
					.catch((err) => console.error(err))
			)
			.catch((err) => console.error(err));
	}
});

module.exports = router;
