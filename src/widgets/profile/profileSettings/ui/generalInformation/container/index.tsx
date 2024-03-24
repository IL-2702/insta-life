import { GeneralInformation } from '../ui/GeneralInformation'
import { useContainer } from './useContainer'

export const Container = () => <GeneralInformation {...useContainer()} />

export type GeneralInformationProps = ReturnType<typeof useContainer>
