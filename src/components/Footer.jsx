
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://img.icons8.com/?size=100&id=xXaeGQn5sAFy&format=png&color=000000"}
          alt="Founder"
        />

        <h2>Shreyash Kamble</h2>
        <p>Transforming Ideas into Interactive Web Solutions.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="#" target={"blank"}>
            <img className="social-icon" src={"https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000"} alt="" />
          </a>
          {/* <a href="#" target={"blank"}>
            <img className="social-icon" src={"https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000"} alt="" />
          </a> */}
          <a href="#" target={"blank"}>
            <img className="social-icon"  src={"https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"} alt="" />
          </a>
        </article>
      </aside>
      <a href="#home">
       <img className="topArrow" src={"https://img.icons8.com/?size=100&id=irE6pSIkjIC3&format=png&color=000000"} alt="" />
      </a>
    </footer>
  );
};

export default Footer;