import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { SignUp } from '@/widgets/auth/signUp'

const SignUpPage = () => {
  return <SignUp.widget />
}

export default SignUpPage
SignUpPage.getLayout = getBaseLayout
