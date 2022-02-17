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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc1]
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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v119 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v122 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:36:40:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v123 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:37:54:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v124 = stdlib.digest(ctc1, [v123, v122]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v119, v124],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [v119, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v127, v128], secs: v130, time: v129, didSend: v52, from: v126 } = txn1;
      
      sim_r.txns.push({
        amt: v127,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v127, v128], secs: v130, time: v129, didSend: v52, from: v126 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v137], secs: v139, time: v138, didSend: v63, from: v136 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v126, v127, v128, v136, v137, v123, v122],
    evt_cnt: 2,
    funcNum: 2,
    lct: v138,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v145, v146], secs: v148, time: v147, didSend: v74, from: v144 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:56:9:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v150 = stdlib.addressEq(v126, v144);
      stdlib.assert(v150, {
        at: './index.rsh:56:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v151 = stdlib.digest(ctc1, [v145, v146]);
      const v152 = stdlib.digestEq(v128, v151);
      stdlib.assert(v152, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:57:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v153 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:55:decimal', stdlib.UInt_max, 4), v137);
      const v154 = stdlib.add(v146, v153);
      const v155 = stdlib.mod(v154, stdlib.checkedBigNumberify('./index.rsh:6:71:decimal', stdlib.UInt_max, 3));
      const v156 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v157 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v158 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
      const v159 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v160 = v157 ? v158 : v159;
      const v161 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v162 = v156 ? v161 : v160;
      const v163 = v162[stdlib.checkedBigNumberify('./index.rsh:60:20:array', stdlib.UInt_max, 0)];
      const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:60:20:array', stdlib.UInt_max, 1)];
      const v165 = stdlib.mul(v163, v127);
      sim_r.txns.push({
        amt: v165,
        kind: 'from',
        to: v126,
        tok: undefined
        });
      const v170 = stdlib.mul(v164, v127);
      sim_r.txns.push({
        amt: v170,
        kind: 'from',
        to: v136,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v145, v146], secs: v148, time: v147, didSend: v74, from: v144 } = txn3;
  ;
  const v150 = stdlib.addressEq(v126, v144);
  stdlib.assert(v150, {
    at: './index.rsh:56:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v151 = stdlib.digest(ctc1, [v145, v146]);
  const v152 = stdlib.digestEq(v128, v151);
  stdlib.assert(v152, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:57:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v153 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:55:decimal', stdlib.UInt_max, 4), v137);
  const v154 = stdlib.add(v146, v153);
  const v155 = stdlib.mod(v154, stdlib.checkedBigNumberify('./index.rsh:6:71:decimal', stdlib.UInt_max, 3));
  const v156 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v157 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v158 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v159 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  const v160 = v157 ? v158 : v159;
  const v161 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v162 = v156 ? v161 : v160;
  const v163 = v162[stdlib.checkedBigNumberify('./index.rsh:60:20:array', stdlib.UInt_max, 0)];
  const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:60:20:array', stdlib.UInt_max, 1)];
  const v165 = stdlib.mul(v163, v127);
  ;
  const v170 = stdlib.mul(v164, v127);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v155), {
    at: './index.rsh:69:24:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v127, v128], secs: v130, time: v129, didSend: v52, from: v126 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v127), {
    at: './index.rsh:46:25:application',
    fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v135 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:47:48:application',
    fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v126, v127, v128, v135],
    evt_cnt: 1,
    funcNum: 1,
    lct: v129,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v127, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v137], secs: v139, time: v138, didSend: v63, from: v136 } = txn2;
      
      sim_r.txns.push({
        amt: v127,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v137], secs: v139, time: v138, didSend: v63, from: v136 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v145, v146], secs: v148, time: v147, didSend: v74, from: v144 } = txn3;
  ;
  const v150 = stdlib.addressEq(v126, v144);
  stdlib.assert(v150, {
    at: './index.rsh:56:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v151 = stdlib.digest(ctc3, [v145, v146]);
  const v152 = stdlib.digestEq(v128, v151);
  stdlib.assert(v152, {
    at: 'reach standard library:58:17:application',
    fs: ['at ./index.rsh:57:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v153 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:6:55:decimal', stdlib.UInt_max, 4), v137);
  const v154 = stdlib.add(v146, v153);
  const v155 = stdlib.mod(v154, stdlib.checkedBigNumberify('./index.rsh:6:71:decimal', stdlib.UInt_max, 3));
  const v156 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v157 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v158 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v159 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  const v160 = v157 ? v158 : v159;
  const v161 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v162 = v156 ? v161 : v160;
  const v163 = v162[stdlib.checkedBigNumberify('./index.rsh:60:20:array', stdlib.UInt_max, 0)];
  const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:60:20:array', stdlib.UInt_max, 1)];
  const v165 = stdlib.mul(v163, v127);
  ;
  const v170 = stdlib.mul(v164, v127);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v155), {
    at: './index.rsh:69:24:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
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
  appApproval: `BSAFAAECCCAmAgEAACI1ADEYQQJqKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgEXNhoCFzUENhoDNQVJIwxAAX5JJAxAAPQkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQDIQRbNf40BSJbNf00BSVbNfyABPMtCgw0/RZQNPwWULA0/zEAEkQ0A1coIDT9FjT8FlABEkQ0/IEENAOBaFsJCIEDGDX7gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPsiEk2AEAAAAAAAAAACAAAAAAAAAAA0+yQSTTX6NPoiWzT+C0lBAAyxsggjshA0/7IHsyJINPolWzT+C0lBAA+xsggjshA0A1dIILIHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgEaSCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMhBFs1/jQDVyggNf00BRc1/IAE1RUZFDT8FlCwNP5JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP80/hZQNP1QMQBQNPwWUChLAVcAcGdIJDUBMgY1AjEZIhJEQgCWSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BVcIIDX+gAS03vNWNP8WUDT+ULCBoI0GSUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT/SUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDEANP8WUDT+UChLAVcASGdIIzUBMgY1AjEZIhJEQgAAKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
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
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
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
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
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
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "name": "v145",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
                "name": "v145",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d5a38038062000d5a83398101604081905262000026916200022c565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a160208101515162000089903414600762000125565b620000b7604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011c9260029201906200014f565b505050620002c9565b816200014b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015d906200028c565b90600052602060002090601f016020900481019282620001815760008555620001cc565b82601f106200019c57805160ff1916838001178555620001cc565b82800160010185558215620001cc579182015b82811115620001cc578251825591602001919060010190620001af565b50620001da929150620001de565b5090565b5b80821115620001da5760008155600101620001df565b604080519081016001600160401b03811182821017156200022657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024057600080fd5b6200024a620001f5565b835181526040601f19830112156200026157600080fd5b6200026b620001f5565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a157607f821691505b60208210811415620002c357634e487b7160e01b600052602260045260246000fd5b50919050565b610a8180620002d96000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063873779a11461008d5780639014596a146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b61005261009b3660046107f4565b6100d6565b6100526100ae36600461080c565b6102e6565b3480156100bf57600080fd5b506100c86105be565b60405161006f92919061081e565b6100e6600160005414600961065b565b610100813515806100f957506001548235145b600a61065b565b6000808055600280546101129061087b565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061087b565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906108cc565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101f481602001513414600861065b565b6102386040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516102bc9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b604051602081830303815290604052600290805190602001906102e0929190610684565b50505050565b6102f6600260005414600e61065b565b6103108135158061030957506001548235145b600f61065b565b6000808055600280546103229061087b565b80601f016020809104026020016040519081016040528092919081815260200182805461034e9061087b565b801561039b5780601f106103705761010080835404028352916020019161039b565b820191906000526020600020905b81548152906001019060200180831161037e57829003601f168201915b50505050508060200190518101906103b3919061093b565b90506103bd610708565b604080518435815260208086013590820152848201358183015290517f1909e55c00533c67ba90e14c8fe93a469c3600425ed0758459eff538687e7b919181900360600190a161040f3415600b61065b565b8151610427906001600160a01b03163314600c61065b565b604080516104739161044d91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836040015114600d61065b565b60038260800151600461048691906109db565b6104949060408601356109f2565b61049e9190610a0a565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146104f8578051156104ee5780604001516104fe565b80602001516104fe565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916105289190610a2c565b6040518115909202916000818181858888f19350505050158015610550573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc836020015183608001516020015161057a9190610a2c565b6040518115909202916000818181858888f193505050501580156105a2573d6000803e3d6000fd5b50600080805560018190556105b9906002906107a2565b505050565b6000606060005460028080546105d39061087b565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff9061087b565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b50505050509050915091509091565b816106805760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546106909061087b565b90600052602060002090601f0160209004810192826106b257600085556106f8565b82601f106106cb57805160ff19168380011785556106f8565b828001600101855582156106f8579182015b828111156106f85782518255916020019190600101906106dd565b506107049291506107df565b5090565b6040518060a0016040528060008152602001610737604051806040016040528060008152602001600081525090565b8152602001610759604051806040016040528060008152602001600081525090565b815260200161077b604051806040016040528060008152602001600081525090565b815260200161079d604051806040016040528060008152602001600081525090565b905290565b5080546107ae9061087b565b6000825580601f106107be575050565b601f0160209004906000526020600020908101906107dc91906107df565b50565b5b8082111561070457600081556001016107e0565b60006040828403121561080657600080fd5b50919050565b60006060828403121561080657600080fd5b82815260006020604081840152835180604085015260005b8181101561085257858101830151858201606001528201610836565b81811115610864576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061088f57607f821691505b6020821081141561080657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146108c757600080fd5b919050565b6000606082840312156108de57600080fd5b6040516060810181811067ffffffffffffffff8211171561090f57634e487b7160e01b600052604160045260246000fd5b60405261091b836108b0565b815260208301516020820152604083015160408201528091505092915050565b600060a0828403121561094d57600080fd5b60405160a0810181811067ffffffffffffffff8211171561097e57634e487b7160e01b600052604160045260246000fd5b60405261098a836108b0565b815260208301516020820152604083015160408201526109ac606084016108b0565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156109ed576109ed6109c5565b500390565b60008219821115610a0557610a056109c5565b500190565b600082610a2757634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610a4657610a466109c5565b50029056fea26469706673582212206175549e0d34b406785b946774c7fb494383b6e9b21181b5b3df8164909cf8c064736f6c63430008090033`,
  BytecodeLen: 3418,
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
