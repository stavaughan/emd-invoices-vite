import React from 'react'
import { Layout } from '@/Layout';

const Headerless = (props) => {

  return (
    <Layout className="content-headerless">
      {props?.children}
    </Layout>
  );
};

export default Headerless;
