import { useSelector } from "react-redux";
import { selectMySpace } from "../../store/user/selectors";
import { Story } from "../../components/Story";
import "./styles.css";

const MySpace = () => {
  const mySpace = useSelector(selectMySpace);
  console.log("mySpace?", mySpace);

  if (!mySpace) return <div>Loading..</div>;

  return (
    <div className="container-myspace">
      <h1>My space: {mySpace.title}</h1>
      <p>{mySpace.description}</p>
      <br />
      <hr />
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
          </div>
        );
      })}
    </div>
  );
};

export { MySpace };
