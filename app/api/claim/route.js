export async function POST() {
  // Mock reward claim
  const body = { success: true, reward: 10, message: "Mock claim success" };
  return new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } });
}
