import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";

export default function Home() {
    return (
        <Container>
            <Meta pageTitle="ブログ" pageDesc="ブログ記事の一覧" />
            <Hero title="Blog" subtitle="Recent blog" />
        </Container>
    );
}
