import { useMemo } from 'react';
import { Layout, SiteModals, useLayoutLogic } from '.';
import { PageHeader } from '@/components/Page';
import { SiteHeader, Footer } from '@/components/Site';
import { FormInputsProvider } from '@/contexts/form-inputs-context';
import { BackToTop } from '@/components/Widgets';
import ErrorBoundary from '@/state/ErrorBoundary';
import { Loader } from '@/components/Loader';
import { useLoading } from '@/hooks';

const SelectedPage = ({ pageID }) => {
  const { getSelectedPage } = useLayoutLogic();

  const { loading } = useLoading();

  const { Page, unitLabel, pageHeader } = useMemo(() => {
    return getSelectedPage(pageID);
  }, [getSelectedPage, pageID]);

  if (!Page) return null;

  return (
    <FormInputsProvider pageID={pageID}>
      {loading && <Loader />}
      <SiteModals pageID={pageID} />
      <Layout header={<SiteHeader loading={loading} />}>
        {pageHeader && <PageHeader pageID={pageID} />}
        <ErrorBoundary>
          <Page unitLabel={unitLabel} pageID={pageID} />
        </ErrorBoundary>
      </Layout>
      <Footer />
      <BackToTop />
    </FormInputsProvider>
  );
};

export default SelectedPage;
