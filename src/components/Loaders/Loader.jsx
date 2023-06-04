import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="spinner">
      <RotatingLines
        strokeColor="#ebd8ff"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </div>
  );
};
