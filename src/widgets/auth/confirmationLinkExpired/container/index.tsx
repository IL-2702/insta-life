import { ConfirmationLinkExpired } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <ConfirmationLinkExpired {...useContainer()} />

export type ConfirmationLinkExpiredContainerProps = ReturnType<typeof useContainer>
