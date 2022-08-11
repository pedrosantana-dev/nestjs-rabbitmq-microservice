# nestjs-rabbitmq-microservice
Microservice com NestJS e fila de processos com RabbitMQ

## Instalar os pacotes
`
` $ npm i --save @nestjs/microservices
` $ npm i --save amqplib amqp-connection-manager
`

## Criar um container Docker com RabbitMQ

`
$ docker run -d --hostname demo-rabbit -p 5672:5672 -p 15672:15672 --name demo-rabbit rabbitmq:3-management
`

Fazer o login no console de gerenciamento do RabbitMQ (http://localhost:15672) usando o usuário **guest** e o password **guest**.