import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewStory } from "../../store/user/thunks";
import { Button, Input } from "../../styled";

const PostStoryForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://www.foliebrie.nl/wp-content/uploads/2021/04/empty.jpg"
  ); // This is the preview picture (with alt="preview" below)

  const submitNewStory = (event) => {
    event.preventDefault();
    dispatch(postNewStory(name, content, imageUrl));
    console.log(name, content, imageUrl);

    setName("");
    setContent("");
  };

  return (
    <div>
      <h3>Post a cool story:</h3>
      <form onSubmit={submitNewStory}>
        <p>
          <Input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name story"
          />
        </p>
        <p>
          <Input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Tell a cool story!"
          />
        </p>
        <p>
          <Input
            type="text"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Paste image URL here!"
          />
        </p>
        {imageUrl ? (
          <img src={imageUrl} alt="preview" style={{ width: "300px" }} />
        ) : null}
        <br />
        <Button type="submit">Submit story!</Button>
      </form>
    </div>
  );
};

export { PostStoryForm };
