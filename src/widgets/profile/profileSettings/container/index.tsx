import { ProfileSettings } from '../ui/ProfileSettings'
import { useContainer } from './useContainer'

export const Container = () => <ProfileSettings {...useContainer()} />

export type ProfileSettingsProps = ReturnType<typeof useContainer>
