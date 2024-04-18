import { useContext, useEffect, useState } from "react";
import { Post } from "../../models/Post";
import { User } from "../../models/User";
import { fetchSinglePost, fetchUserData } from "../../services";
import "./Repost.styles.css"
import { PostType } from "../PostType/PostType";
import { Store } from "../../store/state";

export function Repost({
  uuid,
  userId,
  createdOn,
  originalPost,
}: Post) {
  const [user, setUser] = useState<User | null>(null)
  const [originalPostData, setOriginalPostData] = useState<Post | undefined>()
  const { data: { posts } } = useContext(Store)
  
  useEffect(() => {
    if (originalPost)
    fetchSinglePost(originalPost, posts).then(response => setOriginalPostData(response))
    fetchUserData(userId).then(response => setUser(response))
  }, [originalPost, userId])

  if (user && originalPostData) {
    const postedOn = new Date(createdOn)
    const postedOnString = `${postedOn.toLocaleString("default", { month: "long" })} ${postedOn.getDate()}, ${postedOn.getFullYear()}`
    
    return (
      <article key={uuid} className="repost">
        <h5>{`${user.name} reposted, ${postedOnString}`}</h5>
          
        <PostType {...originalPostData} />
      </article>
    )    
  } else {
    return null
  }
}