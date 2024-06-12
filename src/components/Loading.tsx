import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ReactLoading color="#e9e9e9" height={667} width={600} />
    </div>
  );
}
