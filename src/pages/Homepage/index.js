import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpaceCard } from "../../components";
import { selectAllSpaces } from "../../store/space/selectors";
import { fetchAllSpaces } from "../../store/space/thunks";
import "./styles.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectAllSpaces);

  useEffect(() => {
    dispatch(fetchAllSpaces());
  }, [dispatch]);

  if (!allSpaces) return <div>Loading..</div>;

  return (
    <div className="container-homepage">
      <h1>Hello there 👋</h1>
      {allSpaces.map((space, index) => {
        return (
          <div key={index}>
            <SpaceCard
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Homepage };
