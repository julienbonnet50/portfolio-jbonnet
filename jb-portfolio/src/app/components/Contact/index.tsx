import React, { useContext, useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { InfoContext } from "../../page";

interface Props {}

export const Contact = (props: Props) => {
    console.log("started Contact components")
    require('dotenv').config();
    const info = useContext(InfoContext);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [alertState, setAlertState] = useState(false);
    const [loadState, setLoadState] = useState(false);

    const SERVICE_ID_V: string = process.env.REACT_APP_SERVICE_ID ?? 'null';
    const TEMPLATE_ID_V: string = process.env.REACT_APP_TEMPLATE_ID ?? 'null';
    const USER_ID_V: string = process.env.REACT_APP_USER_ID ?? 'null';
    
    console.log(`Resolved service id --- : ${SERVICE_ID_V}, template_id : ${TEMPLATE_ID_V}, user_id : ${USER_ID_V}`)


    const handleInputChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        console.log("Starting submit")
        console.log(`Resolved service id : ${SERVICE_ID_V}, template_id : ${TEMPLATE_ID_V}, user_id : ${USER_ID_V}`)

        event.preventDefault();
        setLoadState(true);
      
        const templateParams = {
          from_name: formState.name,
          from_email: info.email,
          message: formState.message,
        };
      
        console.log("Service ID : {} ", SERVICE_ID_V)
        emailjs
          .send(SERVICE_ID_V,
            TEMPLATE_ID_V,
            templateParams,
            USER_ID_V
          )
          .then((res) => {
            console.log(res);
            setLoadState(false);
            setFormState({
              name: "",
              email: "",
              message: "",
            });
            setAlertState(true);
            setTimeout(() => {
              setAlertState(false);
            }, 4000);
          })
          .catch((error) => {
            console.error('FAILED...', error.text);
          });
      };
  
    return (
        <div className="bg-base-200 mt-12">
            <h2
                id="Contact"
                className="flex justify-center text-4xl pt-12 font-bold mb-6 "
            >
                Contact Me
            </h2>
            <p className="text-center mb-6 p-6">
                Feel free to contact me using this form! You can also message me
                on&nbsp;
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={info.linkedIn}
                    className="text-info"
                >
                    LinkedIn.
                </a>
            </p>
            <form
                className="flex flex-col gap-4 items-center justify-center px-6"
                action=""
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={formState.name}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                    onChange={handleInputChange} />
                <input
                    type="text"
                    value={formState.email}
                    name="email"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full max-w-xs"
                    onChange={handleInputChange} />
                <textarea
                    value={formState.message}
                    name="message"
                    className="textarea textarea-primary w-full max-w-xs  h-40"
                    placeholder="Message"
                    onChange={handleInputChange}
                ></textarea>
                <button className="btn btn-primary mt-2 mb-12">Submit</button>
                {loadState ? <progress className="progress w-56"></progress> : null}
            </form>

            {alertState ? (
                <div className="toast toast-center w-4/5 md:w-2/5">
                    <div className="alert alert-success">
                        <div>
                            <span>
                                Message sent successfully 😁 I will get back to you as soon as
                                possible!
                            </span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Contact