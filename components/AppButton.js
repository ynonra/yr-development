import Link from "next/link";

const AppButton = ({
  children,
  className = "",
  withoutTransition,
  inverted,
  disabled=false,
  ...props
}) => {
  const Container = (props) =>
    props.href ? <Link {...props} /> : <button {...props} />;

  return (
    <Container
      className={`text-lg ${
        !inverted
          ? "bg-appRed-500 text-white"
          : "bg-white text-appRed-500 border border-appRed-500"
      } rounded-full px-12 py-3 font-light transition hover:outline hover:outline-2 outline-appRed-500/50 outline-offset-1 ${disabled && "pointer-events-none opacity-80"} ${className}`}
      {...props}
    >
      {children}
    </Container>
  );
};

export default AppButton;
