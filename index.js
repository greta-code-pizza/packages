import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr';

TimeAgo.addLocale(fr);
const timeAgo = new TimeAgo('fr-FR');
const initDate = new Date();
const yld = document.getElementById('yield');

window.setInterval(() => {
    yld.innerHTML =
        "<div class='post'>" +
        "<h1 class='subtitle'>Message posté à " + String(initDate.getHours()).padStart(2,0) + ":" + String(initDate.getMinutes()).padStart(2,0) + "</h1>" +
        "<p>Mon super message facebook...</p>" +
        "<span class='time'>Message posté " + timeAgo.format(initDate, 'time') + "</span>" +
        "</div>"
    ;
}, 500);
