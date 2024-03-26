import { UploadUserPhoto } from '../ui/UploadUserPhoto'
import { useContainer } from './useContainer'

export const Container = () => <UploadUserPhoto {...useContainer()} />

export type UploadUserPhotoProps = ReturnType<typeof useContainer>
