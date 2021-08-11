"use strict";
debugger;
var connection = new signalR.HubConnectionBuilder().withUrl("/NotificationUserHub?userId=" + userId).build();
connection.on("sendToUser", (articleHeading, articleContent) => {
    debugger;
    var heading = document.createElement("h3");
    heading.textContent = articleHeading;

    var p = document.createElement("p");
    p.innerText = articleContent;

    var notificationState = document.createElement("p");
    notificationState.innerHTML = "New";
    notificationState.className = "Status";

    var div = document.createElement("div");
    div.appendChild(heading);
    div.appendChild(p);
    div.appendChild(notificationState);

    document.getElementById("articleList").appendChild(div);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
}).then(function () {
    debugger;
    document.getElementById("user").innerHTML = "UserId: " + userId;
    connection.invoke('GetConnectionId').then(function (connectionId) {
        document.getElementById('signalRConnectionId').innerHTML = connectionId;
    })
});