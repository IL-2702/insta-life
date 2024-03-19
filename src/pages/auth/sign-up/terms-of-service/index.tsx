import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { TermsOfService } from '@/widgets/auth/termsOfServices'

const TermsOfServicePage = () => {
  return <TermsOfService.widget />
}

export default TermsOfServicePage
TermsOfServicePage.getLayout = getBaseLayout
