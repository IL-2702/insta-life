import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { EmailLinkExpired } from '@/widgets/auth/emailLinkExpired'

const VerificationLinkExpiredPage = () => {
  return <EmailLinkExpired.widget />
}

export default VerificationLinkExpiredPage
VerificationLinkExpiredPage.getLayout = getBaseLayout
