import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const ProducsPage = () => {
  const { id } = useParams();
  const [params] = useSearchParams();

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      Products Page {id || 1} {params.get("sort")}
      <button onClick={() => onLogout()}> Logout </button>
    </div>
  );
};
