export default function FormButton({ children, size = 'medium', variation = 'primary', ...props }) {
    const sizeClasses = {
        small: "gradient-bg text-xs py-1 px-2 uppercase font-semibold text-center w-24 sm:w-auto",
        medium: "gradient-bg text-sm py-3 px-4 font-medium w-24 sm:w-auto",
        login: "gradient-bg text-sm py-3 px-4 font-medium w-full sm:w-[24rem]",
        large: "gradient-bg text-base py-3 px-6 font-medium w-full sm:w-auto",
    };
  
    const variationClasses = {
        primary: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
        secondary: "transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400",
        danger: "transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400",
    };
  
    return (
        <button
            className={`border-none mt-2 rounded-lg shadow-sm ${sizeClasses[size]} ${variationClasses[variation]} ${props.className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
  }
  


// export default function FormButton({ children, size = 'medium', variation = 'primary', ...props }) {
//   const sizeClasses = {
//       small: "gradient-bg text-xs py-1 px-2 uppercase font-semibold text-center",
//       medium: "gradient-bg text-sm py-3 px-4 font-medium w-full sm:w-auto",
//       login: "gradient-bg text-sm py-3 px-4 font-medium w-full sm:w-[24rem]",
//       large: "gradient-bg text-base py-3 px-6 font-medium w-full sm:w-auto",
//   };

//   const variationClasses = {
//       primary: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
//       secondary: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
//       danger: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
//   };

//   return (
//       <button
//           className={`border-none mt-2 rounded-lg shadow-sm ${sizeClasses[size]} ${variationClasses[variation]}`}
//           {...props}
//       >
//           {children}
//       </button>
//   );
// }



// export default function FormButton({ children, size = 'medium', variation = 'primary', ...props }) {
//     const sizeClasses = {
//       small: "gradient-bg text-xs py-1 px-2 uppercase font-semibold text-center",
//       medium: "gradient-bg text-sm py-3 px-4 font-medium",
//       login: "gradient-bg text-sm py-3 px-4 font-medium w-[24rem]",
//       large: "gradient-bg text-base py-3 px-6 font-medium",
//     };
  
//     const variationClasses = {
//       primary: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
//       secondary: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
//       danger: "transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400",
//     };
  
//     return (
//       <button
//         className={`border-none mt-2 rounded-lg shadow-sm ${sizeClasses[size]} ${variationClasses[variation]}`}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   }
  