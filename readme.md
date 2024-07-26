## POC - Microfroentend
Este é um simples projeto que "simula" uma infraestrutura de microfrontends, cada pasta da estrutura representa um repositório externo no github, que deve ser gerido por um squad especifico. Dessa forma temos:

- **container**: Aplicação final, responsável por orquestrar módulos, é gerida pelos squads 1 e 2.
- **chico-buarque**: Módulo que deve ser gerido pelo squad 1
- **stone**: Módulo que deve ser gerido pelo squad 2

## Container SDK
Atualmente a aplicação **container** possui um `context` que é pasasdo via `prop` para os módulos `stone` e `chico-buarque`. Isso é uma representação de um `container-sdk` que não foi desenvolvido nessa poc. 
>O uso de um sdk entre todas as aplicações pode facilitar a orquestração e acesso aos recursos do **container**

## Startup
Rode o script `setup.sh` para instalar as dependencias e lincar as subpastas.
Em seguida você pode usar `start.sh` ou `watch.sh` para rodar a aplicação
