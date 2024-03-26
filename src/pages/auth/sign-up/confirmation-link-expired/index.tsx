import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { ConfirmationLinkExpired } from '@/widgets/auth/confirmationLinkExpired'

const ConfirmationLinkExpiredPage = () => {
  return <ConfirmationLinkExpired.widget />
}

export default ConfirmationLinkExpiredPage
ConfirmationLinkExpiredPage.getLayout = getBaseLayout
