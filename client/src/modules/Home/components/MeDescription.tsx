export function MeDescription() {
    return(
        <div className="flex flex-col gap-6 max-w-80 md:max-w-xl ">
            <h1 className="text-center md:text-left text-[clamp(2rem,3vw+1rem,4.6875rem)] font-bold">Hi, I'm Artem</h1>
            <p className=" text-center md:text-left xl:max-w-2xl text-[clamp(1rem,1vw+0.6rem,1.5rem)] text-[#6F6F6F]"><span className="text-white font-bold">Fullstack developer.</span> I build web services end to end — from the database schema to the interface. I designed and wrote my first commercial project alone: payment integration, role-based access, event-driven order routing, and a Telegram bot with an admin panel. Now moving deeper into backend, writing in Go.</p>
        </div>
)}