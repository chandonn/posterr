import { Post } from "../models/Post"
import { User } from "../models/User"

export type State = {
  users: User[]
  activeUser?: User
  dayPostCount: number
  lastPostCreatedOn: number
  loading: boolean
  data: {
    posts: Post[]
    following: Post[]
    user: Post[]
    loading: boolean
    feed: "all" | "following" | "user"
  }
  dispatchLoading: (it: State["loading"]) => void
  dispatchLoadingData: (it: State["data"]["loading"]) => void
  dispatchPosts: (it: State["data"]["posts"]) => void
  dispatchFollowingPosts: (it: State["data"]["following"]) => void
  dispatchUserPosts: (it: State["data"]["user"]) => void
  dispatchFeedType: (it: State["data"]["feed"]) => void
  dispatchNewPost: (it: Post) => void
  dispatchRestartDayPostCount: () => void
  dispatchFollowingList: (it: User["following"]) => void
}
