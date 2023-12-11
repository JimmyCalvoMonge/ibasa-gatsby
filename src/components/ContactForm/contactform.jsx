import * as React from "react"
import { useState } from "react";

// Contact Form with Fixed Course Name

const ContactForm = (props) => {

    const [message, setMessage] = useState('');
    const getMessage = (t) => {
        setMessage(t);
    };

    const [email, setEmail] = useState('');
    const getEmail = (t) => {
        setEmail(t);
    };

    const [name, setName] = useState('');
    const getName = (t) => {
        setName(t);
    };

    const [telephone, setTelephone] = useState('');
    const getTelephone = (t) => {
        setTelephone(t);
    };

    const [sent, setSent] = useState(false);

    const handleClick = () => {

        console.log(name);
        console.log(email);
        console.log(props.course);
        console.log(message);

        // Add send email logic here !

        setName('');
        setEmail('');
        setMessage('');
        setTelephone('');
        
        setSent(true);
        setTimeout(() => {
            setSent(false)
         }, 10000);
    };

    return (
    <div>
        {props.showmessage ? <h4>¡Contáctenos para saber más sobre este curso!</h4>: <h4></h4>}
        <label className="required">Nombre Completo:</label>
        <div className="form-group">
            <input type="text" className="form-control" name="user_name"
            value={name} onChange={(e) => getName(e.target.value)} required></input>
        </div>
        <label className="required">Correo electrónico:</label>
        <div className="form-group">
            <input type="text" className="form-control" name="email"
            value={email} onChange={(e) => getEmail(e.target.value)} required></input>
        </div>
        <label className="required">Teléfono:</label>
        <div className="form-group">
            <input type="text" className="form-control" name="telephone"
            value={telephone} onChange={(e) => getTelephone(e.target.value)} required></input>
        </div>
        <label className="required">Mensaje:</label>
        <div className="form-group">
            <textarea name="message" id="" cols="30" rows="7" className="form-control"
            value={message} onChange={(e) => getMessage(e.target.value)} ></textarea>
        </div>
        <div className="form-group">
            <input type="submit" value="Enviar Mensaje" className="btn btn-primary py-3 px-5"
            onClick={() => handleClick()}></input>
        </div>
        {sent ? 
        <h4> Su mensaje se ha enviado a IBASA con éxito.
        Pronto un agente le contactará para aclarar todas sus dudas.
        </h4>: <h4></h4>}
    </div>
  );
}

export default ContactForm;