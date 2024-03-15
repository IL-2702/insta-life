import { SignUpConfirmation } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <SignUpConfirmation {...useContainer()} />

export type SignUpConfirmationProps = ReturnType<typeof useContainer>
