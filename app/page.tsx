import UserDetail from "./_components/UserDetail";  // 修正: UserDetail をインポート

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">ユーザー情報</h1>
      <UserDetail userId={params.id} />  // UserDetail に userId を渡す
    </div>
  );
}
