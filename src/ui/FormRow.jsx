

export default function FormRow({ children, label, error}){

    return (
        <div className={`grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6 py-3 ${!error && 'border-b border-gray-200'}
        ${!label ? 'justify-end flex gap-3' : ''} ${!label && 'py-0'}`}>
            {label && (<label htmlFor={children.props.id} className="font-medium">{label}</label>)}
            {children}
            {error && (<span className="text-red-700 text-base">{error}</span>)}
        </div>
    )
}