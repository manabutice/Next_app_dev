export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-4">
        {/* ロゴ */}
        <h1 className="text-xl font-bold">不動産情報</h1>
        {/* ナビゲーション（フレックス適用） */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">ホーム</a></li>
            <li><a href="#" className="hover:underline">サービス</a></li>
            <li><a href="#" className="hover:underline">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
