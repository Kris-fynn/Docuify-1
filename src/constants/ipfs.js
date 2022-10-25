

// export default {
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   //url: 'https://gateway.ipfs.io/ipfs/'
//   url:'https://cloudflare-ipfs.com/ipfs/'
// }

export default {
  host: 'ipfs.infura.io', 
  port: 5001, 
  protocol: 'https',
  url:'https://cloudflare-ipfs.com/ipfs/',
  headers: {
    authorization: 'Basic ' + Buffer.from("API PUBLIC KEY" + ':' + "API SECRET KEY").toString('base64'),
},
}
