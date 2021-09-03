import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="Contactbox" id="Contact">
        <div className="cobx">
          <div className="cb1">
            <h1>Let's Work Together...</h1>
            <h3>how do you have your coffee ?</h3>
            <div className="cob">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-envelope-fill"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-linkedin"></i>
            </div>
          </div>
          <div className="cb2">
            <form className="form">
              <label for="name">Name</label>
              <br />
              <input type="text" id="name" placeholder="Your name" />
              <br />
              <label for="email">Email</label>
              <br />
              <input type="email" id="email" placeholder="Your email" />
              <br />
              <label for="textarea">Write Your Concern</label>
              <br />
              <textarea
                name=""
                id="textarea"
                cols="20"
                rows="5"
                placeholder="Share Your Concern"
              ></textarea>
              <br />
              <input type="submit" className="submit" value="Submit" />
            </form>
          </div>
        </div>
        <footer>
          <p>&copy;2021 Created By Arun Kumar Singh</p>
          <p>Task 1 Web Devlopment Developer Days </p>
        </footer>
      </div>
    </>
  );
}
