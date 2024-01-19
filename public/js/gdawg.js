const urlExtractor = /\/([^\/]+)\/?$/;
const url="http://localhost:6969/api/gdawg"
$(function(){
    const id=location.href.match(urlExtractor)
    console.log(url+id[0]+"/")
    $.get(url+id[0] , {},
        function (data) {
            const x=JSON.parse(data)[0]
            console.log(x)
            $("#brodie").attr("src", x.pic)
            $("#brodie").attr("alt", x.picdesc)
            $("#name").text(x.name)
            $("#desc").text(x.desc)
        }
    );
})