// projects.json의 목록에 GitHub의 설명·별점·홈페이지를 붙여 README.md를 만든다.
// GITHUB_TOKEN이 있으면 쓰고(Actions), 없으면 gh CLI 토큰이나 비인증 요청으로 받는다.
import fs from 'node:fs'
import { execSync } from 'node:child_process'

const cfg = JSON.parse(fs.readFileSync(new URL('../projects.json', import.meta.url)))
let token = process.env.GITHUB_TOKEN
if (!token) try { token = execSync('gh auth token', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() } catch {}

const repos = new Map()
for (let page = 1; ; page++) {
  const res = await fetch(`https://api.github.com/users/${cfg.owner}/repos?per_page=100&page=${page}&type=owner`, {
    headers: { accept: 'application/vnd.github+json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
  })
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`)
  const batch = await res.json()
  for (const r of batch) repos.set(r.name, r)
  if (batch.length < 100) break
}

const cell = s => (s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim()
const missing = []
let out = `# ${cfg.title}\n\n${cfg.intro}\n\n`
if (cfg.sites?.length) {
  out += `## 운영 중인 사이트\n\n`
  for (const s of cfg.sites) out += `- [${s.name}](${s.url}) — ${s.desc}${s.repo ? ` ([소스](https://github.com/${cfg.owner}/${s.repo}))` : ''}\n`
  out += '\n'
}
let total = 0
for (const g of cfg.groups) {
  const rows = g.repos.map(name => repos.get(name)).filter(r => {
    return r && !r.private && !r.fork && !r.archived
  })
  for (const name of g.repos) if (!repos.get(name)) missing.push(name)
  if (!rows.length) continue
  out += `## ${g.title}\n\n| 프로젝트 | 설명 | ★ |\n|---|---|---:|\n`
  for (const r of rows) {
    const home = r.homepage && /^https?:\/\//.test(r.homepage) && !r.homepage.includes(`github.com/${cfg.owner}/`) ? ` · [사이트](${r.homepage})` : ''
    out += `| [${r.name}](${r.html_url})${home} | ${cell(r.description)} | ${r.stargazers_count} |\n`
    total++
  }
  out += '\n'
}
const date = new Date().toISOString().slice(0, 10)
out += `---\n\n공개 저장소 ${total}개 · ${date} 갱신 · \`node scripts/build-readme.mjs\`로 다시 만들어요. 목록과 분류는 [projects.json](projects.json)에서 고쳐요.\n`
fs.writeFileSync(new URL('../README.md', import.meta.url), out)
console.log(`README.md: ${total} repos${missing.length ? `, not found: ${missing.join(', ')}` : ''}`)
