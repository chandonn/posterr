import { Post } from "../models/Post"
import { User } from "../models/User"
import { State } from "../types/state"

export function loadingApplicationAction(state: State, payload: State["loading"]): State {
  return { ...state, loading: payload }
}

export function loadingDataAction(state: State, payload: State["data"]["loading"]): State {
  return { ...state, data: { ...state.data, loading: payload } }
}

export function changeFeedType(state: State, payload: State["data"]["feed"]): State {
  return { ...state, data: { ...state.data, feed: payload } }
}

export function postResultsAction(state: State, payload: State["data"]["posts"]): State {
  return {
    ...state,
    data: {
      ...state.data,
      loading: false,
      posts: [ ...payload ],
    },
  }
}

export function followingPostResultsAction(state: State, payload: State["data"]["following"]): State {
  return {
    ...state,
    data: {
      ...state.data,
      loading: false,
      following: [ ...payload ],
    },
  }
}

export function userPostResultsAction(state: State, payload: State["data"]["user"]): State {
  return {
    ...state,
    data: {
      ...state.data,
      loading: false,
      user: [ ...payload ],
    },
  }
}

export function addNewPostAction(state: State, payload: Post): State {
  return {
    ...state,
    dayPostCount: state.dayPostCount + 1,
    lastPostCreatedOn: payload.createdOn,
    data: {
      ...state.data,
      posts: [ payload, ...state.data.posts ]
    }
  }
}

export function restartDayPostCount(state: State): State {
  return {
    ...state,
    dayPostCount: 0,
  }
}

export function updateUserFollowingListAction(
  state: State, payload: User["following"]
): State {
  if (state.activeUser) {
    return {
      ...state,
      activeUser: {
        ...state.activeUser,
        following: payload,
        followingCount: payload.length,
      },
    }
  } else {
    return state
  }
}
