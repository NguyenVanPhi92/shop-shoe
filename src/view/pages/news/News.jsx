import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NewsCard from 'view/pages/news/NewCard'
import Section from 'shared/components/Sections/Section'
import SectionBody from 'shared/components/Sections/SectionBody'
import SectionTitle from 'shared/components/Sections/SectionTitle'
import Grid from 'shared/grid/components/Grid'

const New = () => {
    const location = useLocation()

    // scroll top when clicking action between pages
    useEffect(() => {
        window.scrollTo(0, 0, 'smooth')
    }, [location])

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
    )
}

export default New
