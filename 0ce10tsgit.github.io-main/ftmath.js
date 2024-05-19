// No markup cus I killed all my braincells doing this I just used the string lengts before and after the . to manually move the decimal place so I could scale without float bullshit
function correct(f1,f2){
  let rl1;
  let rl2;
  if (f1.toString().includes('.')){
    rl1 = f1.toString()
  }
  else{
    rl1 = f1.toString() + '.0'
  }
  if (f2.toString().includes('.')){
    rl2 = f2.toString()
  }
  else{
    rl2 = f2.toString() + '.0'
  }
  return [rl1,rl2]
}

export function multiply(f1,f2){
  let first = correct(f1,f2)[0]
  let second = correct(f1,f2)[1]
  if (first.split('.')[1].length == second.split('.')[1].length){
    let newbalancer = '1'
    for (let i = 0; i < first.split('.')[1].length; i++){
      newbalancer = newbalancer + '0'
    }
    newbalancer = parseInt(newbalancer)
    let expanded = parseInt(first.replace('.',''))*parseInt(second.replace('.',''))
    return expanded/(newbalancer*newbalancer)
  }else{
    let balancer = '1'
    let amount = 0
    let larger;
    let smoler;
    if (first.split('.')[1].length > second.split('.')[1].length){
      larger = first
      smoler = second
    }
    else{
      larger = second
      smoler = first
    }
    for(let x = 0; x < larger.split('.')[1].length; x++){
      balancer = balancer + '0'
      amount++
    }
    let offset = smoler.split('.')[1].length
    smoler = smoler.replace('.','')
    for(let z = 0; z <  (amount - offset); z++){
      smoler = smoler + '0'
    }
    let expanded = parseInt(smoler) * parseInt(larger.replace('.',''))
    return expanded/(parseInt(balancer)*parseInt(balancer))
  }
}

export function divide(f1,f2){
  let first = correct(f1,f2)[0]
  let second = correct(f1,f2)[1]
  if (first.split('.')[1].length == second.split('.')[1].length){
    let expanded = parseInt(first.replace('.',''))/parseInt(second.replace('.',''))
    return expanded
  }else{
    let amount = 0
    let larger;
    let smoler;
    let reg_order;
    if (first.split('.')[1].length > second.split('.')[1].length){
      larger = first
      smoler = second
      reg_order = true
    }
    else{
      larger = second
      smoler = first
      reg_order = false
    }
    for(let x = 0; x < larger.split('.')[1].length; x++){
      amount++
    }
    let offset = smoler.split('.')[1].length
    smoler = smoler.replace('.','')
    for(let z = 0; z <  (amount - offset); z++){
      smoler = smoler + '0'
    }
    let expanded;
    if (reg_order == false){
      expanded = parseInt(smoler) / parseInt(larger.replace('.',''))
    }
    else{
      expanded = parseInt(larger.replace('.','')) / parseInt(smoler)
    }
    return expanded
  }
}
export function add(f1,f2){
  let first = correct(f1,f2)[0]
  let second = correct(f1,f2)[1]
  if (first.split('.')[1].length == second.split('.')[1].length){
    let newbalancer = '1'
    for (let i = 0; i < first.split('.')[1].length; i++){
      newbalancer = newbalancer + '0'
    }
    newbalancer = parseInt(newbalancer)
    let expanded = parseInt(first.replace('.',''))+parseInt(second.replace('.',''))
    return expanded/parseInt(newbalancer)
  }else{
    let balancer = '1'
    let amount = 0
    let larger;
    let smoler;
    if (first.split('.')[1].length > second.split('.')[1].length){
      larger = first
      smoler = second
    }
    else{
      larger = second
      smoler = first
    }
    for(let x = 0; x < larger.split('.')[1].length; x++){
      balancer = balancer + '0'
      amount++
    }
    let offset = smoler.split('.')[1].length
    smoler = smoler.replace('.','')
    for(let z = 0; z <  (amount - offset); z++){
      smoler = smoler + '0'
    }
    let expanded = parseInt(smoler) + parseInt(larger.replace('.',''))
    return expanded/parseInt(balancer)
  }
}
export function subtract(f1,f2){
  let first = correct(f1,f2)[0]
  let second = correct(f1,f2)[1]
  if (first.split('.')[1].length == second.split('.')[1].length){
    let balancer = '1'
    for (let i = 0; i < first.split('.')[1].length; i++){
      balancer = balancer + '0'
    }
    let expanded = parseInt(first.replace('.',''))-parseInt(second.replace('.',''))
    return expanded/parseInt(balancer)
  }else{
    let amount = 0
    let larger;
    let smoler;
    let reg_order;
    if (first.split('.')[1].length > second.split('.')[1].length){
      larger = first
      smoler = second
      reg_order = true
    }
    else{
      larger = second
      smoler = first
      reg_order = false
    }
    for(let x = 0; x < larger.split('.')[1].length; x++){
      amount++
    }
    let offset = smoler.split('.')[1].length
    smoler = smoler.replace('.','')
    for(let z = 0; z <  (amount - offset); z++){
      smoler = smoler + '0'
    }
    let expanded;
    let balancer = '1'
    for(let p = 0; p < larger.split('.')[1].length;p++){
      balancer = balancer + '0'
    }
    if (reg_order == false){
      expanded = parseInt(smoler) - parseInt(larger.replace('.',''))
    }
    else{
      expanded = parseInt(larger.replace('.','')) - parseInt(smoler)
    }
    return expanded/parseInt(balancer)
  }
}
export function mod(f1,f2){
  let first = correct(f1,f2)[0]
  let second = correct(f1,f2)[1]
  if (first.split('.')[1].length == second.split('.')[1].length){
    let newbalancer = '1'
    for (let i = 0; i < first.split('.')[1].length; i++){
      newbalancer = newbalancer + '0'
    }
    newbalancer = parseInt(newbalancer)
    let expanded = parseInt(first.replace('.',''))*parseInt(second.replace('.',''))
    return expanded/(newbalancer*newbalancer)
  }else{
    let balancer = '1'
    let amount = 0
    let larger;
    let smoler;
    if (first.split('.')[1].length > second.split('.')[1].length){
      larger = first
      smoler = second
    }
    else{
      larger = second
      smoler = first
    }
    for(let x = 0; x < larger.split('.')[1].length; x++){
      balancer = balancer + '0'
      amount++
    }
    let offset = smoler.split('.')[1].length
    smoler = smoler.replace('.','')
    for(let z = 0; z <  (amount - offset); z++){
      smoler = smoler + '0'
    }
    let expanded = parseInt(smoler) % parseInt(larger.replace('.',''))
    return expanded/(parseInt(balancer)*parseInt(balancer))
  }
}