const createStudent = (name, grade) => {
    const newStudent = {
        name: name,
        grade: grade
    }
    return newStudent
}

const student = createStudent("James", 12)

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    return studentObject
}

const studentWithMathGrade = addMathGrade(student)

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    return studentObject
}

const studentWithHistoryGrade = addHistoryGrade(studentWithMathGrade)

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
    return studentObject
}

const finalStudentGrades = addScienceGrade(studentWithHistoryGrade)
console.log(finalStudentGrades)

