import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Created by myildiz97, {year}</p>
      <div className="footer-links">
        <a 
          href="https://www.linkedin.com/in/mehmetyildizz/"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoLinkedin />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/myildiz97"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoGithub />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer