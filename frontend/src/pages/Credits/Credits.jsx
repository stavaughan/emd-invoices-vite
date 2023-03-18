import { Card, CardBody, CardHeader } from '@/components/Card';
import { PageContainer } from '@/components/Containers';
import { ListGroupWrapper, ListItemContainer } from '@/components/Lists';
import { LabelBadge } from '@/components/labels';
import { WebSiteLink } from '@/components/links';
import { SiteData } from '@/data';
import { useMobile } from '@/hooks';

const { credits } = SiteData;

const Credits = () => {

  const { isXSmall } = useMobile();

  return (
    <PageContainer className="p-3">
      <section>
        <Card className="shadow-sm">
          <CardHeader title="Resources used or adapted from" />
          <CardBody>
            <ListGroupWrapper
              className="px-2"
              type="flush"
            >
              {credits.map((item, idx) => (
                <ListItemContainer
                  key={item._id}
                  border={idx !== credits.length - 1}
                  className="my-3"
                >
                  <div className="d-flex flex-column text-sm">
                    <h5>{item?.name}</h5>
                    <p className="text-sm">{item?.description}</p>
                    {item?.author && (
                      <div className="d-flex align-items-center mb-2">
                        <LabelBadge label="author:" margin="me-3" />
                        <div>{item?.author}</div>
                      </div>
                    )}
                    <div className="d-flex align-items-center mb-2">
                      <LabelBadge label="license:" margin="me-3" />
                      <div>{item?.license}</div>
                    </div>
                    {isXSmall && (
                      <div className="d-flex align-items-center mb-2">
                        <LabelBadge label="Link:" margin="me-3" />
                        <WebSiteLink
                          url={item?.url || item?.licenseUrl}
                          shortLabel="Resource Link"
                          className="link-hover text-sm"
                        />
                      </div>
                    )}
                  </div>
                  {!isXSmall && (
                    <WebSiteLink
                      url={item?.url || item?.licenseUrl}
                      shortLabel="Resource Link"
                      className="link-hover text-sm"
                    />
                  )}
                </ListItemContainer>
              ))}
            </ListGroupWrapper>
          </CardBody>
        </Card>
      </section>
    </PageContainer>
  );
};

export default Credits;
