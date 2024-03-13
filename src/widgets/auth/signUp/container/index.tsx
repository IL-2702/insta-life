import { SignUp } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <SignUp {...useContainer()} />

export type SignUpProps = ReturnType<typeof useContainer>
