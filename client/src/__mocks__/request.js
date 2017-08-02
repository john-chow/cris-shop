const server = {
  '/goods/list/': {
    success:    true,
    data:   [{
      'avatar':   '',
      'price':  '',
      'name':   '', 
    }]
  },
  '/goods/1/':    {
      sucess:   true,
      data:   {
        'avatar':   '',
        'price':  '',
        'name':   '',
        'graph':  ['', ''], 
      }
  },
};

function pull(url) {
  
}

function push() {
  return new Promise((resolve, reject) => {
    const resp = {status: 1};
    process.nextTick(
      () => resolve(resp)
    );
  });
}

export {pull, push};
