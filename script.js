function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultElement = document.getElementById('result');
    const birthdayMessageElement = document.getElementById('birthdayMessage');
    const birthdayTimerElement = document.getElementById('birthdayTimer');

    if (dobInput.value) {
        const dob = new Date(dobInput.value);
        const now = new Date();
        let age = now.getFullYear() - dob.getFullYear();

        // Check if the birthday has occurred this year
        if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
            age--;
        }

        // Calculate the next birthday
        const nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
        if (nextBirthday < now) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }
        const daysUntilNextBirthday = Math.floor((nextBirthday - now) / (1000 * 60 * 60 * 24));

        if (now.getDate() === dob.getDate() && now.getMonth() === dob.getMonth()) {
            birthdayMessageElement.textContent = 'Happy Birthday!';
            birthdayTimerElement.textContent = '';
        } else if (daysUntilNextBirthday === 1) {
            const nextBirthdayHours = Math.floor((nextBirthday - now) / (1000 * 60 * 60));
            birthdayMessageElement.textContent = '';
            if (daysUntilNextBirthday === 365) {
                birthdayTimerElement.textContent = '';
            } else {
                birthdayTimerElement.textContent = `Your birthday is tomorrow, in ${nextBirthdayHours} hours.`;
            }
        } else {
            birthdayMessageElement.textContent = '';
            birthdayTimerElement.textContent = '';
        }

        if (daysUntilNextBirthday !== 365) {
            resultElement.textContent = `Your age is ${age} years old. Your next birthday is in ${daysUntilNextBirthday} days.`;
        } else {
            resultElement.textContent = `Your age is ${age} years old.`;
        }
    } else {
        resultElement.textContent = 'Please enter a valid date of birth.';
        birthdayMessageElement.textContent = '';
        birthdayTimerElement.textContent = '';
    }
}
