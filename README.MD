# Api Rest Gerenciador clientes 
Tecnologias aplicadas nesse projeto  👇👇👇


| Skills                                                                                               | Bibliotecas                                                        |
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
Todas as requisições são necessaria obrigatoriamente enviar os parametros **email** e **password** no formato json.

```Javascript
Request POST('/auth/user')
``` 

```json
{
   "email":"email@email.com",
   "password": "0119bfac59b29499e8d46d1c48431d9f"
}   
```


**RESPONSE SUCESS**

 ```json
{
   
  "Erro": true,
  "Response": "Esse usuario não existe"

}
```

#### Registro

```Javascript
Request POST('/register/user')
```

```json
{
	"email":"email@gmail.com", 
	"nomeCompleto":"Wellington Ramos", 
	"CPF":"00000000000", 
	"password":"sd1212srd33", 
	"celular":"21979299566"
}  
```
**RESPONSE SUCESS**

 ```json
{
  "CodHTTP": 200,
  "Erro": false,
  "Response": "Registro com sucesso. Email enviado"
}
```
Conta criada para utilização da API, Todos os usuario precisa ter um email valido para ativação com código. 

#### Ativar conta

```Javascript
Request PUT('/ativacao')
``` 
 ```json
{
	"codigo":"0000"
}
```
**RESPONSE SUCESS**

 ```json
{
  "CodHTTP": 200,
  "Erro": false,
  "Response": "A sua consta foi ativada com sucesso"
}
```