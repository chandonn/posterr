import { PropsWithChildren, createContext, useState } from "react"
import {
  addNewPostAction,
  changeFeedType,
  followingPostResultsAction,
  loadingApplicationAction,
  loadingDataAction,
  postResultsAction,
  restartDayPostCount,
  updateUserFollowingListAction,
  userPostResultsAction,
} from "./actions"
import { State } from "../types/state"
import { Post } from "../models/Post"
import { users } from "../data/users"
import { posts } from "../data/posts"

const initialState: State = {
  activeUser: users[0],
  users: users,
  data: {
    posts: posts,
    following: [],
    user: [],
    feed: "all",
    loading: false,
  },
  loading: false,
  dayPostCount: 0,
  lastPostCreatedOn: 0,
  dispatchLoading: (it) => {},
  dispatchLoadingData: (it) => {},
  dispatchPosts: (it) => {},
  dispatchFollowingPosts: (it) => {},
  dispatchUserPosts: (it) => {},
  dispatchFeedType: (it) => {},
  dispatchNewPost: (it) => {},
  dispatchRestartDayPostCount: () => {},
  dispatchFollowingList: (it) => {},
}

export const Store = createContext(initialState)

export const Context = ({ children }: PropsWithChildren) => {
  const [applicationState, setApplicationState] = useState(initialState)

  const dispatchLoading = (it: State["dispatchLoading"]["arguments"]) => {
    setApplicationState(loadingApplicationAction(applicationState, it))
  }

  const dispatchLoadingData = (it: State["dispatchLoadingData"]["arguments"]) => {
    setApplicationState(loadingDataAction(applicationState, it))
  }

  const dispatchPosts = (it: State["dispatchPosts"]["arguments"]) => {
    setApplicationState(postResultsAction(applicationState, it))
  }

  const dispatchFollowingPosts = (it: State["dispatchFollowingPosts"]["arguments"]) => {
    setApplicationState(followingPostResultsAction(applicationState, it))
  }

  const dispatchUserPosts = (it: State["dispatchUserPosts"]["arguments"]) => {
    setApplicationState(userPostResultsAction(applicationState, it))
  }

  const dispatchFeedType = (it: State["dispatchFeedType"]["arguments"]) => {
    setApplicationState(changeFeedType(applicationState, it))
  }

  const dispatchFollowingList = (it: State["dispatchFollowingList"]["arguments"]) => {
    setApplicationState(updateUserFollowingListAction(applicationState, it))
  }

  const dispatchNewPost = (it: Post) => {
    setApplicationState(addNewPostAction(applicationState, it))
  }

  const dispatchRestartDayPostCount = () => {
    setApplicationState(restartDayPostCount(applicationState))
  }

  return (
    <Store.Provider value={Object.freeze({
      ...applicationState,
      dispatchLoading,
      dispatchLoadingData,
      dispatchPosts,
      dispatchFollowingPosts,
      dispatchUserPosts,
      dispatchNewPost,
      dispatchFeedType,
      dispatchRestartDayPostCount,
      dispatchFollowingList,
    })}>
      {children}
    </Store.Provider>
  )
}
