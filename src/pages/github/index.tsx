import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { useRouter } from "next/router";
import { useAppDispatch } from "@/app/store/hooks/useAppDispatch";
import { authActions } from "@/services/authService/store/slice/authEndpoints.slice";
import { useLayoutEffect } from "react";

const HomePage = () => {
  const {query} = useRouter()
  const dispatch = useAppDispatch()




  useLayoutEffect(()=>{
    query.accessToken && dispatch(authActions.setAccessToken(query.accessToken as string))
  },[query])
  return <div>githubPROVIDER</div>
}

HomePage.getLayout = getBaseLayout
export default HomePage
