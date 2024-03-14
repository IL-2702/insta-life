import { CreateNewPassword } from '@/widgets/auth/createNewPassword/ui/CreateNewPassword'

export default function CreateNewPasswordPage() {
  const onSubmit = (data: { password: string }) => {
    return
  }

  return <CreateNewPassword onSubmit={onSubmit} />
}
