import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { LinkHasBeenSent } from '@/widgets/auth/linkHasBeenSent'

const LinkHasBeenSentPage = () => {
  return <LinkHasBeenSent.widget />
}

export default LinkHasBeenSentPage
LinkHasBeenSentPage.getLayout = getBaseLayout
