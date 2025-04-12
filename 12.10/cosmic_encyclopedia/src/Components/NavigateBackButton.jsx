import { useNavigate } from "react-router-dom";

function NavigateBackButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>⬅ Back</button>;
}

export default NavigateBackButton;