import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./PageHeader.styles.css"

export function PageHeader() {
  const [header, setHeader] = useState<{ title?: string, subtitle?: string }>()
  const location = useLocation()

  useEffect(() => {
    switch(location.pathname.split("/")[1]) {
      case "profile": {
        setHeader({ title: "Profile", subtitle: "Posts from" })
        break
      }
      case "following": {
        setHeader({ title: "Following", subtitle: "People and trends you're" })
        break
      }
      default: {
        setHeader({ title: "Explore", subtitle: "Ideas to" })
      }
    }
  }, [location.pathname])

  return (
    <div className="page-header">
      <h4>{header?.subtitle}</h4>
      <h1>
        {header?.title}
      </h1>
    </div>
  )
}