var mongoose = require("mongoose");

module.exports = (uri) => {

//criando conexão
mongoose.connect('mongodb://' + uri);

//testando se está conectado
mongoose.connection.on('connected', () => {
    console.log("conectado ao mongo Db ");
})

//verificando erro caso não esteja e continuando a aplicação, sem isso ela quebra caso não conecte.
mongoose.connection.on('error', function(error) {
    console.log('Erro na conexão: ' + error);
});    


//verificando se a aplicação foi parada através da variável process, e se sim, disconecta o banco, fazendo isso ele chama a próxima função.
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Aplicação terminada, conexão fechada')
        process.exit(0);
    });

});
//que da uma mensagem se o banco for desconectado
mongoose.connection.on('disconnected', function() {
    console.log('Desconectado do MongoDB')
});


}



/* Comandos básicos de MongoDb

mongo = entra no mongo Db, tendo em mente que a aplicação já foi startada
showdbs  = mostra os bancos que existem
use 'nome do banco' = O mongo além de criar ele vai parar a database digitada
db = ' ele diz o nome de qual database está usando
db.(nome da coleção).insert( objeto) = ele insere algo no sistema  
db.(nome da coleção).find(); ele traz todos os objetos daquela coleção
db.(nome da coleção).findOne() = se quiser encontrar o primeiro elemento de uma coleção
db.(nome da coleção)find().pretty(); ele traz os objetos formatados, de forma mais legível;
model.findById() retorna um objeto de acordo com aquele id.



Impedância é o desencontro entre a estrutura dos dados armazenada no banco de dados e a estrutura de dados em memória. 
Quanto maior for a impedância, mais trabalho o desenvolvedor gastará em conversões entre os dois mundos. O contrário também é verdadeiro, 
quanto menor a impedância, menos trabalho ele terá. Na MEAN Stack, há a onipresença de uma estrutura de dados utilizada de ponta a ponta,
 o JSON. Mas o MongoDB usa BSON (Binary JSON), você deve estar se perguntando. porém você verá que sob o ponto de vista do programador,
 podemos a grosso modo pensar no BSON como um JSON que possui apenas mais tipos.
 
 - O MongoDB é um banco de dados baseado em documento com alta performance , disponibilidade e fácil escalabilidade.
  Porém, muito pouco ele faz para validar documentos, deixando esse quesito sob responsabilidade da aplicação,
  , logo, do programador.

- Um documento no MongoDB não segue a estrutura tabular e relacional como em bancos de dados relacionais. A estrutura de dados de um documento é muito semelhante ao JSON, um dos motivos que o torna atrativo para a MEAN Stack.

- Existem módulos criados pela comunidade para facilitar a conexão e manipulação de documentos do MongoDB na plataforma Node.js, como o Mongoose.

- MongoDB é multiplataforma, por isso pode ser instalado no Windows, Linux e OSX.
 

mais explicação sobre o mongoose 
Com o Mongoose, criamos esquemas no lado da aplicação que visam suprir a ausência de esquema no MongoDB.
 Pense nesses esquemas como esquemas de um banco de dados relacional (não pode aceitar vazio, tem que aceitar apenas texto ou número).
  A partir desses esquemas são compilados modelos e estes sim são os responsáveis em realizar operações de persistência no banco de dados.
   Toda a complexidade do driver do MongoDB é encapsulada em todo esse processo, facilitando em muito a vida do desenvolvedor.
 
 */


