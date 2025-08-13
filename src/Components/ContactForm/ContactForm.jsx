import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi';
import { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    
  const onSubmit = (event) => {
    
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Button 
                text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                <Button 
                text = "VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}/>
            </div>

             <Button
             isOutLine={true}
                text = "VIA EMAIL FORM" icon={<HiMail fontSize="24px" />}/>
            <form onSubmit={onSubmit} action="" method="post">
            <div className={styles.form_control}>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="" />
            </div>

            <div className={styles.form_control}>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="" />
            </div>

             <div className={styles.form_control}>
                <label htmlFor='text'>Text</label>
                <textarea name="text" id=""  rows="8"/>
            </div>
             <div style={{display: "flex", justifyContent: "end"}}>
                <Button text = "SUBMIT BUTTON" />
            </div>
            <div>
                {"Name: " + name + "Email: " + email + "Description: " + text }
            </div>
        </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="Contact image" />
        </div>
    </section>
  )
}

export default ContactForm