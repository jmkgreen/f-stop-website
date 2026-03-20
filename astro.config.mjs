import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repoName = repository?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const inferredSite =
  isGitHubActions && owner && repoName
    ? `https://${owner}.github.io/${repoName}`
    : undefined;

const inferredBase = isGitHubActions && repoName ? `/${repoName}` : '/';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || inferredSite,
  base: process.env.BASE_PATH || inferredBase
});
