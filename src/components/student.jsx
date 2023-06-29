import Score from './Score'
import "../styles/Student.css"

function Student({students}) {
    console.log(students)
    return(
        <ul className="StudentList">
            {students.map((student, idx) => (
            <>
            <li className="h2">{student.name}</li>
            <li>{student.bio}</li>
            {student.scores.map((score, scoreIdx) => 
            <Score student={student} key={scoreIdx} score={score} />)}
            </>
            ))}
        </ul>
   
    )
}

export default Student

// function Student({student}) {
//     console.log(student)
//     return(
//     <ul>
//         <li className="h2">{student.name}</li>
//         <li>{student.bio}</li>
        
        
//     </ul>
//     )
// }

// {student.scores.map((score, idx) => 
//     <div key={idx}>
//     <li>Date: {score.date}</li>
//     <li>Score: {score.score}</li>
//     </div>
//     )}

//     <>
//     <li className="h2">{student.name}</li>
//     <li>{student.bio}</li>
//     {student.scores.map((score, idx) => 
//         <div key={idx}>
//         <li>Date: {score.date}</li>
//         <li>Score: {score.score}</li>
//         </div>
//     )}
// </>