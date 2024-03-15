import { CreateNewPassword } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <CreateNewPassword {...useContainer()} />

export type CreateNewPasswordProps = ReturnType<typeof useContainer>
