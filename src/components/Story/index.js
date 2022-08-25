import "./styles.css";

const Story = ({ name, content, imageUrl }) => {
  return (
    <div className="container-story">
      <h2>{name}</h2>
      <p>{content}</p>
      <img style={{ width: 300 }} src={imageUrl} alt={name} />{" "}
    </div>
  );
};

export default Story;
