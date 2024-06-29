import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <ClipLoader color="#black" size={150} />
    </div>
  );
};

export default Spinner;
