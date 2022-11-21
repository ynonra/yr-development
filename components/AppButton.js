const AppButton = ({
  children,
  className = "",
  withoutTransition,
  inverted,
  disabled=false,
  ...props
}) => {
  const Container = (props) =>
    props.href ? <a {...props} /> : <button {...props} />;

  return (
    <Container
      className={`${
        !inverted
          ? "bg-appRed-500 text-white"
          : "bg-white text-appRed-500 border border-appRed-500"
      } rounded-lg px-4 py-3 font-medium transition ${
        !withoutTransition
          ? "hover:shadow-lg hover:-translate-y-0.5"
          : "hover:bg-appRed-500/95 hover:text-white"
      } ${disabled && "pointer-events-none opacity-80"} ${className}`}
      {...props}
    >
      {children}
    </Container>
  );
};

export default AppButton;
