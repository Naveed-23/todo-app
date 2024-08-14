import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Intro from "../ui/Intro";

export default function Home() {
    const navigate = useNavigate();
  
    return (
      <>
        <div className="text-slate-100 text-4xl md:text-6xl flex flex-col justify-center items-center pt-10 space-x-0 md:space-x-4 px-4 md:px-10 text-center md:text-left">
          <Intro />
        </div>
        <Button onClick={() => navigate('/todos')}>
          Start Your First Todo!
        </Button>
      </>
    );
  }
