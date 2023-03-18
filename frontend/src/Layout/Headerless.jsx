import React from 'react'
import { Layout } from '@/Layout';
import { Loader } from '@/components/Loader';

const Headerless = ({ isLoading, children }) => {

  if(isLoading) return <Loader />

  return (
    <Layout className="content-headerless">
      {children}
    </Layout>
  );
};

export default Headerless;
