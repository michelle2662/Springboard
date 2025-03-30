

function MissionCard({id, name, status, crew}) {
    return (
        <div>
            <h2> {name} </h2> 
            <h4> Status: {status}</h4>
            <h4> Crew: {crew.join(", ")} </h4>
        </div>
    )
}

export default MissionCard