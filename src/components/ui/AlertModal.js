const AlertModal = () => {
  return (
    <div
      className="fixed max-w-md px-4 py-3 mx-auto mt-4 text-red-700 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-400 rounded top-20 left-1/2"
      role="alert"
    >
      <strong className="font-bold">Holy CJ!</strong>
      <span className="block pl-2 sm:inline">You need to write something</span>
    </div>
  );
};

export default AlertModal;
