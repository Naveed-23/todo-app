import Heading from "./Heading";

export default function Intro() {
    return (
      <>
        <div className="text-center md:text-left text-3xl md:text-6xl">
          <span>Master </span>
          <Heading size="inline-block text-3xl md:text-6xl">Your Tasks</Heading>
          <span> with the Best</span>
          <br className="hidden md:block" /> {/* Line break on larger screens */}
          <span className="lg:pl-20">
          <Heading size="inline-block text-3xl md:text-6xl">Todo Tool</Heading>
          <span> on the Internet!</span>
          </span>
        </div>
        <div className="text-center md:text-left opacity-50 text-base md:text-xl pt-4">
          Fully Functional Todo App: Create, View, Update, Delete,
          <br />
          <span className="lg:pl-20">
          and Search Your Tasks with Ease!
          </span>
        </div>
      </>
    );
  }
  
