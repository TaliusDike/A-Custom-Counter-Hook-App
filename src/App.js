import "./App.css";
import { lazy, Suspense } from "react";
import NavBar from "./Components/NavBar";

import { Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";


const Home = lazy(() => import("./HomePage/Home"));
const ErrorBoundaryTest = lazy(() =>
  import("./ErrorBoundaryTest/ErrorBoundaryTest")
);
const ErrorPageTest = lazy(() => import("./ErrorPageTest/ErrorPageTest"));

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      {/* <p>error.message</p> */}
      <p>An error occurred: {error.message}</p>
      <button onClick={() => resetErrorBoundary}>Reset App</button>
    </div>
  );
};

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <HelmetProvider>
        <NavBar />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => navigate("/")}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/errorboundarytest"
                element={<ErrorBoundaryTest />}
              />
              <Route path="/404errortest" element={<ErrorPageTest />} />
              <Route path="*" element={<ErrorPageTest />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        
      </HelmetProvider>
    </div>
  );
}

export default App;
