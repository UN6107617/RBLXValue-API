// Search MM2 items by name.
// Usage: RBLXVALUE_API_KEY=... node search.js chroma
const API_KEY = process.env.RBLXVALUE_API_KEY;
const BASE = 'https://api.rblxvalue.com/v2';

async function main() {
  const query = process.argv[2] || 'chroma';
  const res = await fetch(`${BASE}/items?search=${encodeURIComponent(query)}&limit=10`, {
    headers: { 'X-Api-Key': API_KEY },
  });
  const data = await res.json();
  if (data.error) return console.error('Error:', data.message);

  console.log(`${data.total} result(s) for "${query}":`);
  for (const i of data.items) {
    console.log(`  ${i.name.padEnd(24)} ${String(i.value).padStart(8)}`);
  }
}

main();
