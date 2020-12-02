var renderHello = function(templateData) {
    var template = document.getElementById('template').innerHTML
    var rendered = Mustache.render(template, templateData)

    document.getElementById('target').innerHTML = rendered
}