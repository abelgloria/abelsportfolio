import { Link } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData";
import '../Components/Projects.css';
import javaProjectsData from "../Data/JavaProjectsData";

export default function Projects() {

    const webProjects = ProjectsData.map((project) =>
        <Link target="_blank" className="linkProjectLinkContainer" to={project.href} key={project.id}>
            <p className="projectTitle">
                {project.nameOfProject}
            </p>
            <div className="projectSkillsUsed">
                {project.skillsUsed}
            </div>
        </Link>
    );

    const javaProjects = javaProjectsData.map((project) =>
        <Link target="_blank" className="linkProjectLinkContainer" to={project.href} key={project.id}>
            <p className="projectTitle">
                {project.nameOfProject}
            </p>
            <div className="projectSkillsUsed">
                {project.skillsUsed}
            </div>
        </Link>
    );

    function showDiv(divIdOne, divIdTwo, divIdThree, menuId) {
        const blankProjectDiv = document.getElementById(divIdOne);
        const webProjectsDiv = document.getElementById(divIdTwo);
        const javaProjectsDiv = document.getElementById(divIdThree);

        blankProjectDiv.style.display = 'none';
        webProjectsDiv.style.display = 'none';
        javaProjectsDiv.style.display = 'none';

        if (menuId.value === "0") {
            blankProjectDiv.style.display = 'block';
        } else if (menuId.value === "1") {
            webProjectsDiv.style.display = 'block';
        } else if (menuId.value === "2") {
            javaProjectsDiv.style.display = 'block';
        }
    }

    return (
        <div className="projectsPage">

            {/* select section */}
            <section className="selectProjectSection">
                <label className="selectLabel" htmlFor="projectsType">Choose a Type of Project:</label>
                <select
                    className="selectBar"
                    name="projectsType"
                    id="projectsType"
                    onChange={(e) => showDiv("empty", "webProjectsDiv", "javaProjectsDiv", e.target)}
                >
                    <option value="0">-- Select --</option>
                    <option value="1">Web Development Projects</option>
                    <option value="2">Java Projects</option>
                </select>
            </section>

            {/* DIFFERENT CATEGORIES OF WEB PROJECTS */}
            <div id="empty"></div>
            <div id="webProjectsDiv" className="typesOfProjects">
                <h1 className="categoryTitle">Web Projects</h1>
                <div className="linkContainer">
                    {webProjects}
                </div>
            </div>
            <div id="javaProjectsDiv" className="typesOfProjects">
                <h1 className="categoryTitle" >Java Projects</h1>
                <div className="linkContainer" >
                    {javaProjects}
                </div>
            </div>
        </div>
    );
}
