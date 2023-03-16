import { PageContainer } from '@/components/Containers';
import { HomeLinks, useHomePage } from './components';

const HomePage = () => {

  const { homePageLinkGroups } = useHomePage();

  return (
    <PageContainer className="p-3">
      <section>
        {homePageLinkGroups.map(group => (
          <HomeLinks
            key={group.title.replaceAll(' ', '')}
            group={group}
          />
        ))}
      </section>
    </PageContainer>
  );
};

export default HomePage;
