import Head from "next/head";
import { useRouter } from "next/router";

import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
    siteMeta;

import siteImg from "images/ogp.jpg";

export default function Meta({ pageTitle, pageDesc }) {
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

    const desc = pageDesc ?? siteDesc;

    const router = useRouter();
    // https://nextjs.org/docs/api-reference/next/router#router-object
    const url = `${siteUrl}${router.asPath}`;

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title}></meta>
            <meta name="description" content={desc}></meta>
            <meta property="og:description" content={desc}></meta>
            <link rel="canonical" href={url}></link>
            <meta property="og:url" content={url}></meta>
            <meta property="og:site_name" content={siteTitle}></meta>
            <meta property="og:type" content={siteType}></meta>
            <meta property="og:locale" content={siteLocale}></meta>
            <link rel="icon" href={siteIcon}></link>
            <link rel="apple-touch-icon" href={siteIcon}></link>
        </Head>
    );
}
