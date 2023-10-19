import React from 'react';
import { Oval } from 'react-loader-spinner';
import { SpinnerWraper } from 'styles/AppLayout.styled';

const Spinner = () => (
  <SpinnerWraper>
    <Oval
      height={100}
      width={100}
      color="#cacbeb"
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#a6a9f5"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </SpinnerWraper>
);

export default Spinner;
