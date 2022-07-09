import React from "react";
import "../Styles/Projects.css";

export default function Skills(props) {
  return (
    <>
      <section class="projects" id={props.id}>
        <h2 class="projects-title">Some of my Recent Projects</h2>
        <div class="projects-container">
          <div class="project-container project-card">
          <img
              src="https://user-images.githubusercontent.com/79797338/174557606-0e410c12-114f-4bae-8387-be8453b6eca8.png"
              alt="greeny-earth"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title"> Real Office Furniture Company (ROFC)</h3>
            <p class="project-details">
              A prototype application for the Real Office Furniture Company
              (ROFC) written in JAVA. <br />
              The application will allow ROFC staff to record details of
              individual orders.
            </p>
            <a
              href="https://github.com/JatinAneja2000/FurnitureMain"
              target="_blank"
              class="project-link"
              rel="noopener noreferrer"
            >
              Check it Out
            </a>
          </div>
          <div class="project-container project-card">
          <img
              src="https://user-images.githubusercontent.com/70910485/176212804-73704c82-1896-4161-b91b-d80051deddfb.png"
              alt="greeny-earth"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">ThAmCo - Three Amigos's Corp</h3>
            <p class="project-details">
              Its is a simple Web Application made using MVC: C# .NET-Core .
              ThAmCo is a Cartering / Event Organizing company hosting various
              events in the town.
            </p>
            <a
              href="https://github.com/JatinAneja1812/ThAmCoICA"
              target="_blank"
              class="project-link"
              rel="noopener noreferrer"
            >
              Check it Out
            </a>
          </div>
          <div class="project-container project-card">
          <img
              src="https://user-images.githubusercontent.com/70910485/174665605-17fa854d-579c-4e61-b3ab-9d77c1145662.png"
              alt="greeny-earth"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">GuessingGame</h3>
            <p class="project-details">
              It is a simple text-based “Guess the Number” game that generates a
              random number (1-100) and asks the user to guess the number. After
              each guess, the user is told if the number was correct and the
              number of attempts so far. The game continues until the user
              guesses the number correctly.
            </p>
            <a
              href="https://github.com/JatinAneja1812/GuessingGame"
              target="_blank"
              class="project-link"
              rel="noopener noreferrer"
            >
              Check it Out
            </a>
          </div>
        </div>
        <div class="projects-container">
        <div class="project-container project-card">
          <img
              src="https://user-images.githubusercontent.com/79797338/141600813-6180feca-e1bf-4814-a6e8-34deee6a6603.png"
              alt="expense-tracker"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Space Shooter {"(C++)"} Game</h3>
            <p class="project-details">
              This is a simple Space Shooter Game of 90's <br />
              You can control your space shooter with Arrow keys and fire using
              Space bar. You can earn as many point as you kill the space bugs
            </p>
            <a
              href="https://github.com/JatinAneja2000/SpaceShooter"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              Check it Out
            </a>
          </div>
          <div class="project-container project-card">
          <img
              src="https://user-images.githubusercontent.com/79797338/174663072-7aa07fa9-5394-47b1-bd28-2a3fc4c42936.png"
              alt="netflic-clone"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">PocketBeast</h3>
            <p class="project-details">
              PocketBeast is a Console Based Trading card game written in Java.
              <br />I had Created a new Version of PocketBeast with the Use of
              Garphical User InterFace and Software Design Pattern and this
              version support Chat application between two players.
            </p>
            <a
              href="https://github.com/JatinAneja2000/PocketBeast"
              target="_blank"
              class="project-link"
              rel="noopener noreferrer"
            >
              Check it Out
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
