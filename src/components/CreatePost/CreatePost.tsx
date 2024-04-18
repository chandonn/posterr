import { useContext, useState } from "react"
import "./CreatePost.styles.css"
import { Button } from "../Button/Button"
import { Store } from "../../store/state"
import { ProfilePicture } from "../ProfilePicture/ProfilePicture"
import { Card } from "../Card/Card"
import { createNewPost } from "../../services"

export function CreatePost() {
  const [content, setContent] = useState<string>("")
  const { activeUser, dispatchNewPost, dayPostCount } = useContext(Store)
  const disabledPostCreation = dayPostCount === 5
  const isPostTooLong = content.length > 777

  function onCreateNewPost() {
    if (isPostTooLong) return

    createNewPost({ content, activeUser }).then(post => {
      setContent("")
      dispatchNewPost(post)
    })
  }

  return (
    <div className="create-post">
      <Card>
        <form>
          <h3>New Post</h3>

          <div className="create-post-content">
            <ProfilePicture src={activeUser?.profilePicture} />
            <textarea
              aria-label="Content for the new post"
              aria-disabled={disabledPostCreation}
              disabled={disabledPostCreation}
              placeholder="Share something..."
              onChange={e => setContent(e.target.value)}
              name="post-content"
              id="post-content"
              value={content}
              cols={30}
              rows={5}
            />
          </div>

          <div className="create-post-action">
            {isPostTooLong ? (
              <span className="disabled">Posts are limited to 777 characters</span>
            ) : null}

            {disabledPostCreation ? (
              <span className="disabled">Posts are limited at 5 per day</span>
            ) : (
              <span className={isPostTooLong ? "disabled" : ""}>{777 - content.length}</span>
            )}

            <Button
              aria-label="Create a new post button"
              aria-disabled={disabledPostCreation}
              disabled={disabledPostCreation}
              type="button"
              onClick={onCreateNewPost}
            >
              share
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
