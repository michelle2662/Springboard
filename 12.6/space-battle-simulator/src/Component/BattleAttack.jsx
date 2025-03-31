function BattleAttack({updateHealth, playerHealth, enemyHealth, updateStatus}) {

    const isGameOver = playerHealth > 0 && enemyHealth >0 ? false : true

    return(
        <div>
            <button onClick = {() => {
                updateHealth(playerHealth,enemyHealth)
                updateStatus(isGameOver)
                }}>
            {playerHealth > 0 && enemyHealth >0 ? "Attack" : "Restart"}
           </button>
        </div>
    )
}

export default BattleAttack