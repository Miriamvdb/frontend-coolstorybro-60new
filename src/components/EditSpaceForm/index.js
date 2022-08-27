import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMySpace } from "../../store/user/selectors";
import { useDispatch } from "react-redux";
import { Button, Input } from "../../styled";
import { updateMySpace } from "../../store/user/thunks";

const EditSpaceForm = () => {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMySpace);

  const [title, setTitle] = useState(mySpace.title);
  const [description, setDescription] = useState(mySpace.description);
  const [backgroundColor, setBackgroundColor] = useState(
    mySpace.backgroundColor
  );
  const [color, setColor] = useState(mySpace.color);

  const submitEditedSpace = (event) => {
    event.preventDefault();
    dispatch(updateMySpace(title, description, backgroundColor, color));
  };

  return (
    <div>
      <h3>Edit space FORM</h3>
      <form onSubmit={submitEditedSpace}>
        <p>
          <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
        </p>
        <p>
          <Input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
          />
        </p>
        <p>
          <label>
            <b>Choose a background color: </b>
          </label>
          <Input
            style={{ width: "5rem" }}
            type="color"
            value={backgroundColor}
            onChange={(event) => setBackgroundColor(event.target.value)}
          />
        </p>
        <p>
          <label>
            <b>Choose a font color: </b>
          </label>
          <Input
            style={{ width: "5rem" }}
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </p>
        <br />
        <Button type="submit">Save changes!</Button>
      </form>
    </div>
  );
};

export { EditSpaceForm };
