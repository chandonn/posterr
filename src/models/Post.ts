import { PostType } from "./Support"
import { User } from "./User"

export interface Post {
  uuid: string
  userId: User["uuid"]
  content?: string
  type: PostType
  createdOn: number
  originalPost?: Post["uuid"]
}