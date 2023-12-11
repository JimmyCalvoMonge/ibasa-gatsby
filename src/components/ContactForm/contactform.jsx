import * as React from "react"
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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
    const [errorSent, setErrorSent] = useState(false);

    useEffect(() => emailjs.init(process.env.REACT_EMAIL_JS_PUBLIC_KEY), []);
    const handleSubmit = async (e) => {

        e.preventDefault();

        const course = props.course;

        const serviceId = process.env.REACT_EMAIL_JS_SERVICE_ID;
        const templateId = process.env.REACT_EMAIL_JS_TEMPLATE_ID;
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        const isValidEmail = emailRegex.test(email);
        const conditionsArray = [
            name.length > 2,
            course.length > 2,
            isValidEmail
        ]

        if (conditionsArray.indexOf(false) === -1) {
            try {
                await emailjs.send(serviceId, templateId, {
                name: name,
                email: email,
                course: course,
                message: message,
                phone: telephone
            });
            console.log('Correo enviado con éxito!');
    
            setName('');
            setEmail('');
            setMessage('');
            setTelephone('');
            
            setSent(true);
            setErrorSent(false);

            setTimeout(() => {
                setSent(false)
             }, 10000);
    
            } catch (error) {
                console.log("Error!")
                console.log(error);
            } finally {
                console.log('Finalizado!')
            }

          } else {
            setErrorSent(true)
          }
        
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
            onClick={(e) => handleSubmit(e)}></input>
        </div>
        {sent ? 
        <h4> Su mensaje se ha enviado a IBASA con éxito.
        Pronto un agente le contactará para aclarar todas sus dudas.
        </h4>: <h4></h4>}

        {errorSent ? 
        <h4> Error enviando el correo.
        Por favor introduzca una dirección de correo válida, seleccione un curso y escriba un nombre válido.
        </h4>: <h4></h4>}

    </div>
  );
}

export default ContactForm;