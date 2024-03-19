import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { PrivacyPolicy } from '@/widgets/auth/privacyPolicy'

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy.widget />
}

export default PrivacyPolicyPage
PrivacyPolicyPage.getLayout = getBaseLayout
