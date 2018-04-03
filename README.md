### Jekyll Search JS

`Jekyll Search JS` is a simple script, that allow you to implement a search box in your [Jekyll](https://jekyllrb.com/) blog.

**How to use?**

It's very simple, link the `jekyll-search.js` or `jekyll-search.min.js` to wherever you want to implement the search feature. Then create an array of object with you post information and feed it into `Jekyll Search`.

After that you can query result and fetch it.

Following is hard coded data, but it should be generated through liquid templating language.

```
var db = [
	{"name": "Hello, World!", "desc": "This is a hello, world post"},
	{"name": "Sample Post", "desc": "I am sample post description and I can say hello"},
];

var search = new JekyllSearch(db);
var query = search.urlQuery("q");
search.like("desc", query).fetch(function(row) {
	console.log(row);
});
```