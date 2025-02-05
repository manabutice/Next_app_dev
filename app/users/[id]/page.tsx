import User from "../../_components/User";  // ✅ 修正

export default async function Home() {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">ユーザー一覧</h1>
      <User users={users} />
    </div>
  );
}
