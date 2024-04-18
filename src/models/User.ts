export type User = {
  uuid: string
  name: string
  username: string
  createdOn: number
  profilePicture: string
  profileBanner?: string
  followers: string[]
  following: string[]
  followersCount: number
  followingCount: number
}