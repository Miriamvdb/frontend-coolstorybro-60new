import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpaceDetails } from "../../store/space/thunks";
import "./styles.css";

const MySpace = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container-myspace">
      <h1>My space</h1>
    </div>
  );
};

export { MySpace };
