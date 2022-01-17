export function decoder(qrCode) {
  // qrCode='';
  // throw 500
  
  if (qrCode.length == 0) throw new Error('Empty Payload');
  var payload = qrCode.split('/');
  //console.log('var: ' + (payload[1]) );

  if (payload[0] != 'NZCP:') throw new Error('Invalid payload prefix');
  if(payload[1] != 1) throw new Error('Invalid payload version');
  payload=payload[2];

  console.log(payload);
}