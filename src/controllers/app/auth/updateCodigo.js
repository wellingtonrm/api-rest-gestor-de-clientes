const SchemaCodAtivacao = require('../../../models/schemaMongo/codAtivacao');
const EnviarEmail = require('../ativacao/enviarEmailCodAtivacao');
const gerarRadom  = require('../../../config/geradorRadon');



const AtualizarCodigo = async function(email, calback){

    var datas = new Date();

    var dia = datas.getDate();           // 1-31
    var dia_sem = datas.getDay();            // 0-6 (zero=domingo)
    var mes = datas.getMonth();          // 0-11 (zero=janeiro)
    var ano2 = datas.getYear();           // 2 dígitos
    var ano4 = datas.getFullYear();       // 4 dígitos
    var horas = datas.getHours();          // 0-23
    var min = datas.getMinutes();        // 0-59
    var seg = datas.getSeconds();        // 0-59
    var mseg = datas.getMilliseconds();   // 0-999
    var tz = datas.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes + 1) + '/' + ano4;
    var str_hora = horas + ':' + min + ':' + seg;

    const arraydata = await SchemaCodAtivacao.find({ email }).lean().exec();
    const { data, hora, codigo} = arraydata[0]
   
   
    horaIni = hora.split(':');
    horaSom = str_hora.split(':');
    horasTotal = horaSom[0] - horaIni[0] ;
    

    const codigoup = gerarRadom();

    if (data != str_data){
   
        await SchemaCodAtivacao.updateOne({ email: email }, { codigo: codigoup })
       calback(false, "update", codigoup)



    } else if(horasTotal >= 1){
        
            await SchemaCodAtivacao.updateOne({ email: email }, { codigo: codigoup })
            calback(false, "update", codigoup)




    }else{

        calback(false, "update", codigo)
    }
  
   


}
module.exports = AtualizarCodigo;