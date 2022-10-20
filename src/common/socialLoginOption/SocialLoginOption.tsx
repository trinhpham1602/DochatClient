import React from 'react';
import './SocialLoginOption.css';
type Props = {
  iconUrl: string;
  type: string;
};
export const SocialLoginOption: React.FC<Props> = (props) => {
  const { iconUrl, type } = props;
  const handleLogin = () => {
    console.log('click on icon', type);
  };
  return (
    <>
      <img
        className='icon-size mx-1'
        src={iconUrl}
        onClick={handleLogin}
        alt=''
      />
    </>
  );
};
