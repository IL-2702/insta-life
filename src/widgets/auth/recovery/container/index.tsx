import { FC } from 'react'

import { useContainer } from '@/widgets/auth/recovery/container/useContainer'

import { Recovery } from '../ui/Recovery'

export const Container: FC<RecoveryProps> = () => <Recovery {...useContainer()} />

export type RecoveryProps = ReturnType<typeof useContainer>
