
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import React, { useRef, FormEvent } from 'react';
import { Textarea } from "@/components/ui/textarea"






const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: FormEvent) => {
    e.preventDefault();
  
        if (form.current)
      emailjs
        .sendForm('service_yevf4gb', 'template_8qwoqdi', form.current, 'DGzhxdaGVZAwEaZc1',)
        .then(
          () => {
            console.log('SUCCESS!');
            form.current!.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return <StyledContactForm>
      <div className=" flex w-full justify-center items-center rounded-xl">
      <form ref={form} onSubmit={sendEmail} className="max-w-xl w-full">
      <label className="text-lg">Name</label>
      <input type="text" name="user_name" />
      <label className="text-lg">Email</label>
      <input type="email" name="user_email" />
      <label className="text-lg">Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </StyledContactForm>
};


    export default Contact;

    // Styles
    const StyledContactForm = styled.div`
    width:1000%;
      form {
        display: flex;
        align-items:;
        flex-direction: column;
        width: 100%;
        font-size: 15px;
        font-bold;
    
        input {
          width: 100%;
          height: 35px;
          padding: 7px;
          outline: none;
          border-radius: 12px;
          border: 1px solid rgb(220, 220, 220);
    
          &:focus {
            border: 2px solid rgb(220, 220, 220);
          }
        }
    
        textarea {
          max-width: 100%;
          min-width: 100%;
          width: 100%;
          max-height: 100px;
          min-height: 100px;
          padding: 5px;
          outline: none;
          border-radius: 12px;
          border: 1px solid rgb(220, 220, 220);

    
        }
    
        label {
          margin-top: 1rem;
        }
    
        input[type="submit"] {
          margin-top: 1rem;
          cursor: pointer;
          background: rgb(9, 9, 11);
           &:hover {
            color: rgb(9, 9, 11);
            border: .5px solid rgb(220, 220, 220);
            background: rgb(220,220,220)
            
            
          }
          border-radius: 12px;
          color: white;
          border: 1px solid rgb(220, 220, 220);
          
        }
      }
    `;


    
