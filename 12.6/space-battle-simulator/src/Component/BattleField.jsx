import React, { useState } from 'react';
import HealthStatus from './HealthStatus'
import BattleAttack from './BattleAttack'
import FireButton from './FireButton'
import StatusMessage from './StatusMessage'
const attack = () => Math.floor(Math.random() * 51)

function BattleField() {

    const [playerHealth, setPlayerHealth] = useState(100)
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [gameStatus, setGameStatus] = useState("Active")
    console.log("Player: ", playerHealth)
    console.log("Enemy: ", enemyHealth)

    function calculateHealth() {
        setPlayerHealth(prevHealth => Math.max(prevHealth - attack(), 0)); 
        setEnemyHealth(prevHealth => Math.max(prevHealth - attack(), 0));   
    
    }

    function reset() {
        setPlayerHealth(prevHealth => 100);
        setEnemyHealth(prevHealth => 100) 

    }

    const updateStatus = (isGameOver) => setGameStatus(isGameOver? "Completed" : "Active")
    console.log("status: ", gameStatus)

    return (
        <div className = "battlefield">
            <HealthStatus className = "player-health" health = {playerHealth}> Player health: </HealthStatus>
            <BattleAttack 
            updateHealth = {calculateHealth} 
            playerHealth = {playerHealth} 
            enemyHealth = {enemyHealth}
            updateStatus = {updateStatus}
            reset = {reset} />
            <HealthStatus className = "enemy-health" health = {enemyHealth}> Enemy health: </HealthStatus>
            <StatusMessage playerHealth = {playerHealth} enemyHealth = {enemyHealth} />
        </div>
    )
}

export default BattleField