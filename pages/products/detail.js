import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { Product } from "../../models/product";


export default function Detail({ productDetail }) {
  console.log(productDetail);
  return (
    <div className="h-screen">
      <Head>
        <title>Farm Products Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <div className="">
            {productDetail &&
              productDetail.map((product) => (
                <div key={product._id}>
                  <h2 className="pb-5 text-4xl font-semibold">
                    {product.name}
                  </h2>
                  <ul>
                    <li>Price: ${product.price}</li>
                    <li>Category {product.category}</li>
                  </ul>
                </div>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getProps() {
  const router = useRouter();
  const { id } = router.query;
  const productDetail = await Product.findById(id);

  return {
    props: {
      productDetail: JSON.parse(JSON.stringify(productDetail)),
    },
  };
}
