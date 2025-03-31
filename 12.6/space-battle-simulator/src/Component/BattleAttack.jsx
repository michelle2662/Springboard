function BattleAttack({updateHealth, playerHealth, enemyHealth, updateStatus, reset}) {

    const isGameOver = playerHealth > 0 && enemyHealth >0 ? false : true
    
    
    return(
        <div>
            <button onClick = {() => {
                if (!isGameOver) {
                    updateHealth(playerHealth,enemyHealth)
                    updateStatus(isGameOver)
                } else {
                    reset()
                }
               
                }}>
            {!isGameOver? "Attack" : "Restart"}
           </button>
        </div>
    )
}

export default BattleAttack