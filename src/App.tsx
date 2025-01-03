import { Router } from './Router';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './store/Store';


function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
