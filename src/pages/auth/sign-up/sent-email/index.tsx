import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import SignUp from '@/pages/auth/sign-up'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Typography } from '@/shared/ui/Typography/Typography'

type props = {
  email: string
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  modalHandler: (isOpen: boolean) => void
  title: string
}
const EmailSentModal = ({ email, isOpen, modalHandler, title = 'Email sent' }: props) => {
  return (
    <Modal modalHandler={modalHandler} open title={title}>
      <Typography variant={'regular16'}>
        We have sent a link to confirm your email to {email ? email : 'your email'}
      </Typography>
    </Modal>
  )
}

export default EmailSentModal
