//You will create a script that gathers data, processes it, and then outputs 
//a consistent result as described by a specification. 
//This is a very typical situation in industry, and this particular scenario 
//has been modified from a real application.

/*Criteria:
Employ basic JavaScript syntax accurately.
Implement control flow structures such as conditionals and loops effectively.
Use arrays and objects to organize and manage data.
Develop functions to create reusable code.
Utilize loops and iteration to navigate through data collections.
Implement error handling to manage potential code failures gracefully.
*/


// course info data object
const courseInfo = {
   "id": number, //number representing the course id
   "name": string, //string representing the name of the course
}

// AssignmentGroup object
const assignmentGroup = {
    id: 1,
    name: "homework",
    //the ID of the course the assignemnt group belongs to
    course_id: 101,
    //the percentage weight of the entire assignment group
    group_weight: 30,
    //an array for all of the assignment content/info for each assignment
    assignments: [//[assignmentInfo],
        new assignmentInfo(1, "homework 1", 100), // scored out of 100
        new assignmentInfo(2, "homework 2", 100),
        new assignmentInfo(3, "homework 3", 100),
    ]
}

// AssignmentInfo object
const assignmentInfo = {
    "id": number,
    "name": string,
    //the due date for the assignment
    "due_at": string, //date string
    //the maximum points possible for the assignemnt
    "points_possible": number,
}

// LearnerSubmission object
const learnerSubmission = {
    "learner_id": number, 
    "assignment_id": number,
    "submission": {
        "submitted_at": string, //date string
        "score": number
    }
}

//create a function that accepts the values above as parameters and returns the formatted result into an array of objects.
function getLearnerData(courseInfo, assignmentGroup, learnerSubmission){
    const result = [];

    for (let i =0; i < learnerSubmission.length; i++) {
        const submission = learnerSubmissions[i];
        let assignment = null; //this will be an empty placeholder for the assignments

        //use this loop to iterate over the assignment array and find the correct assignment
        for(let j = 0; j < assignmentGroup.assignment.length; j++) {
            if (assignmentGroup.assignments[j].id === submission.assignments_id) {
                let assignment = assignmentGroup.assignment[j];
                break;
            }
        }
    } 
    return result;

    //Check that the assignment group belongs to the course id
    if (assignmentGroup.course_id !== courseInfo.id) {
        throw new Error(`Assignment group ${assignmentGroup.id} belongs to the ${assignmentGroup.course_id}`);
    }

    //this try/catch method will check the error handling
    try {
        const courseInfo = createCourseInfo(308, "JavaScript");

        const assignment = [
            new assignmentInfo(1, "homework 1", 100), // scored out of 100
            new assignmentInfo(2, "homework 2", 100),
            new assignmentInfo(3, "homework 3", 100),
        ];

        const assignmentGroup = newAssignmentGroup(1, "homework", 306, 30, assignment);
        
        const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmission);
        console.log(result);
    }   catch (error) {
        console.error(error.message);
    }
} 


//try/catch to check if assignmentGroup doesn't belong to its course
