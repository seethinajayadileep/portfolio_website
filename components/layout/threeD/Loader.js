import { forwardRef } from 'react'

export const LoaderContainer = forwardRef(({ children, loading }, ref) => (
    <>
        <div className={`${loading ? 'opacity-100 z-[10010]' : 'opacity-0 pointer-events-none z-[9999]'} fixed flex justify-center items-center h-screen w-screen bg-black transition-all duration-[2500ms]`}>
            <div className={`${loading ? 'opacity-100' : 'opacity-0'} lds-ring absolute transition-all duration-1000`}>
                <div/><div/><div/><div/>
            </div>
        </div>
        <div ref={ref} className='absolute inset-0 z-[100] flex justify-center items-center w-full h-full pointer-events-none'>
            {children}
        </div>
    </>
))