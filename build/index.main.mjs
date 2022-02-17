// Automatically generated with Reach 0.1.8 (bf654a17)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (bf654a17)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v54 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:18:50:application',
    fs: ['at ./index.rsh:17:13:application call to [unknown function] (defined at: ./index.rsh:17:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v54],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v56], secs: v58, time: v57, didSend: v28, from: v55 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:20:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v56], secs: v58, time: v57, didSend: v28, from: v55 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v38, from: v63 } = txn2;
  ;
  const v68 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:29:33:decimal', stdlib.UInt_max, 4), v64);
  const v69 = stdlib.add(v56, v68);
  const v70 = stdlib.mod(v69, stdlib.checkedBigNumberify('./index.rsh:29:49:decimal', stdlib.UInt_max, 3));
  stdlib.protect(ctc1, await interact.seeOutcome(v70), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:31:7:application call to [unknown function] (defined at: ./index.rsh:31:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v56], secs: v58, time: v57, didSend: v28, from: v55 } = txn1;
  ;
  const v62 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:24:48:application',
    fs: ['at ./index.rsh:23:11:application call to [unknown function] (defined at: ./index.rsh:23:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v62],
    evt_cnt: 1,
    funcNum: 1,
    lct: v57,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:7:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v64], secs: v66, time: v65, didSend: v38, from: v63 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:26:7:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v68 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:29:33:decimal', stdlib.UInt_max, 4), v64);
      const v69 = stdlib.add(v56, v68);
      const v70 = stdlib.mod(v69, stdlib.checkedBigNumberify('./index.rsh:29:49:decimal', stdlib.UInt_max, 3));
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v38, from: v63 } = txn2;
  ;
  const v68 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:29:33:decimal', stdlib.UInt_max, 4), v64);
  const v69 = stdlib.add(v56, v68);
  const v70 = stdlib.mod(v69, stdlib.checkedBigNumberify('./index.rsh:29:49:decimal', stdlib.UInt_max, 3));
  stdlib.protect(ctc1, await interact.seeOutcome(v70), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:31:7:application call to [unknown function] (defined at: ./index.rsh:31:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSACAAEmAQAiNQAxGEEA7ShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaARc2GgIXNQQ2GgM1BUkjDEAAPiMSRCM0ARJENARJIhJMNAISEUQ0BRc1/4AE1RUZFDT/FlCwIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgBYSCI0ARJENARJIhJMNAISEUQ0BRc1/4AEgsRh/jT/FlCwgaCNBklBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgoSCM1ATIGNQIxGSISREIAACg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v56",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v56",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161066838038061066883398101604081905261002291610174565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100b2565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100aa9260029201906100db565b50505061024d565b816100d75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e790610212565b90600052602060002090601f016020900481019282610109576000855561014f565b82601f1061012257805160ff191683800117855561014f565b8280016001018555821561014f579182015b8281111561014f578251825591602001919060010190610134565b5061015b92915061015f565b5090565b5b8082111561015b5760008155600101610160565b600081830360408082121561018857600080fd5b80518082016001600160401b0380821183831017156101b757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101d057600080fd5b8351945060208501915084821081831117156101fc57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022657607f821691505b6020821081141561024757634e487b7160e01b600052602260045260246000fd5b50919050565b61040c8061025c6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610303565b6100b8565b3480156100a157600080fd5b506100aa6101eb565b60405161006492919061031b565b6100c86001600054146009610288565b6100e2813515806100db57506001548235145b600a610288565b6000808055600280546100f490610378565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610378565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103ad565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d134156008610288565b600080805560018190556101e7906002906102ad565b5050565b60006060600054600280805461020090610378565b80601f016020809104026020016040519081016040528092919081815260200182805461022c90610378565b80156102795780601f1061024e57610100808354040283529160200191610279565b820191906000526020600020905b81548152906001019060200180831161025c57829003601f168201915b50505050509050915091509091565b816101e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b990610378565b6000825580601f106102c9575050565b601f0160209004906000526020600020908101906102e791906102ea565b50565b5b808211156102ff57600081556001016102eb565b5090565b60006040828403121561031557600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034f57858101830151858201606001528201610333565b81811115610361576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038c57607f821691505b6020821081141561031557634e487b7160e01b600052602260045260246000fd5b6000602082840312156103bf57600080fd5b815180151581146103cf57600080fd5b939250505056fea2646970667358221220f76b102cfc9261256c3b3e694284dc83f2b285b1980954c91e3d39c63d2bc15964736f6c63430008090033`,
  BytecodeLen: 1640,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
