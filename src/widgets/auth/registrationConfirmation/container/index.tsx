import { useContainer } from '@/widgets/auth/registrationConfirmation/container/useContainer'
import { RegistrationConfirmation } from 'src/widgets/auth/registrationConfirmation/ui/RegistrationConfirmation'

export const Container = () => <RegistrationConfirmation {...useContainer()} />

export type RegistrationConfirmationProps = ReturnType<typeof useContainer>
