"""RBLXValue API v2 — Python example.

Usage:
    pip install requests
    RBLXVALUE_API_KEY=... python example.py corrupt
"""
import os
import sys
import requests

API_KEY = os.environ.get("RBLXVALUE_API_KEY", "")
BASE = "https://api.rblxvalue.com/v2"
HEADERS = {"X-Api-Key": API_KEY}


def api(path, **params):
    r = requests.get(BASE + path, headers=HEADERS, params=params, timeout=5)
    return r.json()


def main():
    ident = sys.argv[1] if len(sys.argv) > 1 else "corrupt"

    data = api(f"/items/{ident}")
    if data.get("error"):
        print("Error:", data.get("message"))
        return

    i = data["item"]
    print(f"{i['name']} ({i['category']})")
    print(f"  Value:     {i['value']:,}")
    print(f"  MM2Values: {i['value_source_a']} · Supreme: {i['value_source_b']}")
    print(f"  Demand:    {i['demand']}/10 · Stability: {i['stability']}")

    # Value history (last year)
    hist = api(f"/history/{ident}", period="1Y").get("history", [])
    print(f"  History points (1Y): {len(hist)}")

    # Dataset freshness
    meta = api("/meta")
    print(f"  Data last updated: {meta.get('last_updated')}")


if __name__ == "__main__":
    main()
