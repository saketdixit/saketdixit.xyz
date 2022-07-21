import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React from "react";

function Icons() {
  return (
    <div>
      <a
        href="https://github.com/gunjanchaudhari"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          class="svg-inline--fa fa-github text-white text-4xl md:text-5xl transition duration-200 ease-in-out transform-gpu mx-4 md:mx-6 mt-4 md:mt-6 border-white cursor-pointer hover:scale-150"
        ></FontAwesomeIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/gunjan-chaudhari/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          class="svg-inline--fa fa-linkedin text-white text-4xl md:text-5xl transition duration-200 ease-in-out transform-gpu mx-4 md:mx-6 mt-4 md:mt-6 border-white cursor-pointer hover:scale-150"
        ></FontAwesomeIcon>
      </a>
      <a
        href="https://docs.google.com/document/d/1vY5P9Cq4N3HhACWj6y27y8vE8hoY0cFuvGzo07rOfLA/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          class="svg-inline--fa fa-resume text-white text-4xl md:text-5xl transition duration-200 ease-in-out transform-gpu mx-4 md:mx-6 mt-4 md:mt-6 border-white cursor-pointer hover:scale-150"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
}

export default Icons;
