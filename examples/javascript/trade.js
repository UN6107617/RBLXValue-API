// Simple MM2 trade calculator.
// Usage: RBLXVALUE_API_KEY=... node trade.js "corrupt,seer" "luger"
const API_KEY = process.env.RBLXVALUE_API_KEY;
const BASE = 'https://api.rblxvalue.com/v2';

async function value(ident) {
  const res = await fetch(`${BASE}/items/${encodeURIComponent(ident.trim())}`, {
    headers: { 'X-Api-Key': API_KEY },
  });
  const data = await res.json();
  return data.item ? data.item.value : 0;
}

async function side(list) {
  const values = await Promise.all((list || '').split(',').filter(Boolean).map(value));
  return values.reduce((a, b) => a + b, 0);
}

async function main() {
  const yourTotal = await side(process.argv[2]);
  const theirTotal = await side(process.argv[3]);
  const diff = theirTotal - yourTotal;
  const fair = Math.abs(diff) / Math.max(yourTotal, 1) < 0.1;

  console.log(`You:   ${yourTotal.toLocaleString()}`);
  console.log(`Them:  ${theirTotal.toLocaleString()}`);
  console.log(`Diff:  ${diff >= 0 ? '+' : ''}${diff.toLocaleString()} (${fair ? 'fair' : 'unfair'})`);
}

main();
