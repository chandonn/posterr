import "./ProfilePicture.styles.css"

export function ProfilePicture({ src }: { src?: string }) {
  return (
    <picture className="profile-picture">
      <img src={src} alt="" />
    </picture>
  )
}