import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { Product } from "../../models/product";

export default function Products({ productData }) {
  return (
    <div className="h-screen">
      <Head>
        <title>Farm Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Farm Products</h2>
          <div className="">
            {productData && <ProductList products={productData} />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const productData = await Product.find({});

  return {
    props: {
      productData: JSON.parse(JSON.stringify(productData)),
    },
  };
}
