import './Feedback.css'

export default ({ level, message }) => {
    
    if (message === "email is empty or blank"){message = "Ups! Write an e-mail"}
    if(message === "password is empty or blank"){message = "Ups! Write the password"}
    if(message === "password length is smaller than 8 characters"){message = "Wrong password! Password must have at least 8 characters"}
    if(message === "updated user"){message = "Updated user"}
    if(message === "description is empty or blank"){message = "Don't be shy, write something about you"}
    if(message === "name is empty or blank"){message = "Ups! Don't be shy, tell us your name"}
    if(message=== "user does not exist"){message = "We cannot find this user..."}
    if(message=== "user deactivated"){message = "User deactivated. If you want to recover it, please contact Tindev"}
    if(message === "not found any offer from company"){message = "You don't have any offers published yet!"}
    if(message === "offer not found"){message = "Ups! This offer no longer exists"}
    if(message === "company not found"){message = "Ups! This company no longer exists"}
    if(message === "request not found"){message = "Ups! This request no longer exists"}

    if (message === 'Failed to fetch'){message = "Ups! We're in troubles. Try it later"}
    
    return <div className={`Feedback Feedback--${level}`}>{message}</div>
}