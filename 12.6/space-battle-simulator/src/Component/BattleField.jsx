import React, { useState } from 'react';
import HealthStatus from './HealthStatus'
import BattleAttack from './BattleAttack'
import FireButton from './FireButton'

const attack = () => Math.floor(Math.random() * 51)

function BattleField() {

    const [playerHealth, setPlayerHealth] = useState(100)
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [gameStatus, setGameStatus] = useState("Active")
    console.log("Player: ", playerHealth)
    console.log("Enemy: ", enemyHealth)

    function calculateHealth(playerHealth, enemyHealth) {
        setPlayerHealth(playerHealth -= attack())
        setEnemyHealth(enemyHealth -= attack())
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
            updateStatus = {updateStatus}/>
            <HealthStatus className = "enemy-health" health = {enemyHealth}> Enemy health: </HealthStatus>
        </div>
    )
}

export default BattleField