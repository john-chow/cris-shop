function xhrget(url, params) {
/*   Object.keys(params).forEach(
   		key => url.searchParams.append(key, params[key])
   	);  */       
    return fetch(url, {
        method: 'GET',
        headers:    {
            'Content-Type': 'application/json',
        }
    }).then((resp) => {
		if (resp.ok)	return resp.json()
		else 	console.log('error')
	});
}

function xhrpost(url, data) {
	fetch(url, {
		method: "POST",
		headers: {
    		'Content-Type': 'application/json'
  		},
		body:  	JSON.stringify(data), 
	}).then(resp => {
		if (!resp.success) throw resp.message
	}).catch((reason) => {
		alert(reason)
	})
}

export {xhrget, xhrpost};