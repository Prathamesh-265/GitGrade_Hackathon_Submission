const express = require("express");
const cors = require("cors");

const fetchRepoData = require("./github");
const analyzeRepo = require("./analyzer");
const scoreRepo = require("./scorer");
const generateOutput = require("./generator");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
  try {
    const { repoUrl } = req.body;
    if (!repoUrl) return res.status(400).json({ error: "Repo URL required" });

    const data = await fetchRepoData(repoUrl);
    const analysis = analyzeRepo(data);
    const score = scoreRepo(analysis);
    const result = generateOutput(score, analysis);

    res.json(result);
  } catch (e) {
    res.status(500).json({ error: "Analysis failed" });
  }
});

app.listen(5000, () => console.log("GitGrade running on port 5000"));