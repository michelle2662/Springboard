function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}


const numberOfOperations = 20;
let vacationEarned = 0;
const successfulMissionDay = 13;
const failedMissionDay = 1;
const attendanceDay = 3;

for ( let i = 0; i < numberOfOperations; i++ ) {
	console.log(`Operation ${i}`)
	try {
		mysteryOperation();
		vacationEarned += successfulMissionDay;
	} catch (error) {
		vacationEarned += failedMissionDay;
		console.log(error)
	} finally {
		vacationEarned += attendanceDay
	}
}

console.log(`You have earned ${vacationEarned} Days`)