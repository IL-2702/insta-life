import { MyPayments } from '../ui/MyPayments'
import { useContainer } from './useContainer'

export const Container = () => <MyPayments {...useContainer()} />

export type MyPaymentsProps = ReturnType<typeof useContainer>
