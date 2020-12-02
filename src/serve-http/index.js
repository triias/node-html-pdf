const fs = require('fs')
const http = require('http')
const pdf = require('../../')
    //const tmpl = fs.readFileSync(require.resolve('../templates/invoiceUpFront.html'), 'utf8')
    //const tmpl = fs.readFileSync(require.resolve('../templates/invoiceInstalment.html'), 'utf8')
const upFront = fs.readFileSync(require.resolve('../templates/invoiceUpFront.html'), 'utf8')
const instalment = fs.readFileSync(require.resolve('../templates/invoiceInstalment.html'), 'utf8')

const tmpl = process.argv[2] === 'upFront' ? upFront : instalment

console.log('==>', process.argv[2])

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
    if (val === 'instalment') {
        console.log('!!!', val)
    }
})

const config = {
    base: 'file:///Users/matthiasharing/PROJECTS/kursOrganizerGmbH/TESTEREI/node-html-pdf/src/templates/style.css',
    //base: `file://${path.resolve('templates/style.css')}`,
    format: 'A4',
    orientation: 'portrait', // portrait or landscape
    renderDelay: 3000,
    border: {
        top: '40mm', // default is 0, units: mm, cm, in, px
        right: '20mm',
        bottom: '10mm',
        left: '20mm',
    },
}

const server = http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') return res.end('404')
    pdf.create(tmpl, config).toStream((err, stream) => {
        if (err) return res.end(err.stack)
        res.setHeader('Content-type', 'application/pdf')
        stream.pipe(res)
    })
})

server.listen(8080, function(err) {
    if (err) throw err
    console.log('Listening on http://localhost:%s', server.address().port)
})