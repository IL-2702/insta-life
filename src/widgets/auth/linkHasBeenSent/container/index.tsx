import { LinkHasBeenSent } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <LinkHasBeenSent {...useContainer()} />

export type LinkHasBeenSentProps = ReturnType<typeof useContainer>
