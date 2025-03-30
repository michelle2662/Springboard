import React, { useState } from 'react';




function MissionFilter({currentFilter, setFilter}) {

    const filterOptions = ["All", "Planned" , "Active" , "Completed"]


    return (
        <div className = "mission-filter-buttons">
            {
                filterOptions.map(filter => 
                    <button key={filter} onClick = {() => setFilter(() => filter)}>{filter}</button>
                )
            }
                
        </div>
    )
}

export default MissionFilter