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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
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
  
  
  const v75 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v78 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:22:50:application',
    fs: ['at ./index.rsh:20:13:application call to [unknown function] (defined at: ./index.rsh:20:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v75, v78],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v75, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v80, v81], secs: v83, time: v82, didSend: v31, from: v79 } = txn1;
      
      sim_r.txns.push({
        amt: v80,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v80, v81], secs: v83, time: v82, didSend: v31, from: v79 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v90], secs: v92, time: v91, didSend: v42, from: v89 } = txn2;
  ;
  const v95 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:33:decimal', stdlib.UInt_max, 4), v90);
  const v96 = stdlib.add(v81, v95);
  const v97 = stdlib.mod(v96, stdlib.checkedBigNumberify('./index.rsh:33:49:decimal', stdlib.UInt_max, 3));
  const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 2));
  const v99 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:36:16:decimal', stdlib.UInt_max, 0));
  const v100 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v101 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  const v102 = v99 ? v100 : v101;
  const v103 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v104 = v98 ? v103 : v102;
  const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:34:20:array', stdlib.UInt_max, 0)];
  const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:34:20:array', stdlib.UInt_max, 1)];
  const v107 = stdlib.mul(v105, v80);
  ;
  const v112 = stdlib.mul(v106, v80);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v97), {
    at: './index.rsh:43:24:application',
    fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v80, v81], secs: v83, time: v82, didSend: v31, from: v79 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v80), {
    at: './index.rsh:28:25:application',
    fs: ['at ./index.rsh:27:11:application call to [unknown function] (defined at: ./index.rsh:27:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v88 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:29:48:application',
    fs: ['at ./index.rsh:27:11:application call to [unknown function] (defined at: ./index.rsh:27:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v79, v80, v81, v88],
    evt_cnt: 1,
    funcNum: 1,
    lct: v82,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v80, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v90], secs: v92, time: v91, didSend: v42, from: v89 } = txn2;
      
      sim_r.txns.push({
        amt: v80,
        kind: 'to',
        tok: undefined
        });
      const v95 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:33:decimal', stdlib.UInt_max, 4), v90);
      const v96 = stdlib.add(v81, v95);
      const v97 = stdlib.mod(v96, stdlib.checkedBigNumberify('./index.rsh:33:49:decimal', stdlib.UInt_max, 3));
      const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 2));
      const v99 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:36:16:decimal', stdlib.UInt_max, 0));
      const v100 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
      const v101 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v102 = v99 ? v100 : v101;
      const v103 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v104 = v98 ? v103 : v102;
      const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:34:20:array', stdlib.UInt_max, 0)];
      const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:34:20:array', stdlib.UInt_max, 1)];
      const v107 = stdlib.mul(v105, v80);
      sim_r.txns.push({
        amt: v107,
        kind: 'from',
        to: v79,
        tok: undefined
        });
      const v112 = stdlib.mul(v106, v80);
      sim_r.txns.push({
        amt: v112,
        kind: 'from',
        to: v89,
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
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v90], secs: v92, time: v91, didSend: v42, from: v89 } = txn2;
  ;
  const v95 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:33:33:decimal', stdlib.UInt_max, 4), v90);
  const v96 = stdlib.add(v81, v95);
  const v97 = stdlib.mod(v96, stdlib.checkedBigNumberify('./index.rsh:33:49:decimal', stdlib.UInt_max, 3));
  const v98 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 2));
  const v99 = stdlib.eq(v97, stdlib.checkedBigNumberify('./index.rsh:36:16:decimal', stdlib.UInt_max, 0));
  const v100 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v101 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  const v102 = v99 ? v100 : v101;
  const v103 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v104 = v98 ? v103 : v102;
  const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:34:20:array', stdlib.UInt_max, 0)];
  const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:34:20:array', stdlib.UInt_max, 1)];
  const v107 = stdlib.mul(v105, v80);
  ;
  const v112 = stdlib.mul(v106, v80);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v97), {
    at: './index.rsh:43:24:application',
    fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:25:function exp)'],
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
  appApproval: `BSADAAEIJgIAAQAiNQAxGEEB3yhkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSMMQADyIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDgSBbNf80BRc1/oAE1RUZFDT+FlCwNP9JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINAOBKFuBBDT+CQiBAxg1/YAQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT9IhJNgBAAAAAAAAAAAgAAAAAAAAAANP2BAhJNNfw0/CJbNP8LSUEAD7GyCCOyEDQDVwAgsgezIkg0/CRbNP8LSUEADLGyCCOyEDEAsgezIkgisbIII7IQMgmyCTIKsgezIkgxGYEFEkRCAJdIIjQBEkQ0BEkiEkw0AhIRRDQFIls1/zQFJFs1/oAErNEfwzT/FlA0/hZQsIGgjQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP9JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIMQA0/xZQNP4WUClLAVcAMGdIIzUBMgY1AjEZIhJEQgAAKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
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
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v81",
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
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v81",
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
                "name": "v90",
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
                "name": "v90",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161097238038061097283398101604081905261002291610213565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a1602081015151610083903414600761011b565b6100b0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151610113926002920190610144565b5050506102a8565b816101405760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101509061026d565b90600052602060002090601f01602090048101928261017257600085556101b8565b82601f1061018b57805160ff19168380011785556101b8565b828001600101855582156101b8579182015b828111156101b857825182559160200191906001019061019d565b506101c49291506101c8565b5090565b5b808211156101c457600081556001016101c9565b604080519081016001600160401b038111828210171561020d57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022657600080fd5b61022e6101dd565b835181526040601f198301121561024457600080fd5b61024c6101dd565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028157607f821691505b602082108114156102a257634e487b7160e01b600052602260045260246000fd5b50919050565b6106bb806102b76000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046104d9565b6100b8565b3480156100a157600080fd5b506100aa610323565b6040516100649291906104f1565b6100c860016000541460096103c0565b6100e2813515806100db57506001548235145b600a6103c0565b6000808055600280546100f49061054e565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061054e565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610583565b905061018f6103e9565b6040805184358152602080860135908201527f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101dd8260200151341460086103c0565b60036101ee60208501356004610615565b83604001516101fd919061062c565b6102079190610644565b815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051829052519092015281511461026157805115610257578060400151610267565b8060200151610267565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916102919190610666565b6040518115909202916000818181858888f193505050501580156102b9573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360800151602001516102df9190610666565b6040518115909202916000818181858888f19350505050158015610307573d6000803e3d6000fd5b506000808055600181905561031e90600290610483565b505050565b6000606060005460028080546103389061054e565b80601f01602080910402602001604051908101604052809291908181526020018280546103649061054e565b80156103b15780601f10610386576101008083540402835291602001916103b1565b820191906000526020600020905b81548152906001019060200180831161039457829003601f168201915b50505050509050915091509091565b816103e55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060008152602001610418604051806040016040528060008152602001600081525090565b815260200161043a604051806040016040528060008152602001600081525090565b815260200161045c604051806040016040528060008152602001600081525090565b815260200161047e604051806040016040528060008152602001600081525090565b905290565b50805461048f9061054e565b6000825580601f1061049f575050565b601f0160209004906000526020600020908101906104bd91906104c0565b50565b5b808211156104d557600081556001016104c1565b5090565b6000604082840312156104eb57600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561052557858101830151858201606001528201610509565b81811115610537576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061056257607f821691505b602082108114156104eb57634e487b7160e01b600052602260045260246000fd5b60006060828403121561059557600080fd5b6040516060810181811067ffffffffffffffff821117156105c657634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105e057600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610627576106276105ff565b500390565b6000821982111561063f5761063f6105ff565b500190565b60008261066157634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610680576106806105ff565b50029056fea26469706673582212200d045a395c3902fc895c87fd084fbad8a4d4bb97778c4b574cd7c4442ddeb64264736f6c63430008090033`,
  BytecodeLen: 2418,
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
