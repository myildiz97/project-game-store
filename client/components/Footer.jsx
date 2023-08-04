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
        >
          <BiLogoLinkedin />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/myildiz97"
          target="_blank"
        >
          <BiLogoGithub />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer