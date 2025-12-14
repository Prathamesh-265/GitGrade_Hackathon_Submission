const axios = require("axios");

module.exports = async function fetchRepoData(repoUrl) {
  const [, , , owner, repo] = repoUrl.split("/");
  const base = `https://api.github.com/repos/${owner}/${repo}`;

  const repoInfo = await axios.get(base);
  const commits = await axios.get(`${base}/commits`);
  const contents = await axios.get(`${base}/contents`);

  let readme = "";
  try {
    const r = await axios.get(`${base}/readme`);
    readme = Buffer.from(r.data.content, "base64").toString();
  } catch {}

  return { repo: repoInfo.data, commits: commits.data, contents: contents.data, readme };
};