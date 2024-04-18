import { ButtonHTMLAttributes } from "react";
import "./Button.styles.css"

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button className="button" { ...props }>
      {props.children}
    </button>
  )
}
