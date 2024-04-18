import { Link } from "react-router-dom";
import { User } from "../../models/User";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import "./PostHeader.styles.css"

export function PostHeader({ user, date }: { user: User, date: Date }) {
  return (
    <div className="post-header">
      <Link className="profile-picture" to={`/profile/${user.uuid}`}>
        <ProfilePicture src={user.profilePicture}></ProfilePicture>
      </Link>
      <div className="post-info">
        <Link to={`/profile/${user.uuid}`}>
          <h4>{user.name}</h4>
        </Link>
        <Link to={`/profile/${user.uuid}`}>
          <span>{`@${user.username}`}</span>
        </Link>
        <span>{`${date.toLocaleString("default", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`}</span>
      </div>
    </div>
  )
}