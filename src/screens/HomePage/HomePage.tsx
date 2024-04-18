import { useContext } from "react"
import { Store } from "../../store/state"
import { Feed } from "../../components/Feed/Feed"
import { CreatePost } from "../../components/CreatePost/CreatePost"
import { State } from "../../types/state"
import "./HomePage.styles.css"

export const HomePage = ({ feed }: { feed: State["data"]["feed"] }) => {
  const {
    data,
  } = useContext(Store)

  if (data.loading) {
    return (
      <div className="home-page">
        <h3>Loading...</h3>
      </div>
    )  
  } else {
    return (
      <div className="home-page">
        <article>
          <CreatePost />

          <Feed key="home-page" feed={feed} />
        </article>
      </div>
    )
  }
}
