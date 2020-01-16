# Api Rest Gerenciador clientes 
Tecnologias aplicadas nesse projeto  👇👇👇


| Skills                                                                                               | Bibliotecas                                                        |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| <img src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png " alt="drawing" width="200"/> | ExpressJS MongoDB cloudinary jsonwebtoken nodemailer bcryptjs cors |

<p align="center">
  <a href="https://travis-ci.org/yarnpkg/yarn"><img alt="Travis Status" src="https://travis-ci.org/yarnpkg/yarn.svg"></a>
  <a href="https://circleci.com/gh/yarnpkg/yarn"><img alt="Circle Status" src="https://circleci.com/gh/yarnpkg/yarn.svg?style=shield&circle-token=5f0a78473b0f440afb218bf2b82323cc6b3cb43f"></a>
  <a href="https://ci.appveyor.com/project/kittens/yarn/branch/master"><img alt="Appveyor Status" src="https://ci.appveyor.com/api/projects/status/0xdv8chwe2kmk463?svg=true"></a>
  <a href="https://discord.gg/yarnpkg"><img alt="Discord Chat" src="https://img.shields.io/discord/226791405589233664.svg"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
</p>


## Iniciando 
#### **INSTALAÇÃO**
Na pasta raiz do projeto abra o terminal e execute os comandos

```bash
npm install
```
Vamos levantar um servidor em **PHP**.

```bash
 npm run dev 
```

#### Athenticação
Todas as requisições são necessaria obrigatoriamente enviar os parametros **user_id** e **user_token** no formato json.

```json
{
   "user_id":"d34333ef67ax90",
   "user_token": "0119bfac59b29499e8d46d1c48431d9f"
}   
```


**RESPONSE SUCESS**

 ```json
{
   
  "Erro": true,
  "Response": "Esse usuario não existe"

}