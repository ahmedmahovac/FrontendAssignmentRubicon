import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/shows");
  }, []);

  return <div></div>;
}

export default Home;
