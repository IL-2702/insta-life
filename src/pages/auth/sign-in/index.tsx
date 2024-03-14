import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { SignIn } from '@/widgets/auth/signIn'

const SignInPage = () => {
  return <SignIn.widget />
}

export default SignInPage
SignInPage.getLayout = getBaseLayout
