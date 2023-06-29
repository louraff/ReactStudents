// import Score from './Score'
import "../styles/Student.css"


function Student({student}) {
    console.log(student)
    return(
    <>
        <li className="h2">{student.name}</li>
        <li>{student.bio}</li>
        {student.scores.map((score, idx) => 
            <div key={idx}>
            <li>Date: {score.date}</li>
            <li>Score: {score.score}</li>
            </div>
        )}
    </>
    )
}

export default Student

