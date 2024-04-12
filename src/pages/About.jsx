import { useState } from "react"
import { Navigate } from "react-router-dom"

const About = () => {
  const [user, setUser] = useState("mario")

  if (!user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestias repellendus earum, natus voluptas eos alias dolor temporibus
        ab libero soluta, at asperiores, autem sed optio quis pariatur
        exercitationem eligendi?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestias repellendus earum, natus voluptas eos alias dolor temporibus
        ab libero soluta, at asperiores, autem sed optio quis pariatur
        exercitationem eligendi?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        molestias repellendus earum, natus voluptas eos alias dolor temporibus
        ab libero soluta, at asperiores, autem sed optio quis pariatur
        exercitationem eligendi?
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
