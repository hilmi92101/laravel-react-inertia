const Header3 = ({ text }) => (
    <div className='flex items-center justify-center'>
        <div className='w-full max-w-6xl px-2 py-2 mx-auto rounded-lg'>
            <div className='max-w-3xl mx-auto space-y-6'>
                <h2 className="flex flex-row flex-nowrap items-center my-8">
                    <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    <span className="flex-none block mx-4 px-4 py-2.5 leading-none font-medium uppercase text-xl sm:text-2xl md:text-3xl">
                        { text }
                    </span>
                    <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                </h2>

            </div>
        </div>
    </div>
);

export default Header3;
