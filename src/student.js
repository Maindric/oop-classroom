class Student {
    constructor(name="NO_NAME", skillLevel=-1)
    {
        this.name = name;
        this.skillLevel = skillLevel;
        this.assignments = [];
    }

    study()
    {
        this.skillLevel++;
        this.skillLevel = Math.min(100, this.skillLevel);
        return this;
    }

    doHomework(assignment)
    {
        // canComplete takes an assignment and returns true of false if the student is capable.
        const canComplete = (assignmentToCheck) => assignmentToCheck.skillLevel <= this.skillLevel;
        if(assignment === undefined)
        {
            this.assignments.forEach(todo => todo.completed = canComplete(todo));
            return this;
        }
        if(assignment.skillLevel === undefined || assignment.skillLevel < 1 || assignment.skillLevel > 100)
        {
            return this;
        }
        assignment.completed = canComplete(assignment);
        this.assignments.push(assignment);
        return this;
    }
}

module.exports = Student
