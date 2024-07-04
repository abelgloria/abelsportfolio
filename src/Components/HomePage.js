import { useEffect, useState } from "react";
import skills from "../Data/Skills";
import '../Components/HomePage.css';
import homePageTitleLinks from "../Data/HomePageTitleLinks";
import { Link } from "react-router-dom";

export default function HomePage(){
    // The folliwng state will be used to output different greeting depensing on time of day 
    const [greeting, setGreeting] = useState("Greeting");

    const date = new Date();
    let hour = date.getHours();

    const greetingChange = useEffect(() =>{
        if(hour > 0 && hour < 12){
            setGreeting("Top Of the Morning! Guten Morgen.");
        } else if(hour >= 12 && hour < 18){
            setGreeting("Good Afternoon!");
        } else if (hour >= 18 && hour < 21){
            setGreeting("Good Evening!");
        } else{
            setGreeting("I hope you are having a good night.");
        }

    },[]);

    const linkLogo = homePageTitleLinks.map((link)=>
        <div key={link.id}>
            <Link to={link.href} target="_blank" >
                <img className="homePageTitleLogo" src={link.img} />
            </Link>
        </div>
    );

    // The following will get the list of skills that I have 
    const skillList = skills.map((skill)=>
        <div key={skill.id} className="individualSkill">
            <p>{skill.skill}</p>
            <img className="skillsImage" src={skill.src} />
        </div>
    );

    // OUTPUT
    return(
        <div className="homePage">
            <section className="homePageTitleContainer">
                <h1 className="greeting">{greeting}</h1>
                <div className="titlePageLinks">
                        {linkLogo}
                </div>
            </section>
            <section className="skillSection" >
                <h2>Skills</h2>
                <div className="skillsList">
                    {skillList}
                </div>
            </section>
        </div>
    );
};