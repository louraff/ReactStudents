import "../styles/Score.css"

function Score({score}) {
    return(
        <>
        <li>Date: {score.date}</li>
        <li>Score: {score.score}</li>
        </>
    )
}

export default Score