import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

export default function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="bg-white border border-gray-100 rounded-md p-6 sm:p-8 md:p-12 flex-1 max-w-lg sm:max-w-2xl md:max-w-4xl text-center">
        <Heading as="h1" className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">
          The page you are looking for could not be found 😢
        </Heading>
        <button
          onClick={moveBack}
          className="text-base sm:text-lg md:text-xl font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

