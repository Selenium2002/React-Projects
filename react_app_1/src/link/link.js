import unknownPerson from "./../assets/man.png";

function Link(props) {
    return(
        <>
            <a href={props.href} target="_blank" className="mx-2 hover:text-red-700 focus:text-red-900">{props.site}</a>
            <div className="p-8 my-5 max-w-m mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={unknownPerson} alt="User's Photo" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                        {props.name}
                        </p>

                        <p className="text-slate-500 font-medium">
                        {props.job}
                        </p>

                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold
                        rounded-full border border-purple-200 hover:text-white
                        35
                        hover:bg-purple-600 hover:border-transparent focus:outline-none
                        focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                    </div>
                </div>
                            
            </div>
        </>
    )
}

export default Link;