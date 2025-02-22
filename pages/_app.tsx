import Head from 'next/head';
import { AppProps } from 'next/app';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Motor Inspection Hub</title>
        <meta name="description" content="Motor Inspection Hub offers professional vehicle inspection services to ensure your car is in top condition. Book an inspection today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Motor Inspection Hub" />
        <meta property="og:description" content="Motor Inspection Hub offers expert car inspection services to guarantee the safety and performance of your vehicle. Visit us now for detailed vehicle assessments." />
        <meta property="og:url" content="https://www.motorinspectionhub.com" />
        <meta property="og:image" content="https://www.motorinspectionhub.com/og-image.jpg" />
        <link rel="canonical" href="https://www.motorinspectionhub.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
