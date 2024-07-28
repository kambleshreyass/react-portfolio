import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Projects = () => {
  return (
    <div id="projects">
      <h2>PROJECTS</h2>
      <section>
        <article>
          <Carousel>
          {
            data.projects.map(i=>(
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target="blank" href={i.url}>View Demo</a>
                </aside>
              </div>
            ))
          }
          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Projects