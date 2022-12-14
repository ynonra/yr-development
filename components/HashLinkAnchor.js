const HashLinkAnchor = ({ id, offset = 130 }) => {
  return (
    <span
      id={id}
      style={{
        marginTop: -offset,
        paddingBottom: offset,
        display: "block",
        height: 0,
      }}
    >
      &nbsp;
    </span>
  );
};

export default HashLinkAnchor;
