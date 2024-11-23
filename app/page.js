import Head from 'next/head';

export default function Home() {
  const products = [
    { id: 1, name: 'Sản phẩm 1', description: 'Mô tả sản phẩm 1', image: '/sanpham1.jpg' },
    { id: 2, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2', image: '/sanpham2.jpg' },
  ];

  return (
    <>
      <Head>
        <title>Giới thiệu sản phẩm</title>
        <meta name="description" content="Trang giới thiệu sản phẩm của tôi" />
      </Head>
      <main>
        <h1>Danh sách sản phẩ</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <div key={product.id} style={{ margin: '20px', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} width="200" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
