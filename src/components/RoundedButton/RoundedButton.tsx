import { ReactNode } from "react";
import "./RoundedButton.styles.css"

export function RoundedButton(
  { children, icon, action, disabled, secondary }
  : { children: ReactNode, icon?: string, action: VoidFunction, disabled?: boolean, secondary?: boolean }
) {
  return (
    <button disabled={disabled} type="button" className={`${secondary && "secondary"} rounded-button`} onClick={action}>
      <i aria-hidden data-feather={icon}></i>
      {children}
    </button>
  )
}