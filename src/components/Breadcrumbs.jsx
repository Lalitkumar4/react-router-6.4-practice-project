import { NavLink, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
  const location = useLocation()

  let currentLink = ""

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink}>{crumb}</NavLink>
        </div>
      )
    })

  return <div className="breadcrumbs">{crumbs}</div>
}

export default Breadcrumbs
