import { TextFields } from '../ui/TextFields'
import { useContainer } from './useContainer'

export const Container = () => <TextFields {...useContainer()} />

export type TextFieldsProps = ReturnType<typeof useContainer>
