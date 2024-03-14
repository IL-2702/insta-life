import { ForgotPassword } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <ForgotPassword {...useContainer()} />

export type ForgotPasswordProps = ReturnType<typeof useContainer>
