
export default function Form({ children, type, ...props }) {
    return (
        <form
            {...props}
            className={`${type === 'regular' ? 'p-6 bg-gray-50 border-gray-200 rounded-md' : ''} 
            ${type === 'modal' ? 'w-full sm:w-[24rem] md:w-[30rem]' : ''} overflow-hidden text-base`}
        >
            {children}
        </form>
    );
}

