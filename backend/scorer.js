module.exports = function scoreRepo(a) {
  let score = 0;
  score += a.hasReadme ? 20 : 5;
  score += a.commitCount > 10 ? 25 : 10;
  score += a.fileCount > 5 ? 20 : 10;
  score += a.hasTests ? 20 : 5;
  score += a.hasDescription ? 15 : 5;
  return score;
};