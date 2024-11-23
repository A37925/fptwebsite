import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  const products = [
    { id: 1, name: 'Gói cước Internet Cơ bản', description: 'Tốc độ 100Mbps, giá 200.000 VND/tháng.', image: '/internet1.jpg' },
    { id: 2, name: 'Gói cước Internet Nâng cao', description: 'Tốc độ 200Mbps, giá 300.000 VND/tháng.', image: '/internet2.jpg' },
    { id: 3, name: 'Gói cước Internet Gia đình', description: 'Tốc độ 300Mbps, giá 400.000 VND/tháng.', image: '/internet3.jpg' },
  ];
  const maucamfpt ='#f37021';
  const xanhnuocbienfpt = '#034ea2';
  const xanhlafpt = '#51b848';
  const mauden = "#000";
  return (
    <>
      <Head>
        <title>FPT Telecom - Gói cước Internet tốt nhất</title>
        <meta name="description" content="Trang giới thiệu các gói cước Internet của FPT. Tốc độ cao, ổn định, giá cả phải chăng." />
      </Head>
      
      {/* Header */}
      <header style={{ backgroundColor: '#fff', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
      <Image
        src="/images/logoFpt.png" // Đường dẫn ảnh (có thể là ảnh local hoặc URL bên ngoài)
        alt="Mô tả sản phẩm 1" // Mô tả ảnh
        width={150} // Chiều rộng ảnh (tính theo pixel)
        height={200} // Chiều cao ảnh (tính theo pixel)
      />
        <h1>FPT Telecom</h1>
        <nav style={{ marginTop: '10px' }}>
          <a href="/" style={{ color: mauden, margin: '0 15px', textDecoration: 'none' }}>Trang Chủ</a>
          <a href="/about" style={{ color: mauden, margin: '0 15px', textDecoration: 'none' }}>Giới Thiệu</a>
          <a href="/contact" style={{ color: mauden, margin: '0 15px', textDecoration: 'none' }}>Liên Hệ</a>
        </nav>
      </header>

      {/* Main content */}
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Danh Sách Gói Cước Internet</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ width: '300px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '10px 0', color: maucamfpt }}>{product.name}</h3>
                <p style={{ color: '#666' }}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Main content */}
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Danh Sách Gói Cước Internet</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ width: '300px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '10px 0', color: maucamfpt }}>{product.name}</h3>
                <p style={{ color: '#666' }}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Main content */}
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Danh Sách Gói Cước Internet</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ width: '300px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '10px 0', color: maucamfpt }}>{product.name}</h3>
                <p style={{ color: '#666' }}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: maucamfpt, color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
        <p>&copy; 2024 Huy FPT Telecom - Chi nhánh Thanh Trì</p>
        <p>
          Hotline: <a href="tel:0342456742" style={{ color: '#ffcc00', textDecoration: 'none' }}>0342.4567.42</a> | 
          <a href="https://zalo.me/0342456742" style={{ color: '#ffcc00', marginLeft: '5px', textDecoration: 'none' }}>Chat Zalo</a>
        </p>
      </footer>
    </>
  );
}
