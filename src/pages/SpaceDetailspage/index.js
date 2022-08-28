import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Story } from "../../components";
import { selectSpaceDetails } from "../../store/space/selectors";
import { fetchSpaceDetails } from "../../store/space/thunks";
import "./styles.css";

const SpaceDetailspage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spaceDetails = useSelector(selectSpaceDetails);

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  if (!spaceDetails) return <div>Loading..</div>;

  // Sort over stories createdAt date
  const sortedStories = [...spaceDetails.stories].sort(
    (storyA, storyB) => new Date(storyA.createdAt) - new Date(storyB.createdAt)
  );

  return (
    <div className="container-spacedetailspage">
      <h1>Space details</h1>
      {sortedStories.map((story, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: spaceDetails.backgroundColor,
              color: spaceDetails.color,
              width: "50%",
            }}
          >
            <Story
              id={story.id}
              name={story.name}
              content={story.content}
              imageUrl={story.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export { SpaceDetailspage };
