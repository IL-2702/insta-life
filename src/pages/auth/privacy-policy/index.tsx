import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { PrivacyPolicy } from '@/widgets/auth/privacyPolicy'

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy.widget />
}

PrivacyPolicyPage.getLayout = getBaseLayout
export default PrivacyPolicyPage
