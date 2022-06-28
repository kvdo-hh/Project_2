import React from "react";
import "./Contact.css";
import AvatarKO from components / AvatarKO;

const Contact = () => {
    return (
        <div>
            <div className="Contact">
                <img src="Katja r.png" alt="Katja" style={{ width: "100%" }} />
                <h1>Katja von der Osten</h1>
                <p className="Title">Consultant for Digitalization</p>
                <p>Hamburg Coding School</p>
                <a href="#">
                    <i className="Fa fa-linkedin" />
                </a>

                <p>
                    <button>Mail</button>
                </p>
            </div>
        </div>
    );
};
export default Contact;
