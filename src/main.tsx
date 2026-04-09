import App from './app'
import { store } from './hieghtRedux'
import './style.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
const rootDiv = document.querySelector('#root')
if (rootDiv) {
  createRoot(rootDiv).render(
    <>
      <Provider store={store}>
        <App></App>
      </Provider>
    </>
  )
}