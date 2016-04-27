'use strict';

var data = JSON.parse(localStorage.getItem("neo4j.settings"));

if (data == null) {
    data = {host: "http://localhost:7474"};
    localStorage.setItem("neo4j.settings", JSON.stringify(data));
}
