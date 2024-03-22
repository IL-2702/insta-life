import { Devices } from '../ui/Devices'
import { useContainer } from './useContainer'

export const Container = () => <Devices {...useContainer()} />

export type DevicesProps = ReturnType<typeof useContainer>
