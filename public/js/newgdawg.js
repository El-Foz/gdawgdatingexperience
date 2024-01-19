const url="http://localhost:6969/api/newGdawg/"
$(function(){
    $("#submit").on('click', function (e) { 
        e.preventDefault();
        encodeImgtoBase64(document.getElementById('img'))
    });
})

function encodeImgtoBase64(element) {
    var file=element.files[0]
    var reader = new FileReader();
    reader.onloadend = function() {
        reader.result
        $.post(url, {
            firstname: $("#first").val(),
            lastname: $("#last").val(),
            picb64: reader.result,
            desc: $("#bio").val(),
            picdesc: $("#alt").val()
        }, function (data) {
            console.log(data)
        }).done(()=>{
            $("#first").val("")
            $("#last").val("")
            $("#bio").val("")
            $("#alt").val("")
            document.getElementById("img").value=""
        });
    }
    reader.readAsDataURL(file);
}