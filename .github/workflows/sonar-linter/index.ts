import * as core from '@actions/core';
import { exec } from '@actions/exec';

async function run() {
  try {
    // Obtém os inputs da action
    const sonarToken = core.getInput('sonar-token');
    const sonarOrganization = core.getInput('sonar-organization');
    const sonarProjectKey = core.getInput('sonar-project-key');

    core.info('🔍 Executando ESLint...');
    await exec('npx eslint . --config .github/actions/sonar-linter/eslint.config.js --max-warnings=0');

    core.info('🚀 Rodando SonarScanner...');
    await exec(`sonar-scanner \
      -Dsonar.organization=${sonarOrganization} \
      -Dsonar.projectKey=${sonarProjectKey} \
      -Dsonar.host.url=https://sonarcloud.io \
      -Dsonar.login=${sonarToken} \
      -Dsonar.qualitygate.wait=true`);

    core.info('✅ Qualidade aprovada!');
  } catch (error) {
    core.setFailed(`❌ Falha no processo: ${(error as Error).message}`);
  }
}

run();
