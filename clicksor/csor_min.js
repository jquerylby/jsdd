function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
right = document.getElementById('160x600_right');
loadJSON('http://freegeoip.net/json/',
         function(data) 
         {
            if(data.country_code != 'US'){
                right.innerHTML = '<iframe src="http://jquerylby.github.io/jsdd/clicksor/Wide_Skyscraper.html"></iframe>';
            }
         },
         function(xhr) { console.error(xhr); }
);
