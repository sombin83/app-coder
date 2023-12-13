
const Boton =({children, className='', ...args})=>{

    return(

        <button
        className={`rounded py-1 px-4 bg-amber-950 text-white text-center no-underline visited:text-white ${className}`}
        {...args}
        >
            {children}
        </button>

    )


}

export default Boton