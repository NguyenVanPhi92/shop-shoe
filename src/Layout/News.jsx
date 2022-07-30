import NewsCard from 'components/News/NewCard';
import Section from 'components/Sections/Section';
import SectionBody from 'components/Sections/SectionBody';
import SectionTitle from 'components/Sections/SectionTitle';
import React from 'react';
import Grid from 'shared/GirdTemplate/Components/Grid';

const New = () => {
  return (
    <div className="news">
      <Section>
        <SectionTitle title="New Feed" slug="/" />
        <SectionBody>
          <Grid col={4} mdCol={3} smCol={2} gap={10}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle title="New Feed" slug="/" />
        <SectionBody>
          <Grid col={4} mdCol={3} smCol={2} gap={10}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Grid>
        </SectionBody>
      </Section>
    </div>
  );
};

export default New;
