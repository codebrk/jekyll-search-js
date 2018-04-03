!function(root) {
	root.JekyllSearch = function(data) {
		this.result = [];

		this.urlQuery = function(key) {
			var $_GET = {};
			if(document.location.toString().indexOf('?') !== -1) {
			    var query = document.location
			                   .toString()
			                   // get the query string
			                   .replace(/^.*?\?/, '')
			                   // and remove any existing hash string (thanks, @vrijdenker)
			                   .replace(/#.*$/, '')
			                   .split('&');

			    for(var i=0, l=query.length; i<l; i++) {
			       var aux = decodeURIComponent(query[i]).split('=');
			       $_GET[aux[0]] = aux[1];
			    }
			}

			return $_GET[key];
		};

		this.like = function(key, s) {
			s = s.toLowerCase();
			var queries = [];
			if (s.indexOf(" ") > -1) {
				queries = s.split(" ");
			} else if (s.indexOf("+") > -1) {
				queries = s.split("+");
			} else if (s.indexOf("%20") > -1) {
				queries = s.split("%20");
			} else {
				queries.push(s);
			}

			for (var i = 0; i < data.length; i++) {
				for (var j = 0; j < queries.length; j++) {
					if (data[i][key].toString().toLowerCase().indexOf(queries[j]) > -1) {
						this.result.push(data[i]);
						break;
					}
				}
			}
			return this;
		}

		this.fetch = function(callback) {
			for (var i = 0; i < this.result.length; i++) {
				callback(this.result[i]);
			}
		};
	};
}(window);