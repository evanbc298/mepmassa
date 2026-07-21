import json
import re
from datetime import date
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
PENDENCIAS = BASE / "PENDENCIAS.md"
STATE = BASE / ".claude" / ".pendencias-last-shown"

today = date.today().isoformat()

if STATE.exists() and STATE.read_text(encoding="utf-8").strip() == today:
    raise SystemExit(0)

STATE.parent.mkdir(parents=True, exist_ok=True)
STATE.write_text(today, encoding="utf-8")

if not PENDENCIAS.exists():
    raise SystemExit(0)

content = PENDENCIAS.read_text(encoding="utf-8")
headers = re.findall(r"^## (.+)$", content, re.MULTILINE)
headers = [h for h in headers if "Arquivos de referência" not in h and "referência" not in h.lower()]

if not headers:
    raise SystemExit(0)

lines = "\n".join(f"- {h}" for h in headers)
msg = f"Lembrete diario de pendencias (PENDENCIAS.md):\n{lines}"

print(json.dumps({"systemMessage": msg}))
