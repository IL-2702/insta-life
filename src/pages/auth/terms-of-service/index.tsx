import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { TermsOfService } from '@/widgets/auth/termsOfServices'

const TermsOfServicePage = () => {
  return <TermsOfService.widget />
}

TermsOfServicePage.getLayout = getBaseLayout
export default TermsOfServicePage
