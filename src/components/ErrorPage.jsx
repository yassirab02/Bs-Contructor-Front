import { useRouteError } from "react-router-dom";
import errorImage from "../assets/error-img.png"; // Make sure to have an SVG file in the mentioned path

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src={errorImage} alt="Error" className="w-64 h-64 mb-4" />
      <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!</h1>
      <p className="text-lg text-gray-700 mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <a
        href="/home"
        className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
      >
        Go back to Home
      </a>
    </div>
  );
}
