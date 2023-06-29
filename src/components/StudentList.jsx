import Student from "./Student"
import "../styles/StudentList.css"

function StudentList({students}) {
    return(
        <ul className="StudentList">
            {students.map((student, idx) => <Student student={student} key={idx} />)}
        </ul>
    )
}

export default StudentList