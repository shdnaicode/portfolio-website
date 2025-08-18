import { Button } from "@/components/ui/button";


function Home() {
  return (
    <div className="z-50 flex justify-center items-center h-screen pb-[75px]">
      <div className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base h-[50vh] flex w-[50vw] border-2 px-15 text-sm sm:text-base">
        <div className="mt-15 flex-1">
          <h1 className="text-3xl">Shindanai Sudprasert</h1>
          <h3 className="text-lg font-medium pt-2">Student Developer</h3>
          <p className="text-base font-medium pt-6 max-w-lg leading-relaxed">
            "A student developer based in Thailand, aspiring to be a software
            engineer specialised in full-stack development..."
          </p>
          <div className="mt-10 flex flex-col">
            <h3 className="text-lg">
              Skills
            </h3>
            <ul>
              <li>
                <img src="/icons/react.svg" className="w-8 h-8" />
              </li>
              <li>
                 <img src=""/>
              </li>
              <li>
                 <img src=""/>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-15 border-2 border-black rounded-base bg-white font-base h-[15vh] w-[15vh] shadow-lg">
          <img
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
