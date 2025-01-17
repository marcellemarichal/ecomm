# Ecommerce
Projeto de Ecommerce criado durante o programa LevelUp da Alura

## Instalação

É necessário utilizar o gerenciador de pacotes [npm](https://www.npmjs.com/) para instalar as dependências:
```bash
npm install
```

## Twelve-factor app

Este projeto foi analisado a partir da metodologia [The Twelve Factor App](https://12factor.net/), que serve para orientar o desenvolvimento de saas. Abaixo, estão explicitadas as formas de utilização de cada um dos doze fatores (caso utilizados) neste projeto. 

| Fator | Descrição |
|--------|-------------|
| Codebase | Este fator é utilizado por conta do versionamento de código no git e github, onde os repositórios guardam a base de código. No entanto, não está 100% alinhado com os 12 fatores, pois o projeto não utiliza um repositório para cada cada aplicação, e sim um mono repo.|
| Dependencies | Foram instaladas pelo NPM e são controladas no package-json.|
| Config | O projeto armazena a conexão com a base de dados em um arquivo de configuração (config/dbconnect), tendo sua string de conexão em uma variável de ambiente por questões de segurança.| 
| Backing services | São os bancos de dados MongoDB e MySql, utilizados para armazenar dados em todas as APIs do projeto.|
| Build, release, run | O projeto ainda está na etapa de build, portanto as duas seguintes não se aplicam, mas conforme a definição deste fator, os estágios de construção estão devidamente separados.|
| Processes | Este fator é utilizado, pois a aplicação não armazena estado ao ser executada. Todas as informações necessárias são salvas em serviços de apoio.|
| Port binding | As vinculações de portas estão aplicadas. As comunicações entre os serviços estão em variáveis de ambiente nos servers e também indicadas pelo docker-compose.|
| Concurrency | Por utilizar o fator processos, é possível a utilização do fator concorrência. Até este ponto ainda não foi utilizado no projeto, mas há a possibilidade devido à escalabilidade proporcionada pelos processos.|
| Disposability | Os serviços do projeto executam em poucos segundos, e seu desligamento ocorre sem danos ao projeto com o auxílio do Docker. O restart automático do mysql no docker-compose permite que, em casos de desligamentos não previstos ou programados, a aplicação reinicie rapidamente.|
| Dev/prod parity | A implantação é contínua e a lacuna entre desenvolvimento e produção é pequena; os ambientes são semelhantes em todos os serviços do projeto. O tempo entre deploys leva horas ou minutos, dependendo da complexidade, a autoria de código é apenas de uma pessoa, e os ambientes de desenvolvimento estão de acordo, por exemplo, os bancos de dados que são utilizados em testes e desenvolvimento também são utilizados em produção.|
| Logs | Os logs estão bem definidos, em casos de erros há mensagens que mostram qual foi o problema, e em casos de sucesso as respostas HTTP indicam corretamente o que está acontecendo. |
| Admin processes | Processos de administração e gerenciamento não foram implementados neste projeto.|


## Microsserviços

Também houve uma análise a partir da [arquitetura de microsserviços](https://microservices.io/). Abaixo, uma relação mostrando quais microsserviços foram utilizados neste projeto.

| Microsserviço | aplicação |
|---------------|-----------|
| Serviços de Domínio | sim |
| Serviços de negócio | sim |
| API Gateway | não |
| Agregador de processos | sim |
| Edge Service | não |
| DB único ou múltiplos DBs | múltiplos |
| Eventos ass‌íncronos | não |
| Agregação de Logs | não |
| Agregação de Métricas | não |
