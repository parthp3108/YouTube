import "./App.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store";
import Body from "./components/Body";
import Head from "./components/Head";
import  MainComponent from "./components/MainComponent"
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[{
      path:"/",
      element:<MainComponent />
    },
    {
      path:"/watch",
      element:<WatchPage />
    },
    ]
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
