import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Notes from "./components/Notes";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import AddNote from "./components/AddNote";
import store from "./utils/redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
      <Header />
      <Outlet />
      </Provider>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Notes />,
          },
          {
            path: "/addnote",
            element: <AddNote />,
          },
        ],
      },
    ],
  },
]);

export default App;
