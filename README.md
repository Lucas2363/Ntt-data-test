# Projeto Nuxt - Guia de Uso

## Sobre o Projeto
Este projeto é uma aplicação Nuxt.js, projetada para ser escalável e facilmente implantada em produção. A aplicação utiliza um fluxo de CI/CD automatizado via GitHub Actions e SonarCloud para garantir a qualidade do código.

---

## Como Startar a Aplicação
### Executando Localmente
1. Certifique-se de ter o **Node.js 22** instalado.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
4. Acesse a aplicação em `http://localhost:3000`.

---

## 🐳 Como Startar com Docker
1. Certifique-se de ter o **Docker** instalado.
2. Construa a imagem da aplicação:
   ```sh
   docker build -t minha-app -f dockerfile-local-dev .
   ```
3. Rode o container:
   ```sh
   docker run -p 3000:3000 minha-app
   ```
4. Acesse a aplicação em `http://localhost:3000`.

---

## Versões Necessárias
- **Node.js**: 22
- **NPM**: 10+
- **Docker**: Última versão estável

---

## Estrutura principal do Projeto
```
├── .github/workflows/          # Configurações do CI/CD
│   ├── sonar-linter            # Linter e Quality Gate com SonarCloud
│   ├── deploy-s3.yml           # Deploy automatizado para AWS S3
├── public/                     # Arquivos estáticos
├── server/                     # Backend da aplicação
├── tests/                      # Testes unitários
├── app.vue                     # Componente raiz do Nuxt
├── dockerfile-local-dev        # Dockerfile para desenvolvimento
├── package.json                # arquivo contendo as versões dos pacotes
```

---

##  Dependências Principais
- **Nuxt.js**: Framework Vue.js para aplicações SSR e SPAs
- **ESLint**: Linter para garantir qualidade do código
- **SonarCloud**: Análise de qualidade e cobertura de código
- **AWS CLI**: Para deploy na AWS S3
- **GitHub Actions**: Automatização do fluxo de CI/CD

---

## Explicação do Workflow de CI/CD
O fluxo de integração e entrega contínua (CI/CD) está definido no GitHub Actions:

1. **Testes Automatizados (`test`)**
   - Instala as dependências e executa os testes unitários.
2. **Análise de Qualidade (`sonar-scanner`)**
   - Executa ESLint e SonarScanner para garantir a qualidade do código.
3. **Geração da Build (`generate`)**
   - Após a análise do SonarCloud, gera o código para produção.
4. **Release no GitHub (`release`)**
   - Cria uma release automática no GitHub com a build gerada.
5. **Deploy na AWS (`deploy`)**
   - Faz upload dos arquivos gerados para um bucket S3.

---

## SonarCloud - Análise de Código
O SonarCloud é usado para análise estática de código e cobertura de testes. Ele foi configurado para:
- Analisar padrões de código com ESLint.
- Integrar com o GitHub Actions para impedir merges com baixa qualidade.
- Garantir que todos os merges na branch `main` atendam os quality gates.
