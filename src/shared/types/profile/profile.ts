export type Profile = {
  aboutMe: string
  avatars: Avatar[]
  city: string
  createdAt: string
  dateOfBirth: string
  firstName: string
  id: null | number
  lastName: string
  userName: string
}
export type Avatar = {
  fileSize: number
  height: number
  url: string
  width: number
}
