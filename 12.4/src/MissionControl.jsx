import React, { useState } from 'react';
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

function MissionControl({missions}) {

    const [filter, setFilter ] = useState("All")
    

    const [updatedMissionList, setUpdatedStatusMissionList] = useState(missions)
    
    function updateStatusMissionList(id, updatedStatus){

        console.log("ID: ", id)
        console.log("Status: ", status)
        const missionList = missions.map(mission =>
            mission.id === id? {...mission , status : updatedStatus}: mission
        )
        setUpdatedStatusMissionList(() => missionList)
    }
    
    const filteredMissionList = updatedMissionList.filter( mission =>

        filter === "All" ? true : mission.status === filter
    
    )

    return (
        <div className = "mission-control">

        <MissionFilter currentStatus = {filter } setFilter = {setFilter}/> 

           {filteredMissionList.map ((mission) => {
                return (
                    <div key = {mission.id} className = "mission">


                        <MissionCard 
                        id = {mission.id}
                        name = {mission.name}
                        status = {mission.status}
                        crew = {mission.crew}
                        />

                        <MissionAction  id = {mission.id} updateStatusMissionList = {updateStatusMissionList}/>
                    </div>  
                )
           })}
        </div>
    );

}

export default MissionControl


