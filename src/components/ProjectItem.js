import React from "react";
import { useNavigate } from "react-router-dom";
import GithubIcon from "@material-ui/icons/GitHub";

function ProjectItem({ image, name, id, skill, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p> {skill} </p>
      
    </div>
  );
}

export default ProjectItem;
