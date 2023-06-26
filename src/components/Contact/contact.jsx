import React from 'react';
import './contact.css';

function ContactForm(props) {
    return (
        <div className="contact__wrap">
            <div className='contact__background' onClick={props.toggleContactOpen}></div>
            <div className='contact__form-box'>
                <p className='contact__title'>CONTACT ME</p>

                <form className='contact__form'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' required />

                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />

                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' required></textarea>

                    <label htmlFor='message'>How did you hear about me?</label>
                    <textarea id='message' name='message' required></textarea>

                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;