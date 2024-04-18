import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"
import { UserInfo } from "../UserInfo/UserInfo"
import "./Sidebar.styles.css"

export function Sidebar() {
  return (
    <header className="sidebar">
      <aside>
        <div>
          <Logo />
          <Navigation />
        </div>

        <UserInfo />
      </aside>
    </header>
  )
}