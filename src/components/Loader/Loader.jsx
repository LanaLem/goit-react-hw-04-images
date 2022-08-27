import { Hearts } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      ariaLabel="hearts-loading"
      color="#fa87d6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
