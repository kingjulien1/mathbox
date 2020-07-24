import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mathbox.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto pt-20 ">
        <div className="mx-10 sm:mx-20">
          <div className="flex justify-center">
            <h1 className="text-6xl text-gray-900">Mathbox.io</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-600 text-lg m-1 text-center">
              collaborate in realtime on a whiteboard with tools that help you
              solve problems quickly and with delight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
