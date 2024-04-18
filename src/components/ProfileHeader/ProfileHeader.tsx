import { useContext } from "react";
import { User } from "../../models/User";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import "./ProfileHeader.styles.css"
import { Store } from "../../store/state";

export function ProfileHeader({
  username,
  profileBanner,
  profilePicture,
  followingCount,
  followersCount
}: User) {
  const { data: { user } } = useContext(Store)
  const userPostCount = user.length

  return (
    <div className="profile-header">
      <picture className="profile-banner">
        {profileBanner ? (
          <img src={profileBanner} alt={"@" + username} />
        ) : (
          <div>no banner</div>
        )}
      </picture>
      
      <ProfilePicture src={profilePicture}></ProfilePicture>

      <div className="profile-numbers">
        <div>
          <i aria-hidden data-feather="user-check"></i>
          <span>{followingCount} following</span>
        </div>

        <div>
          <i aria-hidden data-feather="users"></i>
          <span>{followersCount} followers</span>
        </div>

        <div>
          <i aria-hidden data-feather="archive"></i>
          <span>{userPostCount} posts</span>
        </div>
      </div>
    </div>
  )
}