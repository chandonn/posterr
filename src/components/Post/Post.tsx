import { useContext, useEffect, useState } from "react";
import { Post } from "../../models/Post";
import { Card } from "../Card/Card";
import { User } from "../../models/User";
import { createNewQuotePost, createNewRepost, fetchUserData } from "../../services";
import { Button } from "../Button/Button";
import "./Post.styles.css"
import { Store } from "../../store/state";
import { IconButton } from "../IconButton/IconButton";
import { PostHeader } from "../PostHeader/PostHeader";

export function SinglePost({
  uuid,
  userId,
  content,
  createdOn,
  hideActions,
  quoted
}: Post & { hideActions?: boolean, quoted?: boolean }) {
  const [user, setUser] = useState<User | null>(null)
  const [quoteContent, setQuoteContent] = useState<string>("")
  const { dispatchNewPost, activeUser, dayPostCount } = useContext(Store)
  const disabledPostCreation = dayPostCount === 5

  useEffect(() => {
    fetchUserData(userId).then(response => setUser(response))
  }, [userId])

  function onQuotePost(): void {
    createNewQuotePost({ content: quoteContent, activeUser, originalPostId: uuid }).then(post => {
      setQuoteContent("")
      dispatchNewPost(post)
    })
  }

  function onRepost(): void {
    createNewRepost({ activeUser, originalPostId: uuid }).then(post => {
      dispatchNewPost(post)
    })
  }

  if (!user) return null
  
  const postedDate = new Date(createdOn)

  return (
    <Card key={uuid} secondary={quoted}>
      <PostHeader user={user} date={postedDate} />

      <div className="post-content">{content}</div>

      {hideActions === true ? null : (
        <div className="post-action">

          <IconButton disabled={disabledPostCreation} action={onRepost} icon="repeat">
            <span>repost</span>
          </IconButton>
          <form>
            <input disabled={disabledPostCreation} value={quoteContent} onChange={e => setQuoteContent(e.target.value)} type="text" />
            <Button
                aria-label="Quote this post"
                aria-disabled={disabledPostCreation}
                disabled={disabledPostCreation}
                type="button"
                onClick={onQuotePost}
              >
              @quote
            </Button>
          </form>
        </div>
      )}
    </Card>
  )
}