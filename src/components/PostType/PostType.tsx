import { Post } from "../../models/Post";
import { Repost } from "../Repost/Repost";
import { Quote } from "../Quote/Quote";
import { SinglePost } from "../Post/Post";

export function PostType(props: Post) {

  switch (props.type) {
    case "REPOST": return (<Repost {...props} />)
    case "QUOTE": return (<Quote {...props} />)
    default: return (<SinglePost {...props} />)
  }
}
