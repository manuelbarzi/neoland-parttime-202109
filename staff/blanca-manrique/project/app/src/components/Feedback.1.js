import { useEffect } from 'react'

export default ({ level, message, onTimeout }) => {
    useEffect(() => {
        setTimeout(onTimeout, 2000)
    }, [])
    if (message === "email is empty or blank"){message = "Please write an e-mail"}

    if(message === "password is empty or blank"){message = "Please write the password"}

    if(message === "password length is smaller than 5 characters"){message = "Wrong password! Password must have at least 5 characters"}

    if(message === "username is empty or blank"){message = "Please enter your username"}
    
    if(message=== "user does not exist"){message = "User not found"}
    if(message=== "supplier does not exist"){message = "Supplier not found"}
    if(message=== "product does not exist"){message = "Product not found"}
    if(message=== "variant does not exist"){message = "Variant not found"}
    if(message=== "order does not exist"){message = "Order not found"}
    
    // if(message === "updated user"){message = "Updated user"}

    // if(message === "description is empty or blank"){message = "Don't be shy, write something about you"}



    // if(message === "not found any offer from company"){message = "You don't have any offers published yet!"}
    if(message === "not found any supplier"){message = "No suppliers yet, you can aggregate a new one"}
    
    // if(message === "offer not found"){message = "Ups! This offer no longer exists"}
    // if(message === "company not found"){message = "Ups! This company no longer exists"}
    // if(message === "request not found"){message = "Ups! This request no longer exists"}

    return <div className={`Feedback Feedback--${level}`}>{message}</div>
}