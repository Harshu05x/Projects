import './MfgDate.css'

function MfgDate(props){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return(
        <div className="MfgDate">
            <div>{props.date.getDate()}</div>
            <div>{months[props.date.getMonth()]}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
    )
}

export default MfgDate;