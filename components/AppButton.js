const AppButton = ({ children, className = "", ...props }) => {
  const Container = (props) =>
  props.href ? <a {...props} /> : <button {...props} />;

  return (
    <Container
      className={`bg-appRed-500 rounded-lg px-4 py-3 text-white font-medium transition hover:shadow-lg hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      {children}
    </Container>
  );
};

export default AppButton;
