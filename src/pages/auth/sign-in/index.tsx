import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { SignInPage } from '@/widgets/auth/signIn'

const SignIn = () => {
  return <SignInPage.widget />
}

export default SignIn
SignIn.getLayout = getBaseLayout
