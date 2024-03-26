import { FC } from 'react'

import { UploadUserPhoto } from '../ui/UploadUserPhoto'
import { useContainer } from './useContainer'

export const Container: FC = () => <UploadUserPhoto {...useContainer()} />

export type UploadUserPhotoProps = ReturnType<typeof useContainer>
