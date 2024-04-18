import {
  createBrowserRouter,
} from 'react-router-dom'
import { MainDecorator } from './Root/MainDecorator'
import { HomePage } from './HomePage/HomePage'
import { ProfilePage } from './ProfilePage/ProfilePage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainDecorator />,
      children: [
        {
          path: '',
          element: <HomePage feed="all" />
        },
        {
          path: 'all',
          element: <HomePage feed="all" />
        },
        {
          path: 'following',
          element: <HomePage feed="following" />
        },
        {
          path: 'profile/:uuid',
          element: <ProfilePage />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        }
      ]
    }
  ]
)

export const routerItems = [
  {
    icon: "home",
    path: 'all',
    title: "All posts"
  },
  {
    icon: "activity",
    path: 'following',
    title: "Following"
  },
  {
    icon: "user",
    path: "profile",
    title: "Profile"
  }
]

export default router
