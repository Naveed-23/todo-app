
export default function Button({ children, onClick }) {
    return (
      <div className="flex justify-center items-center pt-8">
        <button
          onClick={onClick}
          className="text-gray-50 font-bold gradient-bg p-3 md:p-5 rounded-full px-py transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400"
        >
          {children}
        </button>
      </div>
    );
  }

