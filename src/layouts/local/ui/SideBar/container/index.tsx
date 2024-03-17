import { SideBar } from '../ui'
import { useContainer } from './useContainer'

export const Container = () => <SideBar {...useContainer()} />

export type SideBarProps = ReturnType<typeof useContainer>
