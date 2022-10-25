

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
    authorization: 'Basic ' + Buffer.from("2GM9JzqHaCOYjYViRkzTg3F8loD" + ':' + "24ceeea239a51d0e068d20801dfc22d3").toString('base64'),
},
}