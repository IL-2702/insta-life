import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { SignUpConfirmation } from '@/widgets/auth/signUpConfirmation'

const SignUpConfirmationPage = () => {
  return <SignUpConfirmation.widget />
}

export default SignUpConfirmationPage
SignUpConfirmationPage.getLayout = getBaseLayout
