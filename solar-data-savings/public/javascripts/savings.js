function getAnswersHourly() {
    var locationID = $('#locations option:selected').attr('value'),
        queryString = 'savings?locationID=' + locationID;
    var date = new Date(2016, 8, 5);
    queryString += '&startDate=' + date.getFullYear() + '/' + (date.getMonth()+1) + '/' + (date.getDate()-1);
    queryString += '&endDate=' + date.getFullYear() + '/' + (date.getMonth()+1) + '/' + (date.getDate());
    window.document.location += queryString;
}