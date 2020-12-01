const fs = require('fs')
const http = require('http')
const pdf = require('../../')
const tmpl = fs.readFileSync(require.resolve('../templates/invoiceUpFront.html'), 'utf8')
    //var livereload = require('livereload')
    //var server = livereload.createServer()

const config = {
    base: 'file:///Users/matthiasharing/PROJECTS/kursOrganizerGmbH/TESTEREI/node-html-pdf/src/templates/style.css',
    format: 'A4',
    orientation: 'portrait', // portrait or landscape
    renderDelay: 1000,
    //orientation: 'landscape', // portrait or landscape
    border: {
        top: '40mm', // default is 0, units: mm, cm, in, px
        right: '22mm',
        bottom: '10mm',
        left: '22mm',
    },
    /* footer: {
        height: '30mm',
        contents: {
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page',
        },
    }, */
}

const server = http.createServer(function(req, res) {
        if (req.url === '/favicon.ico') return res.end('404')
        const html = tmpl.replace('{{image}}', `file://${require.resolve('../templates/image.png')}`)
        pdf.create(html, config).toStream((err, stream) => {
            if (err) return res.end(err.stack)
            res.setHeader('Content-type', 'application/pdf')
            stream.pipe(res)
        })
    })
    //var server = livereload
    //server.watch(__dirname + '/src')

server.listen(8080, function(err) {
    if (err) throw err
    console.log('Listening on http://localhost:%s', server.address().port)
        //reload(server)
})