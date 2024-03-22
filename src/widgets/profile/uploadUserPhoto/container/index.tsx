import { FC } from 'react'

import { useContainer } from '@/widgets/profile/uploadUserPhoto/container/useContainer'

import { UploadUserPhoto } from '../ui/UploadUserPhoto'

export const Container: FC = () => <UploadUserPhoto {...useContainer()} />

export type UploadUserPhotoProps = ReturnType<typeof useContainer>
