import { useContext, useEffect, useState } from "react";
import { Post } from "../../models/Post";
import { Card } from "../Card/Card";
import { User } from "../../models/User";
import { createNewQuotePost, createNewRepost, fetchSinglePost, fetchUserData } from "../../services";
import { Button } from "../Button/Button";
import { Store } from "../../store/state";
import { IconButton } from "../IconButton/IconButton";
import { PostHeader } from "../PostHeader/PostHeader";
import { SinglePost } from "../Post/Post";
import "./Quote.styles.css"

export function Quote({
  uuid,
  userId,
  content,
  createdOn,
  originalPost,
}: Post) {
  const [user, setUser] = useState<User | null>(null)
  const [quoteContent, setQuoteContent] = useState<string>("")
  const { dispatchNewPost, activeUser, dayPostCount, data: { posts } } = useContext(Store)
  const [originalPostData, setOriginalPostData] = useState<Post | undefined>()

  const disabledPostCreation = dayPostCount === 5

  useEffect(() => {
    if (originalPost)
    fetchSinglePost(originalPost, posts).then(response => setOriginalPostData(response))
    fetchUserData(userId).then(response => setUser(response))
  }, [originalPost, userId])

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

  if (user && originalPostData) {
    const postedDate = new Date(createdOn)

    return (
      <Card key={uuid}>
        <PostHeader user={user} date={postedDate} />

        <div className="post-content">{content}</div>

        <SinglePost {...originalPostData} hideActions quoted />

        <div className="post-action">
          <IconButton disabled={disabledPostCreation} action={onRepost} icon="repeat">
            <span>repost</span>
          </IconButton>

          <form key={uuid}>
            <input name="quote-content" disabled={disabledPostCreation} value={quoteContent} onChange={e => setQuoteContent(e.target.value)} type="text" />
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
      </Card>
    )
  } else {
    return null
  }
}
