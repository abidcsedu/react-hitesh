import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams()
//   console.log(params);
  return <div>
    <h1 className='bg-gray-600 text-white text-3xl p-4'>user: {params.id}</h1>
  </div>;
};

export default User;
