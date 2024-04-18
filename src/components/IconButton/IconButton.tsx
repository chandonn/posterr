import { ReactNode, useEffect } from "react"
import feather from "feather-icons"
import "./IconButton.styles.css"

export function IconButton(
  { children, icon, action, disabled }
  : { children: ReactNode, icon: string, action: VoidFunction, disabled?: boolean }
) {
  useEffect(() => {
    feather.replace()
  }, [])

  return (
    <button disabled={disabled} type="button" className="icon-button" onClick={action}>
      <i aria-hidden data-feather={icon}></i>
      {children}
    </button>
  )
}
