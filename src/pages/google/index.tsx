import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { Spinner } from '@/shared/ui/Spinner'

const GooglePage = () => {
  return (
    <div>
      <Spinner />
    </div>
  )
}

GooglePage.getLayout = getBaseLayout
export default GooglePage
