import { motion } from "framer-motion"
import  Typewriter  from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import myself from "../assets/coding (1).png"

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
            <p>Hi, I'm <br />Shreyas Kamble</p>
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
         <div>
         <aside>
         <article>
            <p>+<span>100</span></p>
            <span>Clients Worldwide</span>
          </article>

         </aside>
         

          <aside>
          <article>
            <p>+<span>500</span></p>
            <span>Projects Done</span>
          </article>
          </aside>

          <article data-contact>
            <p>Contact</p>
            <span>kshreyass59@gmail.com</span>
          </article>
         </div>
        </div>
      </section>
      <section>
        <img src={myself} alt="Shreyas Kamble" />
      </section>
      <BsChevronDown/>
    </div>
  )
}

export default Home