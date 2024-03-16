import { useEffect, useState } from 'react'

import { Url } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'

const useSafePush = () => {
  const [onChanging, setOnChanging] = useState(false)
  const handleRouteChange = () => {
    setOnChanging(false)
  }
  const router = useRouter()
  // safePush is used to avoid route pushing errors when users click multiple times or when the network is slow:  "Error: Abort fetching component for route"
  const safePush = (url: Url, as?: Url, options?: TransitionOptions): Promise<boolean> | void => {
    if (onChanging) {
      return
    }
    setOnChanging(true)
    router.push(url, as, options)
  }

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router, setOnChanging])

  return { safePush }
}

export default useSafePush

interface TransitionOptions {
  locale?: false | string
  scroll?: boolean
  shallow?: boolean
  unstable_skipClientCache?: boolean
}
