const PlayerUi = (props) => {
    return (
        <div class="m-8 py-8 px-8 max-w-xs mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div class="text-center space-y-2 sm:text-center ">
                <img class="block mx-auto object-center h-24 rounded-full  sm:shrink-0" src={props.img} alt="Player Face" />
                <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">
                    {props.name} 
                </p>
                <p class="text-slate-500 font-medium">
                <span class="italic ...">Specialization : </span>{props.role}
                </p>
                <p class="text-slate-500 font-medium">
                <span class="italic ...">MatchesPlayed : </span>{props.matchsPlayed}
                </p>
                <p class="text-slate-500 font-medium">
                <span class="italic ...">RunsScored : </span>{props.runsScored}
                </p>
                </div>
            </div>
        </div>
    );
}
export default PlayerUi;