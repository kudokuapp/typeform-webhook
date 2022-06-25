const capitalizeFirstLetter = (arg) => {
	return arg.charAt(0).toUpperCase() + arg.slice(1);
};

const toStrLowerCase = (arg) => {
	return arg.toString().toLowerCase();
};

const cleanName = (arg) => {
	return capitalizeFirstLetter(toStrLowerCase(arg));
};

const cleanNum = (arg) => {
	return Number(arg);
};

const cleanPhoneNum = (arg) => {
	let phoneNum = "+" + arg.toString();
	return phoneNum;
};

const cleanGender = (arg) => {
	let variable;

	switch (arg) {
		case "Male":
			variable = "M";
			break;
		case "Pria":
			variable = "M";
			break;
		case "Female":
			variable = "F";
			break;
		case "Wanita":
			variable = "F";
			break;
		case "Other":
			variable = "X";
			break;
		case "Lainnya":
			variable = "X";
			break;
		default:
			variable = "X";
			break;
	}
	return variable;
};

//data cleaning for users_data
const dataCleaning1 = (
	firstNameArg,
	lastNameArg,
	ageArg,
	genderArg,
	emailArg,
	waArg
) => {
	const firstName = cleanName(firstNameArg);
	const lastName = cleanName(lastNameArg);
	const age = cleanNum(ageArg);
	const gender = cleanGender(genderArg);
	const email = toStrLowerCase(emailArg);
	const wa = cleanPhoneNum(waArg);

	return { firstName, lastName, age, gender, email, wa };
};

//data cleaning for users_final
const dataCleaning2 = (
	firstNameArg,
	lastNameArg,
	ageArg,
	genderArg,
	occupationArg,
	emailArg,
	waArg,
	formTokenArg
) => {
	const firstName = cleanName(firstNameArg);
	const lastName = cleanName(lastNameArg);
	const age = cleanNum(ageArg);
	const gender = cleanGender(genderArg);
	const occupation = cleanName(occupationArg);
	const email = toStrLowerCase(emailArg);
	const wa = cleanPhoneNum(waArg);
	const formToken = formTokenArg.toString();

	return { firstName, lastName, age, gender, occupation, email, wa, formToken };
};

module.exports = { dataCleaning1, dataCleaning2 };
