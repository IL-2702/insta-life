import { RegistrationConfirmation } from '../ui/RegistrationConfirmation'
import { useContainer } from './useContainer'

export const Container = () => <RegistrationConfirmation {...useContainer()} />

export type RegistrationConfirmationProps = ReturnType<typeof useContainer>
