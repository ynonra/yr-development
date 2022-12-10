const HashLinkAnchor = ({ id, offset = 130 }) => {
  return (
    <span
      id={id}
      style={{
        top: -offset,
        paddingBottom: offset,
        display: "absolute",
        height: 0,
      }}
    >
      &nbsp;
    </span>
  );
};

export default HashLinkAnchor;
