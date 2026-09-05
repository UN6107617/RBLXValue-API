# MM2 Discord Bot (RBLXValue API v2)

A Discord bot with slash commands for MM2 item values, powered by the [RBLXValue API](https://docs.rblxvalue.com/v2).

## Commands

- `/item [name]` — item value, sources, demand, stability
- `/set [name]` — set total value and items (matches by set name or item)
- `/profile [username]` — profile + inventory total
- `/history [name]` — recent value history

## Setup

```bash
npm install
cp .env.example .env   # fill in your values
node bot.js
```

- Bot token & client ID: [discord.com/developers](https://discord.com/developers/applications)
- Free API key: [rblxvalue.com/developer](https://rblxvalue.com/developer)

Requires Node.js 20+.
