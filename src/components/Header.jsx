

const Header = () => {
  return (
    <nav>
      <NavContent/>
    </nav>
  )
}

const NavContent = () => (
  <>
    <h1>Shreyass.</h1>
    <div>
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#timeline">Experience</a>
      <a href="#resume">Resume</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:kshreyass59@gamail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header
