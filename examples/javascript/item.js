// Look up a single MM2 item by slug or acronym.
// Usage: RBLXVALUE_API_KEY=... node item.js corrupt
const API_KEY = process.env.RBLXVALUE_API_KEY;
const BASE = 'https://api.rblxvalue.com/v2';

async function main() {
  const ident = process.argv[2] || 'corrupt';
  const res = await fetch(`${BASE}/items/${encodeURIComponent(ident)}`, {
    headers: { 'X-Api-Key': API_KEY },
  });
  const data = await res.json();
  if (data.error) return console.error('Error:', data.message);

  const i = data.item;
  console.log(`${i.name} (${i.category})`);
  console.log(`  Value:     ${i.value.toLocaleString()}`);
  console.log(`  MM2Values: ${i.value_source_a} · Supreme: ${i.value_source_b}`);
  console.log(`  Demand:    ${i.demand}/10 · Stability: ${i.stability}`);
  console.log(`  Updated:   ${i.last_updated}`);
}

main();
