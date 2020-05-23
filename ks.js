for (let i = 1; i <= 23; i++) {
  if (i < 10) {
    document.getElementById('ROLLTCH0'+i+'_0').checked = true;
  } else if (i === 23) {
    document.getElementById('txtOLLTCH23').innerHTML = '<textarea name="txtOLLTCH23" id="txtOLLTCH23" ch="OLLTCH23" form="20OLLT">Không</textarea>';
  } else {
    document.getElementById('ROLLTCH'+i+'_0').checked = true;
  }
}

for (let i = 1; i <= 36; i++) {
  if (i < 10) {
    document.getElementById(`R18LT0${i}_0`).checked = true;
  } else if (i >= 29 && i <= 32) {
    document.getElementById(`txt18LT${i}`).innerHTML = `<textarea name="txt18LT${i}" id="txt18LT${i}" ch="18LT${i}">Được</textarea>`
  } else {
    document.getElementById(`R18LT${i}_0`).checked = true;
  }
}