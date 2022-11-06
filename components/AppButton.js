const AppButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-appRed-500 rounded-lg px-4 py-3 text-white font-medium transition hover:shadow-lg hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
