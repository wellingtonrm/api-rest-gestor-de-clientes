# Api Rest Gerenciador clientes 
Tecnologias aplicadas nesse projeto  👇👇👇


| Skill                                                                                               | Bibliotecas                                                        |
|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| <img src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png " alt="drawing" width="200"/> | ExpressJS MongoDB cloudinary jsonwebtoken nodemailer bcryptjs cors |

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
Todas as requisições são necessaria obrigatoriamente enviar os parametros **user_id** e **user_token** no formato json e 
**token_access** no header de sua requisição junto com **Content-Type** que é obrigatoriamente usar **application/json**

```json
{
   "user_id":"d34333ef67ax90",
   "user_token": "0119bfac59b29499e8d46d1c48431d9f"
}   
```