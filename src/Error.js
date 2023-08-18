import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      {error.status}:{error.error.message}
    </div>
  );
};
export default Error;
