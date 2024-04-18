import { Link } from "react-router-dom";
import "./Logo.styles.css"

export function Logo() {
  return (
    <div aria-label="Posterr Logo" className="logo">
      <Link aria-label="Link to homepage" to="all">
        <i aria-hidden data-feather="zap"></i>
      </Link>
    </div>
  )
}