const AlertModal = (props) => {
  const { title, subTitle, customClass = {} } = props;

  // Default value for className
  const defaultCustomClass = {
    textColor: "text-black",
    backgroundColor: "bg-white",
    borderColor: "border-gray-400",
  };

  // Merge default value and custom value
  const customClassValue = {
    ...defaultCustomClass,
    ...customClass,
  };

  // Define className
  const customClassName = `${customClassValue.textColor} ${customClassValue.backgroundColor} ${customClassValue.borderColor}`;

  return (
    <div
      className={`${customClassName} fixed max-w-md px-4 py-3 mx-auto mt-4 transform -translate-x-1/2 -translate-y-1/2 rounded top-20 left-1/2`}
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="block pl-2 sm:inline">{subTitle}</span>
    </div>
  );
};

export default AlertModal;
