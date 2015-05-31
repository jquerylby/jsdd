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
// left_buttom = document.getElementById('300x250_left');
// buttom_middle = document.getElementById('728x90_buttom');
loadJSON('http://freegeoip.net/json/',
         function(data) 
         {
         	if(data.country_code != 'US'){
         		right.innerHTML = '<iframe src="http://jquerylby.github.io/jsdd/clicksor/Wide_Skyscraper.html" width="180px" height="630px" scrolling="no" frameborder="0" allowtransparency="true"></iframe>';
                // buttom_middle.innerHTML = '<iframe src="http://www.thewrkingparent.com/Leaderboard.html" width="738px" height="100px" scrolling="no" frameborder="0" allowtransparency="true"></iframe>';
                // left_buttom.innerHTML ='<iframe src="http://www.thewrkingparent.com/Leaderboard.html" width="738px" height="100px" scrolling="no" frameborder="0" allowtransparency="true"></iframe>';
         	}
         },
         function(xhr) { console.error(xhr); }
);
