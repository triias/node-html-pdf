const fs = require('fs')
const http = require('http')
const pdf = require('../../')
const tmpl = fs.readFileSync(require.resolve('../businesscard/businesscard.html'), 'utf8')

const config = {
    format: 'A4',
    /* border: {
        top: '2in', // default is 0, units: mm, cm, in, px
        right: '1in',
        bottom: '2in',
        left: '1.5in',
    }, */
}

const server = http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') return res.end('404')
    const html = tmpl.replace('{{image}}', `file://${require.resolve('../businesscard/image.png')}`)
    //pdf.create(html, { width: '50mm', height: '90mm' }).toStream((err, stream) => {
    pdf.create(html, config).toStream((err, stream) => {
        if (err) return res.end(err.stack)
        res.setHeader('Content-type', 'application/pdf')
        stream.pipe(res)
    })
})

server.listen(8080, function (err) {
    if (err) throw err
    console.log('Listening on http://localhost:%s', server.address().port)
})
