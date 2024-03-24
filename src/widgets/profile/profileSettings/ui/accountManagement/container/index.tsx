import { AccountManagement } from '../ui/AccountManagement'
import { useContainer } from './useContainer'

export const Container = () => <AccountManagement {...useContainer()} />

export type AccountManagementProps = ReturnType<typeof useContainer>
