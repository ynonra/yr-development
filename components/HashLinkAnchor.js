const HashLinkAnchor = ({ id, offset = 130 }) => {
  return (
    <span
      id={id}
      style={{
        marginTop: -offset,
        paddingBottom: offset,
        display: "block",
      }}
    >
      &nbsp;
    </span>
  );
};

export default HashLinkAnchor;
