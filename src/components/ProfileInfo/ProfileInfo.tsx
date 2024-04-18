import { useContext } from "react";
import { User } from "../../models/User";
import { fetchExecuteFollowingAction } from "../../services";
import { RoundedButton } from "../RoundedButton/RoundedButton";
import "./ProfileInfo.styles.css"
import { Store } from "../../store/state";

export function ProfileInfo({ uuid, name, username, createdOn, following, actions }: User & { actions?: boolean }) {
  const { activeUser, dispatchFollowingList } = useContext(Store)

  const date = new Date(createdOn)
  const set = new Set(activeUser?.following)
  const isFollowing = set.has(uuid)  

  function handleUserFollowAction() {
    if (activeUser)
    fetchExecuteFollowingAction(uuid, activeUser, !isFollowing).then(list => {
      dispatchFollowingList(list)
    })
  }

  return (
    <div className="profile-info">
      <div className="info">
        <h4>{name}</h4>
        <span>{`@${username}`}</span>
        <span>{`started posting on ${date.toLocaleString("default", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`}</span>
      </div>

      {actions ? (
        <div>
          {isFollowing ? (
            <RoundedButton secondary icon="user-x" action={handleUserFollowAction}>
              <span>Unfollow</span>
            </RoundedButton>
          ) : (
            <RoundedButton icon="user-plus" action={handleUserFollowAction}>
              <span>Follow</span>
            </RoundedButton>
          )}
        </div> ) : null
      }
    </div>
  )
}