import type { Preview } from '@storybook/react'
import '../src/styles/variables/index.scss'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/services/api";
import { rootReducer } from "@/app/store/store";

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  reducer: rootReducer,
})
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => (<Provider store={store} ><Story/></Provider>)]
}

export default preview
