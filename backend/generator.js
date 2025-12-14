module.exports = function generate(score, a) {
  const summary =
    score >= 80 ? "Strong repository with good structure and practices."
    : score >= 50 ? "Average project with room for improvement."
    : "Basic project needing significant improvements.";

  const roadmap = [];
  if (!a.hasReadme) roadmap.push("Add a detailed README");
  if (!a.hasTests) roadmap.push("Add unit tests");
  if (a.commitCount < 10) roadmap.push("Commit more consistently");
  if (a.fileCount < 5) roadmap.push("Improve folder structure");

  return { score, summary, roadmap };
};