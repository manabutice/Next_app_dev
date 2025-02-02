import * as cheerio from "cheerio";
import Header from "./_components/Header"; // ✅ `_components` からインポート

export default async function Home() {
  const res = await fetch("https://beograd-consulting.com/real-estate/egypt/");
  const html = await res.text();
  const $ = cheerio.load(html);

  return (
    <div>
      {/* ヘッダー */}
      <Header />

      {/* コンテンツ全体を中央配置 */}
      <main className="max-w-3xl mx-auto text-center p-6">
        {/* 見出し */}
        <h1 className="text-3xl font-bold bg-blue-200 p-4 rounded-md">
          エジプト不動産の魅力と経済発展
        </h1>

        {/* テキストコンテンツ */}
        <section className="space-y-4 mt-6 text-left">
          <p className="bg-blue-100 p-4 rounded-md">
            エジプト不動産投資の魅力の一つは、価格の安さです。また、人口増加による内需の大きさに支えられ、賃貸の安定した需要や賃貸収入の上昇も見込まれています。
          </p>
          <p className="bg-blue-100 p-4 rounded-md">
            カイロの人口爆発や、今後の経済成⻑を見据え、エジプト政府は新首都への移転計画を発表しました。現在、東京都23区よりも広い面積で工事が進み、そこで開発中の不動産が一斉に売りに出されています。
          </p>
          <p className="bg-blue-100 p-4 rounded-md">
            特に「R7」エリアは、新首都の中心にある高級住宅地で、2023年より段階を踏んでオープンしていきます。将来的な資産価値の高まりが期待できる、投資家としては見逃せないエリアです。
          </p>
          <p className="bg-blue-100 p-4 rounded-md">
            たとえば、MENA（Middle East & North Africa）の中で比べたときにドバイとエジプトでは、同じ高級プロジェクトでも4倍近い価格差が生じています。
          </p>
        </section>
      </main>

      {/* 取得したHTMLをデバッグ用に表示（開閉可能） */}
      <details className="mt-6">
        <summary className="cursor-pointer text-blue-500">取得したHTMLを見る（デバッグ用）</summary>
        <pre className="text-sm bg-gray-100 p-2 rounded-md whitespace-pre-wrap">{html}</pre>
      </details>
    </div>
  );
}
