import { useDispatch, useSelector } from "react-redux";
import { selectMySpace } from "../../store/user/selectors";
import { EditSpaceForm, Story } from "../../components";
import "./styles.css";
import { deleteStory } from "../../store/user/thunks";
import { PostStoryForm } from "../../components";
import { Button } from "../../styled";

const MySpace = () => {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMySpace);

  // Feature 4: Delete story from MySpace
  const onDelete = (id) => {
    console.log("Deleting story", id);
    dispatch(deleteStory(id));
  };

  if (!mySpace) return <div>Loading..</div>;

  return (
    <div
      style={{
        backgroundColor: mySpace.backgroundColor,
        color: mySpace.color,
      }}
      className="container-myspace"
    >
      <h1>My space: {mySpace.title}</h1>
      <p>{mySpace.description}</p>
      <span>
        <Button>EDIT MY SPACE</Button> <Button>POST A NEW STORY BRO</Button>
      </span>

      <EditSpaceForm />
      <PostStoryForm />

      {mySpace.stories.map((story, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: mySpace.backgroundColor,
              color: mySpace.color,
              width: "50%",
            }}
          >
            <Story
              id={story.id}
              name={story.name}
              content={story.content}
              imageUrl={story.imageUrl}
            />
            <Button
              style={{ margin: "1rem" }}
              onClick={() => {
                onDelete(story.id);
              }}
            >
              Delete story
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export { MySpace };
