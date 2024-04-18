import { Store } from "../../store/state"
import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import feather from "feather-icons"
import "./MainDecorator.styles.css"
import { Footer } from "../../components/Footer/Footer"
import { PageHeader } from "../../components/PageHeader/PageHeader"

export const MainDecorator = () => {
  const {
    loading,
  } = useContext(Store)

  useEffect(() => {
    feather.replace();
  }, [])

  if (loading) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div className="decorator">
        <Sidebar />

        <main>
          <div>
            <PageHeader />
            <Outlet />
          </div>

          <Footer />
        </main>
      </div>
    )
  }
}
