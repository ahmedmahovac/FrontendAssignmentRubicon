import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/movies");
  }, []);

  return <div></div>;
}

export default Home;
