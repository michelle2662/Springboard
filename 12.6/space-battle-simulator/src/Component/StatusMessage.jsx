

function StatusMessage({playerHealth, enemyHealth}) {

    let message = ""
    if (playerHealth === 0 && enemyHealth > 0) {
        message = "Mission Failed! Your spacecraft has been defeated";
    } else if (playerHealth === 0 && enemyHealth === 0) {
        message = "Draw!";
    } else if (playerHealth > 0 && enemyHealth === 0) {
        message = "Congratulations! You've successfully defended your spacecraft";
    } else if (playerHealth > 0 && enemyHealth > 0) {
        message = "Engage the enemy!";
    }

    console.log(message)

    return (
        <div className = 'status-message'>
            <h3>{message}</h3>
        </div>
    )
}

export default StatusMessage