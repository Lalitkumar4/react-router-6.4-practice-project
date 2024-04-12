import { useLoaderData, useParams } from "react-router-dom"

const CareersDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam
          minima ex, ab nihil nesciunt aspernatur facilis impedit sit saepe
          harum? Ullam maiores cupiditate eveniet hic, tempora maxime in
          inventore!
        </p>
      </div>
    </div>
  )
}

// loader function
// eslint-disable-next-line react-refresh/only-export-components
export const careersDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch("http://localhost:5000/careers/" + id)

  if (!res.ok) {
    throw Error("Could not find that career")
  }

  return res.json()
}

export default CareersDetails
