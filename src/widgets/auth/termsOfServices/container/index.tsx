import { TermsOfService } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <TermsOfService {...useContainer()} />

export type TermsOfServiceProps = ReturnType<typeof useContainer>
