import { useContext } from "react"
import { Store } from "../../store/state"
import { ProfilePicture } from "../ProfilePicture/ProfilePicture"
import "./UserInfo.styles.css"
import { Link } from "react-router-dom"

export function UserInfo() {
  const { activeUser } = useContext(Store)

  return (
    <Link to="/profile" className="user-info">
      <ProfilePicture src={activeUser?.profilePicture} />
      <div>
        <h4>{activeUser?.name}</h4>
        <span>{`@${activeUser?.username}`}</span>
      </div>
    </Link>
  )
}