import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { EmailLinkExpired } from '@/widgets/auth/emailLinkExpired'

const EmailLinkExpiredPage = () => {
  return <EmailLinkExpired.widget />
}

export default EmailLinkExpiredPage
EmailLinkExpiredPage.getLayout = getBaseLayout
