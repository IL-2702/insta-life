import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { EmailLinkExpired } from '@/widgets/auth/emailLinkExpired'

const ConfirmationLinkExpiredPage = () => {
  return <EmailLinkExpired.widget />
}

export default ConfirmationLinkExpiredPage
ConfirmationLinkExpiredPage.getLayout = getBaseLayout
