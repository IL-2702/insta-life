import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { ForgotPassword } from '@/widgets/auth/forgotPassword'

const ForgotPasswordPage = () => {
  return <ForgotPassword.widget />
}

export default ForgotPasswordPage
ForgotPasswordPage.getLayout = getBaseLayout
