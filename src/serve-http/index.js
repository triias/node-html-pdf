const fs = require('fs')
const http = require('http')
const path = require('path')
const pdf = require('../../')
const tmpl = fs.readFileSync(require.resolve('../templates/invoiceUpFront.html'), 'utf8')
var invoiceTemplate = require('../templates/invoiceTemplate.js')
var MustacheModule = require('mustache')

/* function handlePdf(templatetype) {
    var basePath = path.resolve('templates')
    var options = {
        base: 'file:///Users/matthiasharing/PROJECTS/kursOrganizerGmbH/TESTEREI/node-html-pdf/src/templates/style.css',
        format: 'A4',
        orientation: 'portrait', // portrait or landscape
        renderDelay: 1000,
        border: {
            top: '40mm', // default is 0, units: mm, cm, in, px
            right: '22mm',
            bottom: '10mm',
            left: '22mm',
        },
        base: `file://${basePath}/`,
    }
    packingSlipTemplate.templateData.data.imgsrc = imageSrc
    console.log('Template Type: ', templatetype)
    var htmlContent = MustacheModule.render(invoiceTemplate.templateStucture, invoiceTemplate.templateData)
    switch (templatetype) {
        case 'sales':
            htmlContent = MustacheModule.render(invoiceTemplate.templateStucture, invoiceTemplate.templateData)
            break
    }
} */

const config = {
    base: 'file:///Users/matthiasharing/PROJECTS/kursOrganizerGmbH/TESTEREI/node-html-pdf/src/templates/style.css',
    //base: `file://${path.resolve('templates/style.css')}`,
    format: 'A4',
    orientation: 'portrait', // portrait or landscape
    renderDelay: 1000,
    border: {
        top: '40mm', // default is 0, units: mm, cm, in, px
        right: '20mm',
        bottom: '10mm',
        left: '20mm',
    },
}

const server = http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') return res.end('404')
        //const html = tmpl.replace('{{image}}', `file://${require.resolve('../templates/image.png')}`)
    pdf.create(tmpl, config).toStream((err, stream) => {
        if (err) return res.end(err.stack)
        res.setHeader('Content-type', 'application/pdf')
        stream.pipe(res)
    })
})

/* const server = http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') return res.end('404')
    const html = tmpl.replace('{{image}}', `file://${require.resolve('../templates/image.png')}`)
    pdf.create(html, config).toStream((err, stream) => {
        if (err) return res.end(err.stack)
        res.setHeader('Content-type', 'application/pdf')
        stream.pipe(res)
    })
}) */

server.listen(8080, function(err) {
    if (err) throw err
    console.log('Listening on http://localhost:%s', server.address().port)
})