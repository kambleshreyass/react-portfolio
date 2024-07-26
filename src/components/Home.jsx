import { motion } from "framer-motion"
import  Typewriter  from "typewriter-effect"
import {BsArrowUpRight} from 'react-icons/bs'
import myself from "../assets/programming (1).png"

const Home = () => {

  const animation = {
    h1:{
      initial:{
        x:"-100%",
        opacity: 0,
      },
      whileInView:{
        x: 0,
        opacity: 1
      }
    },
    button:{
      initial:{
        y:"-100%",
        opacity: 0,
      },
      whileInView:{
        x: 0,
        opacity: 1
      }
    }
  }
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            <p>Hi, I Am <br />Shreyas Kamble</p>
          </motion.h1>

          <Typewriter options={{
            strings:["Frontend Developer", "A Creater" , "Self Taught Programmer"],
            autoStart: true,
            loop : true,
            wrapperClassName: "typerwriter",
            cursor: ""
          }} />

          <div>
            <a href="mailto:kshreyass59@gamail.com">Hire Me</a>
            <a href="#projects">Projects <BsArrowUpRight/></a>
          </div>
        </div>
        <div>
          <article>
            <p>+<span>100</span></p>
            <span>Clients Worldwide</span>
          </article>


          <aside>
          <article>
            <p>+<span>500</span></p>
            <span>Projects Made</span>
          </article>
          </aside>

          <article data-contact>
            <p>Contact</p>
            <span>kshreyass59@gmail.com</span>
          </article>
        </div>

      </section>
      <section>
        <img src={myself} alt="Shreyas Kamble" />
      </section>
    </div>
  )
}

export default Home