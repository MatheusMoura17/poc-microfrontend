## POC - Microfroentend
Este é um simples projeto que "simula" uma infraestrutura de microfrontends, cada pasta da estrutura representa um repositório externo no github, que deve ser gerido por um squad especifico. Dessa forma temos:

- **container**: Aplicação final, responsável por orquestrar módulos, é gerida pelos squads 1 e 2.
- **chico-buarque**: Módulo que deve ser gerido pelo squad 1
- **stone**: Módulo que deve ser gerido pelo squad 2

## Startup
Rode o script `setup.sh` para instalar as dependencias e lincar as subpastas.
Em seguida você pode usar `start.sh` ou `watch.sh` para rodar a aplicação
