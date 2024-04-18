import { useContext, useEffect, useState } from "react"
import { Store } from "../../store/state"
import { Feed } from "../../components/Feed/Feed"
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader"
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo"
import { fetchUserData } from "../../services"
import { useParams } from "react-router-dom"
import { User } from "../../models/User"
import "./ProfilePage.styles.css"
import { CreatePost } from "../../components/CreatePost/CreatePost"

export const ProfilePage = () => {
  const { data, activeUser } = useContext(Store)
  const [user, setUser] = useState<User | null>(null)
  const { uuid } = useParams()
  const isProfileOwner = activeUser?.uuid === user?.uuid

  useEffect(() => {
    if (uuid !== undefined) {
      fetchUserData(uuid).then(response => {
        setUser(response)
      })

      return
    }

    if (activeUser) {
      setUser(activeUser)
    }
  }, [uuid, activeUser])

  if (data.loading || user === null) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )  
  } else {
    return (
      <div className="profile-page">
        <ProfileHeader {...user} />
        <ProfileInfo {...user} actions={!!!isProfileOwner} />
        {isProfileOwner ? (<CreatePost />) : null}
        <Feed key="profile-page" feed="user" user={user} />
      </div>
    )
  }
}
