import { defineConfig } from 'astro/config';

const productionSite = 'https://fstopcameraclub.com';
const repository = process.env.GITHUB_REPOSITORY;
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repoName = repository?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const explicitSite = process.env.SITE_URL?.trim();
const explicitBase = process.env.BASE_PATH?.trim();

function normalizeBase(basePath) {
  if (!basePath || basePath === '/') {
    return '/';
  }

  return `/${basePath.replace(/^\/+|\/+$/g, '')}/`;
}

const inferredSite =
  isGitHubActions && owner && repoName
    ? `https://${owner}.github.io/${repoName}`
    : undefined;

const inferredBase = isGitHubActions && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  output: 'static',
  site: explicitSite || productionSite || inferredSite,
  base: explicitBase ? normalizeBase(explicitBase) : explicitSite ? '/' : inferredBase
});
