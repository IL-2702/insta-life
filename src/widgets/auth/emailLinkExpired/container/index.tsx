import { EmailLinkExpired } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <EmailLinkExpired {...useContainer()} />

export type EmailLinkExpiredContainerProps = ReturnType<typeof useContainer>
