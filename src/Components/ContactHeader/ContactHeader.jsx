import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>
            LET'S CONNECT: WE ARE HERE TO HELP, AND 
            WE'D LOVE TO HEAR FROM YOU!
            JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH 
            THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.  
        </p>
    </div>
  )
}

export default ContactHeader