import { useContext, useEffect } from "react"
import { Store } from "../../store/state"
import { PostType } from "../PostType/PostType"
import { fetchPosts, fetchUserPosts } from "../../services"
import { State } from "../../types/state"
import { User } from "../../models/User"
import { Card } from "../Card/Card"
import "./Feed.styles.css"

export function Feed({ feed, user }: { feed: State["data"]["feed"], user?: User }) {
  const {
    data,
    dispatchPosts,
    dispatchFollowingPosts,
    dispatchUserPosts,
    activeUser,
    lastPostCreatedOn,
    dispatchRestartDayPostCount
  } = useContext(Store)

  useEffect(() => {
    switch(feed) {
      case "user": {
        if (user) {
          fetchUserPosts(data.posts, user).then(response => dispatchUserPosts(response))
        }

        break;
      }
      case "following": {
        fetchPosts(data.posts, feed, activeUser).then(posts => {
          dispatchFollowingPosts(posts)
        })

        break;
      }
      default: {
        fetchPosts(data.posts, feed, activeUser).then(posts => {
          dispatchPosts(posts)
        })
      }
    }

    const lastPostDay = new Date(lastPostCreatedOn).toUTCString()
    const today = new Date().toUTCString()

    if (lastPostDay !== today) {
      dispatchRestartDayPostCount()
    }

  }, [feed, activeUser, user, lastPostCreatedOn])

  if (data.loading) return (<>Loading</>)

  const list = feed === "following" ? data.following : feed === "user" ? data.user : data.posts

  if (list.length) {
    return (
      <div>
        {list.map((post, i) => (
          <PostType key={i} {...post} />
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <Card>
          <div className="no-posts-found">
            <h3>
              Go to "Folowing" and start following <span>Posterrs</span>
            </h3>
          </div>
        </Card>
      </div>
    )
  }
}