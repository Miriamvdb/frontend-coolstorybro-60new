import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpaceDetails } from "../../store/space/thunks";
import "./styles.css";

const SpaceDetailspage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container-spacedetailspage">
      <h1>Space details page 👋</h1>
    </div>
  );
};

export default SpaceDetailspage;
