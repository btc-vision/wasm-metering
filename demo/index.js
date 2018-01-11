const bel = require('bel')
const wabt = require('wabt')
const metering = require('../')

function inject (wat) {
  const mod = wabt.parseWast('module.wast', wat)
  const binary = mod.toBinary({log: true})
  console.log('here', binary)
  const meteredCode = metering.meterWASM(Buffer.from(binary.buffer))
  const textMod = wabt.readWasm(meteredCode, { readDebugNames: true })
  textMod.generateNames()
  textMod.applyNames()
  const text = textMod.toText({ foldExprs: false, inlineExport: false })
  document.getElementById('result').innerHTML = text
}

const textarea = bel`<div>
  <textarea style="float:left" id="watInput" rows="50" cols="50"></textarea>
  <button onclick=${function () {
    const wat = document.getElementById('watInput').value
    inject(wat)
  }}>inject</button>
  <pre style="float:left" id="result">
  </pre>
  </div>`

document.body.appendChild(textarea)
