import { ProfileInfo } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <ProfileInfo {...useContainer()} />
export type ProfileInfoProps = ReturnType<typeof useContainer>
