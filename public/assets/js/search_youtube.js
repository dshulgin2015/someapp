$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'id,snippet',
        q: 'tuto',
        type: 'video',
        key: 'AIzaSyDAKDaBy_JDwcScSHqDQimOOLjdPImLanc',
        q: searchTerm
    };

    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;


    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        html += '<p>' + title + '</p>';
        html += '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + value.id.videoId + '"'+ '</iframe>'
        console.log(html);
    });

    $('#search-results').html(html);
}