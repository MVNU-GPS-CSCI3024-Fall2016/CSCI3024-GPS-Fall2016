function getBank() {
    var locationID = $('#locations option:selected').attr('value');
    window.document.location += ('savings?locationID=' + locationID);
}