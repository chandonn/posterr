import { PropsWithChildren } from "react";
import "./Card.styles.css"

export function Card(props: PropsWithChildren & { secondary?: boolean }) {
  return (
    <article className={props.secondary ? "secondary-card" : "card"}>
      {props.children}
    </article>
  )
}