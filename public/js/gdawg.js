const urlExtractor = /\/([^\/]+)\/?$/;
$(function(){
    const id=location.href.match(urlExtractor)
    $.getJSON("/api/gdawg/"+id, data, function (data) {
            $("#img").attr("src", "data:image/jpeg;base64,"+data.image)
        }
    );
})