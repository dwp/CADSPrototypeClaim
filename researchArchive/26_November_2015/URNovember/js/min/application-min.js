$(document).ready(function(){function e(e){this.title=ko.observable(e.title),this.isDone=ko.observable(e.isDone)}function t(){var t=this;t.tasks=ko.observableArray([]),t.newTaskText=ko.observable(),t.incompleteTasks=ko.computed(function(){return ko.utils.arrayFilter(t.tasks(),function(e){return!e.isDone()})}),t.addTask=function(){t.tasks.push(new e({title:this.newTaskText()})),t.newTaskText("")},t.removeTask=function(e){t.tasks.remove(e)}}ko.applyBindings(new t)});