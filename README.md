# RBLXValue API

Official examples and client snippets for the **[RBLXValue](https://rblxvalue.com) API v2** — free **Murder Mystery 2 (MM2)** item values, sets, profiles, inventories and value history.

- 🌐 Website: **[rblxvalue.com](https://rblxvalue.com)**
- 📚 Docs: **[docs.rblxvalue.com/v2](https://docs.rblxvalue.com/v2)**
- 🔑 Get a free API key: **[rblxvalue.com/developer](https://rblxvalue.com/developer)**
- 💬 Discord: **[discord.gg/2puhtMjdnw](https://discord.com/invite/2puhtMjdnw)**

## What is RBLXValue?

RBLXValue is an MM2 value platform that blends **MM2Values** and **Supreme Values** into one balanced estimate, updated every 12 hours. The API gives you programmatic access to the same data that powers [rblxvalue.com](https://rblxvalue.com).

## Base URL

```
https://api.rblxvalue.com/v2
```

## Quick start

1. Create a free API key at **[rblxvalue.com/developer](https://rblxvalue.com/developer)** (log in with Roblox).
2. Send it in the `X-Api-Key` header:

```bash
curl "https://api.rblxvalue.com/v2/items/corrupt" -H "X-Api-Key: your_key_here"
```

Items resolve by **slug or acronym**, case-insensitive — `corrupt`, `Corrupt` and `CORR` all work.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /v2/items` · `/v2/items/{slug}` | MM2 items, filter/search, single item |
| `GET /v2/sets` · `/v2/sets/{ident}` | Sets (resolves by name or item in the set) |
| `GET /v2/profile/{username}` | Profile + inventory total + badges |
| `GET /v2/inventory/{username}` | Full inventory with values |
| `GET /v2/history/{slug}` | Value history (`?period=1Y\|ALL&source=`) |
| `GET /v2/meta` | Last updated, totals, last run |

Full reference with responses: **[docs.rblxvalue.com/v2](https://docs.rblxvalue.com/v2)**.

## Examples

Runnable examples live in [`examples/`](./examples):

- [JavaScript / Node.js](./examples/javascript)
- [Python](./examples/python)
- [PHP](./examples/php)
- [Discord bot (discord.js, slash commands)](./examples/discord-bot)

Copy `.env.example` to `.env` and add your key first.

## Rate limits

| Plan | Requests / min |
|------|----------------|
| Free | 30 |
| Hobby (in-app) | 150 |
| Paid | 1,000 |
| Marketplace | 5,000 |

Free-plan keys must show **"Data from rblxvalue.com"** — the API returns this in the `credit` field when required.

## Links

- [RBLXValue.com](https://rblxvalue.com) · [Developer dashboard](https://rblxvalue.com/developer) · [Docs](https://docs.rblxvalue.com/v2) · [Discord](https://discord.com/invite/2puhtMjdnw)

## License

[MIT](./LICENSE) © UN6107617. Data is provided by [rblxvalue.com](https://rblxvalue.com).
