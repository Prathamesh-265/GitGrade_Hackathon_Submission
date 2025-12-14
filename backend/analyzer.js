module.exports = function analyzeRepo(data) {
  return {
    hasReadme: data.readme.length > 50,
    commitCount: data.commits.length,
    fileCount: data.contents.length,
    hasTests: data.contents.some(f => f.name.toLowerCase().includes("test")),
    hasDescription: !!data.repo.description
  };
};