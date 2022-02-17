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
      1: [ctc0, ctc1, ctc2, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v201 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v202 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v205 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:47:40:application',
    fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v206 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:48:54:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v207 = stdlib.digest(ctc1, [v206, v205]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v202, v207, v201],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc0],
    pay: [v202, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v210, v211, v212], secs: v214, time: v213, didSend: v62, from: v209 } = txn1;
      
      sim_r.txns.push({
        amt: v210,
        kind: 'to',
        tok: undefined
        });
      const v223 = stdlib.add(v213, v212);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v210, v211, v212], secs: v214, time: v213, didSend: v62, from: v209 } = txn1;
  ;
  const v223 = stdlib.add(v213, v212);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v223],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v209, v210, v211, v212, v223],
      evt_cnt: 0,
      funcNum: 2,
      lct: v213,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [], secs: v302, time: v301, didSend: v169, from: v300 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v210,
          kind: 'from',
          to: v209,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v302, time: v301, didSend: v169, from: v300 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:41:29:application',
      fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v229], secs: v231, time: v230, didSend: v73, from: v228 } = txn2;
    const v233 = stdlib.add(v210, v210);
    ;
    const v240 = stdlib.add(v230, v212);
    const txn3 = await (ctc.sendrecv({
      args: [v209, v210, v211, v228, v229, v233, v240, v206, v205],
      evt_cnt: 2,
      funcNum: 3,
      lct: v230,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:70:9:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [v245, v246], secs: v248, time: v247, didSend: v84, from: v244 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:70:9:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v250 = stdlib.addressEq(v209, v244);
        stdlib.assert(v250, {
          at: './index.rsh:70:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v251 = stdlib.digest(ctc1, [v245, v246]);
        const v252 = stdlib.digestEq(v211, v251);
        stdlib.assert(v252, {
          at: 'reach standard library:58:17:application',
          fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v253 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v229);
        const v254 = stdlib.add(v246, v253);
        const v255 = stdlib.mod(v254, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
        const v256 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v258 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
        const v260 = v257 ? v258 : v259;
        const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v262 = v256 ? v261 : v260;
        const v263 = v262[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 0)];
        const v264 = v262[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 1)];
        const v265 = stdlib.mul(v263, v210);
        sim_r.txns.push({
          amt: v265,
          kind: 'from',
          to: v209,
          tok: undefined
          });
        const v270 = stdlib.mul(v264, v210);
        sim_r.txns.push({
          amt: v270,
          kind: 'from',
          to: v228,
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
      timeoutAt: ['time', v240],
      tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v209, v210, v211, v228, v229, v233, v240],
        evt_cnt: 0,
        funcNum: 4,
        lct: v230,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v283, time: v282, didSend: v137, from: v281 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v285 = stdlib.addressEq(v209, v281);
          const v286 = stdlib.addressEq(v228, v281);
          const v287 = v285 ? true : v286;
          stdlib.assert(v287, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          sim_r.txns.push({
            amt: v233,
            kind: 'from',
            to: v228,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v283, time: v282, didSend: v137, from: v281 } = txn4;
      ;
      const v285 = stdlib.addressEq(v209, v281);
      const v286 = stdlib.addressEq(v228, v281);
      const v287 = v285 ? true : v286;
      stdlib.assert(v287, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:41:29:application',
        fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v245, v246], secs: v248, time: v247, didSend: v84, from: v244 } = txn3;
      ;
      const v250 = stdlib.addressEq(v209, v244);
      stdlib.assert(v250, {
        at: './index.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v251 = stdlib.digest(ctc1, [v245, v246]);
      const v252 = stdlib.digestEq(v211, v251);
      stdlib.assert(v252, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v253 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v229);
      const v254 = stdlib.add(v246, v253);
      const v255 = stdlib.mod(v254, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v256 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v258 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
      const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v260 = v257 ? v258 : v259;
      const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v262 = v256 ? v261 : v260;
      const v263 = v262[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 0)];
      const v264 = v262[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 1)];
      const v265 = stdlib.mul(v263, v210);
      ;
      const v270 = stdlib.mul(v264, v210);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v255), {
        at: './index.rsh:84:24:application',
        fs: ['at ./index.rsh:83:7:application call to [unknown function] (defined at: ./index.rsh:83:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
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
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v210, v211, v212], secs: v214, time: v213, didSend: v62, from: v209 } = txn1;
  ;
  const v223 = stdlib.add(v213, v212);
  stdlib.protect(ctc2, await interact.acceptWager(v210), {
    at: './index.rsh:58:25:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v227 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:59:48:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v209, v210, v211, v212, v223, v227],
    evt_cnt: 1,
    funcNum: 1,
    lct: v213,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v210, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v229], secs: v231, time: v230, didSend: v73, from: v228 } = txn2;
      
      const v233 = stdlib.add(v210, v210);
      sim_r.txns.push({
        amt: v210,
        kind: 'to',
        tok: undefined
        });
      const v240 = stdlib.add(v230, v212);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v223],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v209, v210, v211, v212, v223],
      evt_cnt: 0,
      funcNum: 2,
      lct: v213,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        
        const {data: [], secs: v302, time: v301, didSend: v169, from: v300 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.txns.push({
          amt: v210,
          kind: 'from',
          to: v209,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v302, time: v301, didSend: v169, from: v300 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:29:application',
      fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v229], secs: v231, time: v230, didSend: v73, from: v228 } = txn2;
    const v233 = stdlib.add(v210, v210);
    ;
    const v240 = stdlib.add(v230, v212);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v240],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v209, v210, v211, v228, v229, v233, v240],
        evt_cnt: 0,
        funcNum: 4,
        lct: v230,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          
          const {data: [], secs: v283, time: v282, didSend: v137, from: v281 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v285 = stdlib.addressEq(v209, v281);
          const v286 = stdlib.addressEq(v228, v281);
          const v287 = v285 ? true : v286;
          stdlib.assert(v287, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v233,
            kind: 'from',
            to: v228,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v283, time: v282, didSend: v137, from: v281 } = txn4;
      ;
      const v285 = stdlib.addressEq(v209, v281);
      const v286 = stdlib.addressEq(v228, v281);
      const v287 = v285 ? true : v286;
      stdlib.assert(v287, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:41:29:application',
        fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v245, v246], secs: v248, time: v247, didSend: v84, from: v244 } = txn3;
      ;
      const v250 = stdlib.addressEq(v209, v244);
      stdlib.assert(v250, {
        at: './index.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v251 = stdlib.digest(ctc3, [v245, v246]);
      const v252 = stdlib.digestEq(v211, v251);
      stdlib.assert(v252, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v253 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v229);
      const v254 = stdlib.add(v246, v253);
      const v255 = stdlib.mod(v254, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v256 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v257 = stdlib.eq(v255, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v258 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
      const v259 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v260 = v257 ? v258 : v259;
      const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v262 = v256 ? v261 : v260;
      const v263 = v262[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 0)];
      const v264 = v262[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 1)];
      const v265 = stdlib.mul(v263, v210);
      ;
      const v270 = stdlib.mul(v264, v210);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v255), {
        at: './index.rsh:84:24:application',
        fs: ['at ./index.rsh:83:7:application call to [unknown function] (defined at: ./index.rsh:83:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSAKAAEDCAQFIAJ4UCYDAQABAQAiNQAxGEEDjipkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSEHDEAB1UkkDEABdkkhBAxAAHEhBBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDV0ggNf+ABJEnNPOwMgY0AyEIWw9ENANXACAxABI0/zEAEhFENAOBcFtJQQAMsbIII7IQNP+yB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZIQUSREICuUgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/zQDIQZbNf40BSJbNf00BSVbNfyABKSl8Ig0/RZQNPwWULAyBjQDIQhbDEQ0/zEAEkQ0A1coIDT9FjT8FlABEkQ0/CEENAOBaFsJCCQYNfuAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0+yISTYAQAAAAAAAAAAIAAAAAAAAAADT7IQcSTTX6NPoiWzT+C0lBAAyxsggjshA0/7IHsyJINPolWzT+C0lBAA+xsggjshA0A1dIILIHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRkhBRJEQgG7SCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhCVsPRDQDIQZbSUEAD7GyCCOyEDQDVwAgsgezIkgisbIII7IQMgmyCTIKsgezIkgxGSEFEkRCAWJJIwxAAKxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf80AyEGWzX+NANXKCA1/TQFFzX8gATVFRkUNPwWULAyBjQDIQlbDEQ0/kkINfs0/klBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgyBjQDgUhbCDX6NP80/hZQNP1QMQBQNPwWUDT7FlA0+hZQKEsBVwB/ZylLAVd/AWdIJDUBMgY1AjEZIhJEQgCwSCI0ARJENARJIhJMNAISEUQ0BSJbNf80BVcIIDX+NAWBKFs1/YAElF1hFjT/FlA0/lA0/RZQsIGgjQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP9JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIMgY0/Qg1/DEANP8WUDT+UDT9FlA0/BZQKEsBVwBYZ0gjNQEyBjUCMRkiEkRCAAAqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
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
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
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
                "name": "v229",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v245",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v229",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v245",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v246",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200125e3803806200125e833981016040819052620000269162000268565b6000808055436003556040805160208101909152908152604080518351815260208085015180518284015290810151828401529091015160608201527f756807fe21484d54421b0dab51b98946711df868f9dc26ba5d9f68d9584b653d9060800160405180910390a1602082015151620000a4903414600762000161565b602082015160400151620000b99043620002ff565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015792600292909101906200018b565b5050505062000363565b81620001875760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001999062000326565b90600052602060002090601f016020900481019282620001bd576000855562000208565b82601f10620001d857805160ff191683800117855562000208565b8280016001018555821562000208579182015b8281111562000208578251825591602001919060010190620001eb565b50620002169291506200021a565b5090565b5b808211156200021657600081556001016200021b565b604051606081016001600160401b03811182821017156200026257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027c57600080fd5b604080519081016001600160401b0381118282101715620002ad57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002c757600080fd5b620002d162000231565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033b57607f821691505b602082108114156200035d57634e487b7160e01b600052602260045260246000fd5b50919050565b610eeb80620003736000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063ad2d91d11461010c57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610c01565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610c01565b61029b565b6100756100e4366004610c01565b610535565b3480156100f557600080fd5b506100fe6106ce565b604051610092929190610c24565b61007561011a366004610c81565b61076b565b61012f600160005414600d610a54565b6101498135158061014257506001548235145b600e610a54565b60008080556002805461015b90610c93565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c93565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ce4565b90506102008160800151431015600f610a54565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161022f9190610d67565b60405180910390a16102433415600c610a54565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610280573d6000803e3d6000fd5b506000808055600181905561029790600290610a79565b5050565b6102ab6001600054146009610a54565b6102c5813515806102be57506001548235145b600a610a54565b6000808055600280546102d790610c93565b80601f016020809104026020016040519081016040528092919081815260200182805461030390610c93565b80156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b50505050508060200190518101906103689190610ce4565b9050610387604051806040016040528060008152602001600081525090565b61039882608001514310600b610a54565b6040805184358152602080860135908201527f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a160208201516103e49080610da7565b815260208201516103f89034146008610a54565b60608201516104079043610da7565b8160200181815250506104626040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152858201356080840152835160a08401528382015160c08401526003600055436001555161050a9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061052e929190610ab6565b5050505050565b6105456003600054146018610a54565b61055f8135158061055857506001548235145b6019610a54565b60008080556002805461057190610c93565b80601f016020809104026020016040519081016040528092919081815260200182805461059d90610c93565b80156105ea5780601f106105bf576101008083540402835291602001916105ea565b820191906000526020600020905b8154815290600101906020018083116105cd57829003601f168201915b50505050508060200190518101906106029190610dbf565b90506106168160c00151431015601a610a54565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1826040516106459190610d67565b60405180910390a161065934156016610a54565b805161068d906001600160a01b031633146106835760608201516001600160a01b03163314610686565b60015b6017610a54565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610280573d6000803e3d6000fd5b6000606060005460028080546106e390610c93565b80601f016020809104026020016040519081016040528092919081815260200182805461070f90610c93565b801561075c5780601f106107315761010080835404028352916020019161075c565b820191906000526020600020905b81548152906001019060200180831161073f57829003601f168201915b50505050509050915091509091565b61077b6003600054146013610a54565b6107958135158061078e57506001548235145b6014610a54565b6000808055600280546107a790610c93565b80601f01602080910402602001604051908101604052809291908181526020018280546107d390610c93565b80156108205780601f106107f557610100808354040283529160200191610820565b820191906000526020600020905b81548152906001019060200180831161080357829003601f168201915b50505050508060200190518101906108389190610dbf565b9050610842610b3a565b6108538260c0015143106015610a54565b604080518435815260208086013590820152848201358183015290517f84507ca2af78d13a2530a900a9f15ea561ca44c1932ac839ff12ff8719026e4a9181900360600190a16108a534156010610a54565b81516108bd906001600160a01b031633146011610a54565b60408051610909916108e391602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360400151146012610a54565b60038260800151600461091c9190610e5d565b61092a906040860135610da7565b6109349190610e74565b815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051829052519092015281511461098e57805115610984578060400151610994565b8060200151610994565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916109be9190610e96565b6040518115909202916000818181858888f193505050501580156109e6573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc8360200151836080015160200151610a109190610e96565b6040518115909202916000818181858888f19350505050158015610a38573d6000803e3d6000fd5b5060008080556001819055610a4f90600290610a79565b505050565b816102975760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610a8590610c93565b6000825580601f10610a95575050565b601f016020900490600052602060002090810190610ab39190610bd4565b50565b828054610ac290610c93565b90600052602060002090601f016020900481019282610ae45760008555610b2a565b82601f10610afd57805160ff1916838001178555610b2a565b82800160010185558215610b2a579182015b82811115610b2a578251825591602001919060010190610b0f565b50610b36929150610bd4565b5090565b6040518060a0016040528060008152602001610b69604051806040016040528060008152602001600081525090565b8152602001610b8b604051806040016040528060008152602001600081525090565b8152602001610bad604051806040016040528060008152602001600081525090565b8152602001610bcf604051806040016040528060008152602001600081525090565b905290565b5b80821115610b365760008155600101610bd5565b600060408284031215610bfb57600080fd5b50919050565b600060408284031215610c1357600080fd5b610c1d8383610be9565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c5857858101830151858201606001528201610c3c565b81811115610c6a576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610bfb57600080fd5b600181811c90821680610ca757607f821691505b60208210811415610bfb57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cdf57600080fd5b919050565b600060a08284031215610cf657600080fd5b60405160a0810181811067ffffffffffffffff82111715610d2757634e487b7160e01b600052604160045260246000fd5b604052610d3383610cc8565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b81358152604081016020830135801515808214610d8357600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610dba57610dba610d91565b500190565b600060e08284031215610dd157600080fd5b60405160e0810181811067ffffffffffffffff82111715610e0257634e487b7160e01b600052604160045260246000fd5b604052610e0e83610cc8565b81526020830151602082015260408301516040820152610e3060608401610cc8565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600082821015610e6f57610e6f610d91565b500390565b600082610e9157634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610eb057610eb0610d91565b50029056fea2646970667358221220cfca85c1ba012f94cac2ce285c366c09f2243f9c619975eb1f4e2b2feb89846364736f6c63430008090033`,
  BytecodeLen: 4702,
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
