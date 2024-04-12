import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        voluptas alias nihil libero, beatae quod! Porro corporis cupiditate quos
        enim exercitationem, quibusdam odio veniam? Laboriosam totam quam vitae
        sequi iure!
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  )
}

export default NotFound
