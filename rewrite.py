content = open('app/page.jsx').read()
# Scan all single-quoted strings and find apostrophes
import re
# Find all single-quoted JS strings and check for internal apostrophes
problematic = re.findall(r"'[^'\n]*'[^'\n]*'", content)
for p in problematic[:5]:
    print(repr(p))
