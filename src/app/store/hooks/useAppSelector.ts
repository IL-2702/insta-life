import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../types/rootState'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
