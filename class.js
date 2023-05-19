class Instructor {
    name;
    designation = 'Web Development Course Instructor'
    team = 'Web Development Team'
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    startSupportSession(time) {
        console.log(`Support session starts at ${time}`)
    }

    createQuiz(module) {
        console.log(`${module} quiz has been created!`)
    }

    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`)
    }
}

const Ansary = new Instructor();
console.log(Ansary)
Ansary.startSupportSession('9:30 AM')
Ansary.createQuiz('Javascript')