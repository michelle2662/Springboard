import {useState} from 'react';



function MissionAction({id, updateStatusMissionList}) {

    const statusOptions = ["Launch", "Complete"]

    return (
        <div className = "mission-action-buttons">
           <button onClick = {() => updateStatusMissionList(id, "Active")}>
            Launch
           </button>


           <button onClick = {() => updateStatusMissionList(id, "Completed")}>
            Complete
           </button>
        </div>

    )
}

export default MissionAction