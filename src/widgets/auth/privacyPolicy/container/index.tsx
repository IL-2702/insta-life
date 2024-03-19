import { PrivacyPolicy } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <PrivacyPolicy {...useContainer()} />

export type PrivacyPolicyProps = ReturnType<typeof useContainer>
