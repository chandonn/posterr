import { NavLink } from "react-router-dom";
import { routerItems } from "../../screens";
import "./Navigation.styles.css"

export function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {routerItems.map((it, i) => 
          <NavLink key={i} to={it.path}>
            <li>
              <i aria-hidden data-feather={it.icon}></i>
              <span>
                {it.title}
              </span>
            </li>
          </NavLink>
        )}
      </ul>
    </nav>
  )
}