import { posts } from "../data/posts";
import { users } from "../data/users";
import { Post } from "../models/Post";
import { User } from "../models/User";
import { State } from "../types/state";

export function fetchUserData(uuid: string): Promise<User> {
  return new Promise((resolve, reject) => {
    try {
      resolve(users.find(it => it.uuid === uuid) || {} as User)
    } catch (error) {
      throw new Error("Unable to load user data")
    }
  })
}

export function fetchPosts(currentPosts: State["data"]["posts"], feedType: State["data"]["feed"], activeUser: State["activeUser"]): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    try {
      let response: Post[] = []
      const list = currentPosts.length ? currentPosts : posts

      if (feedType === "following" && activeUser) {

        const following = new Set(activeUser.following)
        list.forEach(p => following.has(p.userId) && response.push(p))

      } else {
        response = [ ...list ]
      }

      resolve(response)
    } catch (error) {
      throw new Error("Unable to load posts")
    }
  })
}

export function fetchUserPosts(currentPosts: State["data"]["posts"], user: User): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    try {
      const list = currentPosts.length ? currentPosts : posts

      let response: Post[] = list.filter(p => user.uuid === p.userId)
      resolve(response)

    } catch (error) {
      throw new Error("Unable to load user posts")
    }
  })
}

export function fetchSinglePost(postId: Post["uuid"], currentPosts: State["data"]["posts"]): Promise<Post | undefined> {
  return new Promise((resolve, reject) => {
    try {
      const response = currentPosts.find(p => p.uuid === postId)

      resolve(response)
    } catch (error) {
      throw new Error("Unable to load posts")
    }
  })
}

export function createNewPost(data: { content: Post["content"], activeUser: State["activeUser"] }): Promise<Post> {
  return new Promise((resolve, reject) => {
    try {
      if (data.activeUser) {
        const post: Post = {
          uuid: crypto.randomUUID(),
          userId: data.activeUser.uuid,
          content: data.content,
          type: "POST",
          createdOn: new Date().valueOf()
        }
  
        resolve(post)
      } else {
      throw new Error("Unable to create post")
      }
    } catch (error) {
      throw new Error("Unable to create post")
    }
  })
}

export function createNewQuotePost(data: { content: Post["content"], activeUser: State["activeUser"], originalPostId: string }): Promise<Post> {
  return new Promise((resolve, reject) => {
    try {
      if (data.activeUser) {
        const post: Post = {
          uuid: crypto.randomUUID(),
          userId: data.activeUser.uuid,
          content: data.content,
          type: "QUOTE",
          createdOn: new Date().valueOf(),
          originalPost: data.originalPostId,
        }

        resolve(post)
      } else {
      throw new Error("Unable to quote")
      }
    } catch (error) {
      throw new Error("Unable to quote")
    }
  })
}

export function createNewRepost(data: { activeUser: State["activeUser"], originalPostId: string }): Promise<Post> {
  return new Promise((resolve, reject) => {
    try {
      if (data.activeUser) {
        const post: Post = {
          uuid: crypto.randomUUID(),
          userId: data.activeUser.uuid,
          type: "REPOST",
          createdOn: new Date().valueOf(),
          originalPost: data.originalPostId,
        }
  
        resolve(post)
      } else {
      throw new Error("Unable to repost")
      }
    } catch (error) {
      throw new Error("Unable to repost")
    }
  })
}

export function fetchExecuteFollowingAction(uuid: User["uuid"], user: User, action: boolean): Promise<User["following"]> {
  return new Promise((resolve, reject) => {
    try {
      if (action === true) {
        const following = user.following.concat([uuid])
        
        resolve(following)
      } else {
        const following = new Set(user.following)
        following.delete(uuid)
        
        resolve(Array.from(following))
      }
    } catch (error) {
      throw new Error("Unable to perform following action")
    }
  })
}