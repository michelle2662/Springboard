

function HealthStatus( props){
    console.log("Health: ", props)
    return (
        <div>
            <h3> {props.children}  {props.health}</h3>
        </div>
    )
}

export default HealthStatus;