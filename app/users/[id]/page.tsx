import UserDetail from "../../_components/UserDetail"; // ✅ 相対パス & 名前修正

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">ユーザー情報</h1>
      <UserDetail userId={params.id} />  {/* ✅ 修正 */}
    </div>
  );
}
