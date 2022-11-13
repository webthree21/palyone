(function(t) {
	function e(e) {
		for (var i, r, o = e[0], c = e[1], p = e[2], u = 0, d = []; u < o.length; u++) r = o[u], Object.prototype
			.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]), n[r] = 0;
		for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
		l && l(e);
		while (d.length) d.shift()();
		return s.push.apply(s, p || []), a()
	}

	function a() {
		for (var t, e = 0; e < s.length; e++) {
			for (var a = s[e], i = !0, o = 1; o < a.length; o++) {
				var c = a[o];
				0 !== n[c] && (i = !1)
			}
			i && (s.splice(e--, 1), t = r(r.s = a[0]))
		}
		return t
	}
	var i = {},
		n = {
			app: 0
		},
		s = [];

	function r(e) {
		if (i[e]) return i[e].exports;
		var a = i[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
	}
	r.m = t, r.c = i, r.d = function(t, e, a) {
		r.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: a
		})
	}, r.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, r.t = function(t, e) {
		if (1 & e && (t = r(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var a = Object.create(null);
		if (r.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var i in t) r.d(a, i, function(e) {
				return t[e]
			}.bind(null, i));
		return a
	}, r.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return r.d(e, "a", e), e
	}, r.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, r.p = "";
	var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
		c = o.push.bind(o);
	o.push = e, o = o.slice();
	for (var p = 0; p < o.length; p++) e(o[p]);
	var l = c;
	s.push([0, "chunk-vendors"]), a()
})({
	0: function(t, e, a) {
		t.exports = a("56d7")
	},
	"02ef": function(t) {
		t.exports = JSON.parse(
			'{"contractName":"DOGI","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldGov","type":"address"},{"indexed":false,"internalType":"address","name":"newGov","type":"address"}],"name":"NewGov","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingGov","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingGov","type":"address"}],"name":"NewPendingGov","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingGov","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"removeMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_pendingGov","type":"address"}],"name":"setPendingGov","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptGov","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"address":"0xB0f42Db8bd5a68A0c7029B9598738FF4E341433A"}'
		)
	},
	"050b": function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	"08bf": function(t, e, a) {
		t.exports = a.p + "img/character.c021f754.png"
	},
	"0ab4": function(t, e, a) {
		"use strict";
		a("1471")
	},
	"0ad3": function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	"0be7": function(t, e, a) {},
	"0f56": function(t, e, a) {},
	1: function(t, e) {},
	10: function(t, e) {},
	11: function(t, e) {},
	12: function(t, e) {},
	13: function(t, e) {},
	1328: function(t) {
		t.exports = JSON.parse(
			'{"v":"5.6.9","fr":30,"ip":0,"op":120,"w":743,"h":744,"nm":"pinpaibiaoshi_QQyinle","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":1,"nm":"白色 纯色 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":120,"s":[360]}],"ix":10},"p":{"a":0,"k":[371,372,0],"ix":2},"a":{"a":0,"k":[371.5,372,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"f","pt":{"a":0,"k":{"i":[[0,0],[17.918,-4.222],[20.804,0.25],[6.148,-0.852],[1.57,-3.438],[-2.136,-3.117],[-9.985,-16.77],[-8.961,-14.848],[-10.75,-18.43],[-2.051,-4.098],[4.734,0.254],[12.578,-5.078],[9.054,-21.871],[-2.683,-12.371],[-24.414,-8.051],[-7.039,-0.875],[-12.391,2.461],[-8.262,3.68],[-8.027,13.863],[10.328,19.641],[6.015,10.754],[8.32,14.336],[10.75,18.562],[2.304,4.867],[-20.855,49.27],[0,0],[-1.023,-9.09],[-2.887,-1.957],[-10.508,-42.34],[1.894,-21.097],[5.418,-15.305],[6.66,-11.523],[19.723,-14.856],[14.531,-6.16],[16.867,-2.328],[16.996,2.23],[19.141,9.938],[18.512,38.527],[2.493,16.856],[0.235,11.668],[-30.301,34.911],[-23.805,10.996],[-11.883,3.477],[-22.535,-2.582],[-11.043,-3.07],[-4.676,-1.844],[-1.363,-0.886]],"o":[[-17.664,5.121],[-20.258,4.758],[-6.208,-0.168],[-3.754,0.418],[-1.574,3.433],[9.731,17.407],[8.449,14.847],[10.621,18.433],[1.793,2.945],[-6.145,-0.641],[-13.539,-0.868],[-22.258,8.055],[-4.77,11.726],[5.497,25.109],[6.246,3.355],[12.555,1.36],[8.769,-2.195],[14.414,-6.988],[11.281,-19.105],[-5.761,-11.137],[-8.192,-14.336],[-10.754,-18.688],[-2.305,-3.969],[47.152,-25.277],[0,0],[1.539,8.957],[-0.004,3.485],[34.863,26.219],[4.864,20.617],[-1.039,16.204],[-4.582,12.496],[-12.473,21.309],[-12.676,9.402],[-15.668,6.676],[-16.996,2.23],[-21.407,-2.59],[-37.976,-19.617],[-7.516,-15.293],[-1.898,-11.516],[0.438,-46.227],[17.011,-19.953],[11.304,-5.047],[21.84,-6.133],[11.371,1.445],[4.871,1.227],[1.449,0.734],[0,0]],"v":[[442.745,197.199],[389.628,212.429],[327.803,219.214],[309.24,220.238],[300.654,226.449],[301.56,237.007],[331.385,288.207],[356.986,332.879],[389.37,387.918],[394.49,398.031],[379.003,396.625],[339.322,403.023],[290.17,450],[286.97,486.992],[335.224,540.496],[355.322,546.895],[392.956,545.23],[418.553,536.398],[452.986,504.398],[454.521,442.062],[435.706,409.551],[411.003,366.543],[378.62,310.734],[372.089,297.934],[477.177,182.734],[478.584,183.632],[482.935,210.511],[487.545,219.214],[557.689,325.199],[562.171,388.175],[552.439,435.664],[535.546,471.758],[486.775,526.543],[445.818,549.969],[396.795,563.536],[345.592,563.536],[284.279,544.589],[197.24,454.992],[182.138,406.48],[178.935,371.664],[226.553,245.969],[288.506,198.992],[323.322,186.191],[390.521,180.816],[424.185,187.597],[438.521,192.207],[442.745,194.64]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"蒙版 1"}],"sw":743,"sh":744,"sc":"#ffffff","ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"形状图层 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":80,"s":[100]},{"t":120,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[370.319,366.556,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[92.91,92.91,100]},{"t":120,"s":[136.105,136.105,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[420,420],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.149738865273,0.016593617084,0.325490196078,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"形状图层 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[371,372,0],"ix":2},"a":{"a":0,"k":[3.5,-1,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[586,586],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.335943513758,0.088366011077,0.662745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3.5,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}],"markers":[]}'
		)
	},
	14: function(t, e) {},
	1471: function(t, e, a) {},
	"14d5": function(t, e, a) {
		t.exports = a.p + "img/coinmarketcap.99ac7306.svg"
	},
	"151f": function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABoCAYAAABmOHdtAAAABHNCSVQICAgIfAhkiAAABMJJREFUeF7t3U9oFFccB/DvrGutXipCxRYvojc18R/0KGqlSvxDW8S0/kn8g4faS/HkQWgv0kMPgoLQ0po92B6iF9FWQUTUglqCWbW9tKCtggrSRqipxGym31m1VCW7M/N9O5OZ+c3BEDO/99588ns7b9+8t/Hw9JiPrW/6qH0GeNuf/d9Y/urDvzKM8ts/4+s/02ynF1Tejs0bgdJX/ObVNBsTte4AsYwJS/rw5YOosa7O92Zj46zxKP/qqsCkyyFiHxGXpYXotaP7KDPvvaQv3HF9Pw3h4dJf0Pu343KbFufNQ/cAz3qt6Zlj/AQfuPgYD5cnjRgAsu58HGkg5gowSAMiXirjlaV8TRxMIi0yBTgCf60H7wO+Znc2wiHieSKuSAIxM4BEuVtFzxvAunHtmFQh5IbGiP4F3p3faTVilgDvEXDaE7TwiA/gLb+Jnket6s4ZBYyCiDMcZXe0CjHDgNEQOcRZySHOkOtMzDhgJMSTRFzrGjEHgOki5gQwGmIVN1cDZ4dddOccAYZH5HD7WD9+f98FYs4Ak0fMIWBUxEHORPXW4nbnnAJGQjzSj0G+NYyHmGPAqIgz1gOfjkTNxJwDhkfkzPbhKmZsjopYAMDWIhYEMCpiZdOTqcXmR4EAoyDiG878BI93myIWDNA9YgEBIyNua9SRCwoYHpG9+GA/Kh+NhlhgQDeIBQfUEQ2w3jfDPWPhifv60fPJ/7uzAf6nEQ/RAJ+7O4RD5ODwc44TdwehBvjS7TUaogGOMj7hmqHD/NGHjcaAnIDYY4ANhMIgGmDD+YLm3dkAm0+4cAl09zEuaOKTvJePzAAGTa/BX3wNlXMhrtnpKfPQtZf32/pd98UjU4BOVRwVZoAipAEaoCgghlsGGqAoIIZbBhqgKCCGWwYaoCgghlsGGqAoIIZbBhqgKCCGWwYaoCgghjvLQD5gucEdlH+I7UkknG2dybZOd1GZC8ABH15nFYdOuWhQUmW0obuzBHyn1ucCsIPLHb5XG5JGPKfqd3Kq/oBStwzIT6yY2KqtpMqFhYmdg66ZZXi/hTl3tHNkQGZf/cN7sni0YdPUEsbdU9pugAYYP38sA+Pb1SPbsGF6CeNvKcXIXZgPuxfxYXef0oi0YnkX7uBd+LhSvwzIRdin72NwzW30/qM0JOlYLhyazAH1eQ6o5yh1OwCs70a5y39/yNA7kVlsK7MPkxW8INYJoNqILMcboPjbM0ADFAXEcMtAAxQFxHDLQAMUBcRwZxloU/rxfxM2pR/fLoj0V3FD8gmtjHSi+QnuH3so7Vdql7twDUNTruHbv5RGpBXbjq7ZfE98XalfBrQpffGDuA3QAO2hUtzXMJvSjyv3NG5MTOlzNvoUt7+vEK8l8fAxNaXPseAdQp60Kf3E8yD7FcrjwOwTaFdggJqfPZUT/QzQAFUBMd5eAw1QFBDDLQMNUBQQwy0DDVAUEMMtAw1QFBDDLQMFQE7hPQr+vnAfd8osEMopbChXY1wmYNcuToR+UVgF7cJ3eguxY9Iwhi4yC+dqZRUrOsi+Kipv1fe5zceW10cwEqyyX1gshthXe5aR7/KZ+MBzGwW5VmQVF+4vICS30trxogBvGjXujf7xKg6defazfwFkyWoow1JWrwAAAABJRU5ErkJggg=="
	},
	"192c": function(t, e, a) {},
	2: function(t, e) {},
	"222d": function(t, e, a) {
		"use strict";
		a("192c")
	},
	"2a16": function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "首頁",
			url_buy_twitter: "推特",
			index_SpacePi_Bscscan_t: "SpacePi瀏覽器",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "電報",
			telegraph_more: "更多電報",
			spacepiwep: {
				title: "SPISWAP",
				o: "On board",
				bnt: "審計報告",
				text: "基於此觀點，PI Network 已成為其生態系統內購買虛擬資產或服務的投資工具，將隨著 PI Network 的應用而迸發出新的活力和前所未有的價值。 以下是 PI Network 生態系統的一些關鍵點。",
				trend_bnt_title: "PI Network 趨勢",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "PI Network 將永遠是 PI NETWORK 的忠實粉絲！PI Network 現在所做的一切都是為了證明 PI 粉絲的堅持是值得的！",
			selectLang: "選擇語言",
			happy_gd: "更多友情合作商",
			happy_text: "為了讓 PI Network 實現更偉大的創舉，我們決定將合約升級至最安全機制，採取和SHIBA Token同等級別，請添加升級合約。升級後的合約將放棄所有權限和鎖倉 。合約地址:",
			happy_text1: "PI永遠是Pi Network的忠實粉絲！",
			happy_text2: "SpacePi現在所做的一切都是為了證明Pi 粉丝的堅持是值得的！",
			doge: "什麼是PI Network？",
			only: "全世界唯一一款綜合服務商類型多重跨鏈協議通證",
			introduce: "PI Network 将是区块链领域唯一一个打破技术壁垒，跨界融合综合服务商类型多重跨链协议通证，未来是属于所有区块链数字资产玩家的，让我们共同努力，见证这伟大的时刻！",
			text: ["SpacePi將打造前所未有的頂級數字生態，提供簡單高效的元宇宙數字沉浸體驗為核心。賦予代幣流通價值，讓更多人參與到PI Network的生態建設，創造無邊界的娛樂世界，鏈接世界每一個角落的用戶，為全球用戶建立無需信任以及高度去中心化的元宇宙生態。",
				"PI Network包含NFT和元宇宙这两大区块链范畴，PI Network正在打造一个去中心化的在线虚拟现实类游戏平台，将角色、道具以及人生的故事情节节融入到虚拟社交中，玩家可在虚拟世界中购 买武器、战甲、道具宝石。参与不同的收集养成虚拟、生活、动作等游戏。",
				"PI Network 所有帶來的利益會以原生代幣 PI Network 的形式呈現。 PI Network元宇宙的虛擬與現實的高度互通，閉環經濟體附著開源平台成為互聯網的最終形態。"
			],
			tetxbu: "閱讀白皮書",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["購買SpacePi"],
			index_Liquidity_title: "流動性鎖定",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus 檢測",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "PI Network 價格",
			index_SpacePi: [{
				title: "Dextools K線"
			}, {
				title: "Poocoin K線"
			}, {
				title: "Avedex K線"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "什麼是PI Network？",
				content: "SpacePi將打造前所未有的頂級數字生態，提供簡單高效的元宇宙數字沉浸體驗為核心。"
			}, {
				title: "PI Network 世界",
				content: "賦予代幣流通價值，讓更多人參與到PI Network的生態建設，創造無邊界的娛樂世界，鏈接世界每一個角落的用戶，為全球用戶建立無需信任以及高度去中心化的元宇宙生態。"
			}],
			station: {
				enter: "強大無比的PI Network生態系統",
				title: "實際上我們正在建造一個前所未有的數字世界。",
				text: ["數字經濟已經成為了一種合法的資產類型，值得投資者考慮，該類資產在短期內呈指數級增長爆發。",
					"基於這個觀點下，PI Network成了在其生態系統內購買虛擬資產或服務的投資工具，它會隨著PI Network的落地應用迸發出新的生命力與前所未有的價值。以下是PI Network生態系統的一些關鍵點。"
				],
				c: [{
					title: "PI Network 通證",
					text: "由多公鏈支持支撐的新型實用通證，在 PI Network 生態系統中作為基礎，服務各種應用，具有強大的應用場景"
				}, {
					title: "PI Network 簡介",
					text: "PI Network生態系統基於WEB3.0 全息互聯網 NFT 等技術構成打造而來，成為太空用戶位於元宇宙虛擬空間內最強大的技術支持方。"
				}, {
					title: "PI Network NFTs",
					text: "非同質化且可轉讓的數字資產，獨一無二的特性可成為PI Network生態中的一件藝術收藏品或是一個遊戲道具。"
				}, {
					title: "PI Network DAO",
					text: "PI Network 通證在PI Network生態系統中會被應用於在 DAO 的投票，以確保這個項目能夠自我維持以及沒有掌控者。"
				}, {
					title: "PI Network 前宇宙",
					text: "PI Network生態系中一個遊戲化的3D元宇宙虛擬空間"
				}, {
					title: "NFT 市場",
					text: "SpacePi市場使參與者能管理和交易 PI Network NFTs, 這些NFT以SpacePi作為流通貨幣定價"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}],
			Tokenomics: {
				text: "社區總是先行",
				title: "公平的通證生態",
				content: "為了建立我們在地球之外的民主載體，PI Network基於公平的通證生態發",
				array: [{
					title: "無",
					text: "開發稅"
				}, {
					title: "無",
					text: "通證燃燒"
				}, {
					title: "120k+",
					text: "持有人"
				}]
			},
			ROADMAP: "路線圖",
			ROADMAPtext: "這是使PI Network生態從誕生到偉大的規劃。",
			Phase1: "第一階段",
			Phase2: "第二階段",
			r_title1: "ONE",
			r_title2: "TWO",
			rt1_text1: "上線官網，部署智能合約",
			rt1_text2: "啟動Telegram以及Twitter等社媒運營",
			rt1_text3: "開啟第一輪社區成員空投",
			rt1_text4: "3000個電報成員",
			rt1_text5: "开啟市場回購",
			rt1_text6: "上線CoinMarketCap",
			rt1_text7: "上線CoinGecko",
			rt1_text8: "第三方機構審計",
			rt1_text9: "啟動大規模市場推廣",
			rt1_text10: "第二輪社區空投",
			rt2_text1: "與第三方錢包達成合作",
			rt2_text2: "",
			rt2_text3: "200K+個電報群成員",
			rt2_text4: "120k+名通證持有人",
			rt2_text5: "啟動Pi NetworkSwap的開發工作",
			rt2_text6: "啟動Pi NetworkNFT的開發工作",
			rt2_text7: "啟動PiDAO",
			rt2_text8: "上線跨鏈聚合交易協議 Pi NetworkSwap",
			rt2_text9: "上線市場頂級CEX",
			Community: {
				title: "加入 PI Network 全球社區",
				text: "PI Network 將是區塊鏈領域唯一一個打破技術壁壘，跨界融合綜合服務商類型多重跨鏈協議通證，未來是屬於所有區塊鏈數字資產玩家的，讓我們共同努力，見證這偉大的時刻！",
				buttext: "加入我們",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			answers: {
				text: "PI Network 是全世界唯一一款綜合服務商類型多重跨鏈協議通證",
				array: [{
					title: "1.SpacePi描述的的元宇宙是什麼？",
					text: "遊戲是元宇宙的初級形態。從產品形態看，遊戲是元宇宙的雛形。遊戲作為人們基於現實的模擬、延伸、 天馬行空的想像而構建的虛擬世界，其產品形態與元宇宙相似。如果您熟悉這本書或電影《頭號玩家》， 這是元宇宙的一個很好的例子。"
				}, {
					title: "2.元宇宙重要嗎？",
					text: "基於 Web3.0、全息互聯網技術、區塊鍊和NFT的融合，元宇宙概念所展現岀來的價值觀與互聯網核心價值相契合。 SpacePi認為，元宇宙或許是互聯網的終極形態。因此，我們以遊戲為切入點，打造了SpacePi——基於NFT+元宇宙的虛擬人生區塊鏈遊戲，讓現實與虛擬的鏈接更加高效，也讓價值的流通更加豐富。在最近的全球疫情中，這些數字平台的重要性變得顯而易見。"
				}, {
					title: "3.PI Network生態系統是什麼？",
					text: "為NFT+元宇宙概念支撐下的區塊鏈遊戲，PI Network 在平台生態建設方麵包含了一下幾個核心板塊  NFT遊戲系統元宇宙遊戲生態SpacePi交易所 "
				}, {
					title: "4.在PI Network元宇宙中我們可以做什麼？",
					text: "PI Network Token 簡稱 PI Network,結合NFT和元宇宙這兩大區塊鏈範疇，旨在打造一個去中心化的在線虛擬現實類游戲平台，將角色、道具以及人生的故事情節節融入到虛擬社交中，玩家可在虛擬世界中購買武器、戰甲、道具寶石。參與不同的收集養成虛擬、生活、動作等 遊戲。因此，PI Network 是第一個也是唯一一個跨元宇宙和NFT領域項目"
				}, {
					title: "5.在PI Network元宇宙中如何獲取收益？",
					text: "PI Network 還能夠支持第三方開發者進行面向區塊鏈環境的去中心化遊戲應用、混合架構遊戲應用的編程、調試與發布。同時，SpacePi整合了包括基於區塊鏈的分佈式用戶賬戶系統、錢包和NFT數字資產流通，可以實現應用內游戲資產NFT的脫鏈永久保存及跨鏈使用。"
				}, {
					title: "6.PI Network的開發人員？",
					text: "PI Network元宇宙由世界各地的獨立開發者共同參與開發，在指導、管理和增強加密相關項目方面的經驗和能力幾乎無與倫比。他們共同組成了一個強大的團隊，背後有一群志同道合的支持者，他們對PI Network元宇宙願景充滿信心和熱情，SpacePi是進入元宇宙世界的新冒險。"
				}, {
					title: "7.我如何提供更多的幫助？",
					text: "由於完全去中心化，PI Network元宇宙將需要更加龐大的社區才能達到我們的目標，歡迎您加入PI Network"
				}]
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "複製成功",
			partners_title1: "PI Network 將永遠",
			partners_title2: "成為 PI 網絡的忠實粉絲！",
			partners_text: "SpacePi現在所做的一切都是為了證明Pi Fans的堅持是值得的！ 歡迎更多平台和機構與SpacePi合作，官方聯繫郵箱：pi@space-pi.com",
			partners_email_title: "官方聯繫郵箱：",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	"2cb0": function(t) {
		t.exports = JSON.parse(
			'{"v":"5.6.9","fr":30,"ip":0,"op":102,"w":1080,"h":320,"nm":"合成 1","ddd":0,"assets":[{"id":"image_0","w":48,"h":92,"u":"spacepi_copy/","p":"img_0.png","e":0},{"id":"image_1","w":48,"h":92,"u":"spacepi_copy/","p":"img_1.png","e":0},{"id":"image_2","w":44,"h":92,"u":"spacepi_copy/","p":"img_2.png","e":0},{"id":"image_3","w":52,"h":92,"u":"spacepi_copy/","p":"img_3.png","e":0},{"id":"image_4","w":48,"h":92,"u":"spacepi_copy/","p":"img_4.png","e":0},{"id":"image_5","w":48,"h":92,"u":"spacepi_copy/","p":"img_5.png","e":0},{"id":"image_6","w":48,"h":92,"u":"spacepi_copy/","p":"img_6.png","e":0},{"id":"image_7","w":48,"h":92,"u":"spacepi_copy/","p":"img_7.png","e":0},{"id":"image_8","w":48,"h":92,"u":"spacepi_copy/","p":"img_8.png","e":0},{"id":"image_9","w":48,"h":92,"u":"spacepi_copy/","p":"img_9.png","e":0},{"id":"image_10","w":48,"h":92,"u":"spacepi_copy/","p":"img_10.png","e":0},{"id":"image_11","w":48,"h":92,"u":"spacepi_copy/","p":"img_11.png","e":0},{"id":"image_12","w":48,"h":92,"u":"spacepi_copy/","p":"img_12.png","e":0},{"id":"image_13","w":44,"h":92,"u":"spacepi_copy/","p":"img_13.png","e":0},{"id":"image_14","w":44,"h":92,"u":"spacepi_copy/","p":"img_14.png","e":0},{"id":"image_15","w":52,"h":92,"u":"spacepi_copy/","p":"img_15.png","e":0},{"id":"image_16","w":218,"h":158,"u":"spacepi_copy/","p":"img_16.png","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"c.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":31,"s":[352,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":38,"s":[352,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"o.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[396,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":37,"s":[396,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"p.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[442,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":36,"s":[442,157,0]}],"ix":2},"a":{"a":0,"k":[22,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"y-1.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":28,"s":[482,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":35,"s":[482,157,0]}],"ix":2},"a":{"a":0,"k":[26,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"s-1.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":27,"s":[543,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":34,"s":[543,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"u.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[582.727,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":33,"s":[582.727,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"c-1.png","cl":"png","refId":"image_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[622.455,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":32,"s":[622.455,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"c-2.png","cl":"png","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[662.182,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":31,"s":[662.182,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"e.png","cl":"png","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":23,"s":[701.909,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":30,"s":[701.909,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"s.png","cl":"png","refId":"image_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":22,"s":[741.636,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":29,"s":[741.636,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"s-2.png","cl":"png","refId":"image_10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[781.364,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":28,"s":[781.364,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"f.png","cl":"png","refId":"image_11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[821.091,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":27,"s":[821.091,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"u-1.png","cl":"png","refId":"image_12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":19,"s":[860.818,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":26,"s":[860.818,157,0]}],"ix":2},"a":{"a":0,"k":[24,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":2,"nm":"l.png","cl":"png","refId":"image_13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[900.545,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":25,"s":[900.545,157,0]}],"ix":2},"a":{"a":0,"k":[22,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":2,"nm":"l-1.png","cl":"png","refId":"image_14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[940.273,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":24,"s":[940.273,157,0]}],"ix":2},"a":{"a":0,"k":[22,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":2,"nm":"y.png","cl":"png","refId":"image_15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[980,-54,0],"to":[0,35.167,0],"ti":[0,-35.167,0]},{"t":23,"s":[980,157,0]}],"ix":2},"a":{"a":0,"k":[26,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":2,"nm":"路径 287.png","cl":"png","refId":"image_16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":5,"s":[540,160,0],"to":[-0.5,40.333,0],"ti":[0.5,-40.333,0]},{"t":10,"s":[537,402,0]}],"ix":2},"a":{"a":0,"k":[109,79,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":2,"s":[70,70,100]},{"t":5,"s":[100,100,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"形状图层 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[536.1,-110,0],"to":[0,44.667,0],"ti":[0,-44.667,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[536.1,158,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[536.1,158,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[536.1,158,0],"to":[-57,0,0],"ti":[57,0,0]},{"t":38,"s":[194.1,158,0]}],"ix":2},"a":{"a":0,"k":[-98,-2,0],"ix":1},"s":{"a":0,"k":[525.714,525.714,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[34,34],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.4,0.2,0.596078431373,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-98,-2],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"形状图层 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":18,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":8,"s":[532.281,-111,0],"to":[0,44.833,0],"ti":[0,-44.833,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[532.281,158,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[532.281,158,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":25,"s":[532.281,158,0],"to":[-57,0,0],"ti":[57,0,0]},{"t":38,"s":[190.281,158,0]}],"ix":2},"a":{"a":0,"k":[-97.188,0.953,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":10,"s":[0,0,100]},{"t":18,"s":[458.806,458.806,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-107.656,1.176],[-100.906,8.75],[-86.719,-6.844]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.105882352941,0.772549019608,0.486274509804,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}],"markers":[]}'
		)
	},
	3: function(t, e) {},
	"363b": function(t, e, a) {},
	3757: function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	"3a08": function(t, e, a) {
		t.exports = a.p + "img/dig.935cbfbd.png"
	},
	"3a4a": function(t, e, a) {
		t.exports = a.p + "img/spacepi-lock.84050880.png"
	},
	"3a79": function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA2CAYAAAC2ldWuAAAABHNCSVQICAgIfAhkiAAAAodJREFUeF7l3EtSwjAYB/CkZeWw4AiwdFzY8QLIDeRknsET6A3gCHUcxyUcgYXjiqamLY/pO03z+Cewb0h+fEm/9iOhxIFP+h1FCQtfw2mypov4gN5lit7BDJQlwYZQOuN9jYNpskKHhUatgJ5/f3hYWNQyaPoZTNgLOwYfhNBH9IiFRK2BTtlzNuXTXTRjv8EWHRYOtQ30PPddgIVC7QN1BRYGVRTUBVgI1KGg6LDWUWVBkWGtoo4FRYW1hqoKFBHWCqpqUDRY46i6QJFgjaLqBkWBNYZqChQB1giqaVDbsNpRbYHahNWKahvUFqw2VJWgp7beg5Ct6UMcy1QrTL7d0oKqAbQop6TpgcOu0GGVo2oDvcxlfFilqPpAK+UU8IhVhqoVtKmcAgyrBNUEaOOdHBR2NKpJUFdgR6HaAHUBVhrVJig6rBQqAigy7GBUJFBU2EGoiKCIsMKoyKBosEKoLoAiwfaiugSKAtuJ6iIoAmwrqsugtmEbUX0AtQlbQ/UJ1BZsCdVHUBuwF1SfQU3D5qi3AGoSlt4SqDHY49fTlhK6zL4wmCQLeh/vpUrApU1kvKZ0KoHItGXimlLJemwF4Seas2O4y/udkjeqoh6uMtpNgKqM2MIv3PA2Iy5aBFOOO2J/kqugKmAbQfl+r+vdXwLWddAxsG2gWZvlPHUArC+gMrBdoDVU0aXAN9AhsH2gjah9sL6CisCKgLaitsGSPzK/7r3HT5tkM4mmdIvckX3tLt9yoEP3+9TKGsv/dTcvDjPwF7QtYvm4s/z9mjZ1nJDR/+a/DJslYPCJvWyEVq+rpJrCY+9FLS8F/KkL/ElJFWg9YsXHLoR6hs0XYQcOhtEBO2Ts/6N6MG9EjzUGAAAAAElFTkSuQmCC"
	},
	"3c2b": function(t, e, a) {
		t.exports = a.p + "img/certik.247d177e.png"
	},
	4: function(t, e) {},
	4251: function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "首页",
			url_buy_twitter: "推特",
			index_SpacePi_Bscscan_t: "SpacePi浏览器",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "电报",
			telegraph_more: "更多电报",
			spacepiwep: {
				title: "SPISWAP",
				o: "On board",
				bnt: "审计报告",
				text: "基于此观点，PI Network 已成为其生态系统内购买虚拟资产或服务的投资工具，将随着 PI Network 的应用而迸发出新的活力和前所未有的价值。 以下是 PI Network 生态系统的一些关键点。",
				trend_bnt_title: "SPISWAP",
				trend_bnt_url: "https://spi-swap.com/swap"
			},
			partners_carousel_text: "PI永远是Pi Network的忠实粉丝！PI Network现在所做的一切都是为了证明Pi Fans的坚持是值得的！",
			selectLang: "选择语言",
			happy_gd: "更多友情合作商",
			happy_text: "为了让 PI Network 实现更伟大的创举，我们决定将合约升级至最安全机制，采取和SHIBA Token同等级别，请添加升级合约。升级后的合约将放弃所有权限和锁仓。合约地址:",
			happy_text1: "PI永远是Pi Network的忠实粉丝！",
			happy_text2: "PI Network现在所做的一切都是为了证明Pi 粉丝的坚持是值得的！",
			doge: "什么是PI Network？",
			only: "全世界唯一一款综合服务商类型多重跨链协议通证",
			introduce: "PI Network 将是区块链领域唯一一个打破技术壁垒，跨界融合综合服务商类型多重跨链协议通证，未来是属于所有区块链数字资产玩家的，让我们共同努力，见证这伟大的时刻！",
			text: ["PI Network将打造前所未有的顶级数字生态，提供简单高效的元宇宙数字沉浸体验为核心。赋予代币流通价值，让更多人参与到PI Network的生态建设，创造无边界的娱乐世界，链接世界每一个角落的用户，为全球用户建立无需信任以及高度去中心化的元宇宙生态。",
				"PI Network包含NFT和元宇宙这两大区块链范畴，PI Network正在打造一个去中心化的在线虚拟现实类游戏平台，将角色、道具以及人生的故事情节节融入到虚拟社交中，玩家可在虚拟世界中购买武器、战甲、道具宝石。参与不同的收集养成虚拟、生活、动作等游戏。",
				"PI Network 所有带来的利益会以原生代币 PI Network 的形式呈现。PI Network元宇宙的虚拟与现实的高度互通，闭环经济体附着开源平台成为互联网的最终形态。"
			],
			tetxbu: "阅读白皮书",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["购买Pi Network"],
			index_Liquidity_title: "流动性锁定",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus 检测",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "PI Network 价格",
			index_SpacePi: [{
				title: "Dextools K线"
			}, {
				title: "Poocoin K线"
			}, {
				title: "Avedex K线"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "什么是PI Network？",
				content: "PI Network将打造前所未有的顶级数字生态，提供简单高效的元宇宙数字沉浸体验为核心。"
			}, {
				title: "PI Network 世界",
				content: "赋予代币流通价值，让更多人参与到PI Network的生态建设，创造无边界的娱乐世界，链接世界每一个角落的用户，为全球用户建立无需信任以及高度去中心化的元宇宙生态。"
			}],
			station: {
				enter: "强大无比的PI Network生态系统",
				title: "实际上我们正在建造一个前所未有的数字世界。",
				text: ["数字经济已经成为了一种合法的资产类型，值得投资者考虑，该类资产在短期内呈指数级增长爆发。",
					"基于这个观点下，PI Network成了在其生态系统内购买虚拟资产或服务的投资工具，它会随着PI Network的落地应用迸发出新的生命力与前所未有的价值。以下是PI Network生态系统的一些关键点。"
				],
				c: [{
					title: "PI Network 通证",
					text: "由多公链支持支撑的新型实用通证，在 PI Network 生态系统中作为基础，服务各种应用，具有强大的应用场景"
				}, {
					title: "PI Network 简介",
					text: "PI Network生态系统基于WEB3.0 全息互联网 NFT 等技术构成打造而来，成为太空用户位于元宇宙虚拟空间内最强大的技术支持方。"
				}, {
					title: "PI Network NFTs",
					text: "非同质化且可转让的数字资产，独一无二的特性可成为PI Network生态中的一件艺术收藏品或是一个游戏道具。"
				}, {
					title: "PI Network DAO",
					text: "PI Network 通证在PI Network生态系统中会被应用于在 DAO 的投票，以确保这个项目能够自我维持以及没有掌控者。"
				}, {
					title: "PI Network 元宇宙",
					text: "PI Network生态系中一个游戏化的3D元宇宙虚拟空间"
				}, {
					title: "NFT 市场",
					text: "PI Network市场使参与者能管理和交易 PI Network NFTs, 这些NFT以SpacePi作为流通货币定价"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}],
			Tokenomics: {
				text: "社区总是先行",
				title: "公平的通证生态",
				content: "为了建立我们在地球之外的民主载体，PI Network基于公平的通证生态发布",
				array: [{
					title: "0%",
					text: "开发税"
				}, {
					title: "2%",
					text: "通证燃烧"
				}, {
					title: "120k+",
					text: "持有人"
				}]
			},
			ROADMAP: "路线图",
			ROADMAPtext: "这是使PI Network生态从诞生到伟大的规划。",
			Phase1: "第一阶段",
			Phase2: "第二阶段",
			r_title1: "ONE",
			r_title2: "TWO",
			rt1_text1: "上线官网，部署智能合约",
			rt1_text2: "启动Telegram以及Twitter等社媒运营",
			rt1_text3: "公开发射",
			rt1_text4: "3000个电报成员",
			rt1_text5: "开启市场回购",
			rt1_text6: "上线CoinMarketCap",
			rt1_text7: "上线CoinGecko",
			rt1_text8: "第三方机构审计",
			rt1_text9: "启动大规模市场推广",
			rt1_text10: "第二轮社区空投",
			rt2_text1: "与第三方钱包达成合作",
			rt2_text2: " ",
			rt2_text3: "30K+ 个电报成员",
			rt2_text4: "120k+ 通证持有人",
			rt2_text5: "启动Pi NetworkSwap的开发工作",
			rt2_text6: "启动Pi NetworkNFT的开发工作",
			rt2_text7: "启动PiDAO",
			rt2_text8: "上线跨链聚合交易协议 Pi NetworkSwap",
			rt2_text9: "上线市场顶级CEX",
			Community: {
				title: "加入 PI Network 全球社区",
				text: "PI Network 将是区块链领域唯一一个打破技术壁垒，跨界融合综合服务商类型多重跨链协议通证，未来是属于所有区块链数字资产玩家的，让我们共同努力，见证这伟大的时刻！",
				buttext: "加入我们",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			answers: {
				text: "PI Network 是全世界唯一一款综合服务商类型多重跨链协议通证",
				array: [{
					title: "1.SpacePi描述的的元宇宙是什么？",
					text: "游戏是元宇宙的初级形态。从产品形态看，游戏是元宇宙的雏形。游戏作为人们基于现实的模拟、延伸、 天马行空的想象而构建的虚拟世界，其产品形态与元宇宙相似。 如果您熟悉这本书或电影《头号玩家》， 这是元宇宙的一个很好的例子。"
				}, {
					title: "2.元宇宙重要吗？",
					text: "基于 Web3.0、全息互联网技术、区块链和NFT的融合，元宇宙概念所展现岀来的价值观与互联网核心价值相契合。SpacePi认为，元宇宙或许是互联网的终极形态。因此，我们以游戏为切入点，打造了SpacePi——基于NFT+元宇宙的虚拟人生区块链游戏，让现实与虚拟的链接更加高效，也让价值的流通更加丰富。在最近的全球疫情中，这些数字平台的重要性变得显而易见。"
				}, {
					title: "3.PI Network生态系统是什么？",
					text: "为NFT+元宇宙概念支撑下的区块链游戏，PI Network 在平台生态建设方面包含了一下几个核心板块  NFT游戏系统元宇宙游戏生态SpacePi交易所 "
				}, {
					title: "4.在PI Network元宇宙中我们可以做什么？",
					text: "PI Network Token 简称 PI Network,结合NFT和元宇宙这两大区块链范畴，旨在打造一个去中心化的在线虚拟现实类游戏平台，将角色、道具以及人生的故事情节节融入到虚拟社交中，玩家可在虚拟世界中购买武器、战甲、道具宝石。参与不同的收集养成虚拟、生活、动作等 游戏。因此，PI Network 是第一个也是唯一一个跨元宇宙和NFT领域项目"
				}, {
					title: "5.在PI Network元宇宙中如何获取收益？",
					text: "PI Network 还能够支持第三方开发者进行面向区块链环境的去中心化游戏应用、混合架构游戏应用的编程、调试与发布。同时，SpacePi整合了包括基于区块链的分布式用户账户系统、钱包和NFT数字资产流通，可以实现应用内游戏资产NFT的脱链永久保存及跨链使用。"
				}, {
					title: "6.PI Network的开发人员？",
					text: "PI Network元宇宙由世界各地的独立开发者共同参与开发，在指导、管理和增强加密相关项目方面的经验和能力几乎无与伦比。 他们共同组成了一个强大的团队，背后有一群志同道合的支持者，他们对PI Network元宇宙愿景充满信心和热情，SpacePi是进入元宇宙世界的新冒险。"
				}, {
					title: "7.我如何提供更多的帮助？",
					text: "由于完全去中心化，PI Network元宇宙将需要更加庞大的社区才能达到我们的目标，欢迎您加入PI Network"
				}]
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			partners_title1: "PI永远",
			partners_title2: "是Pi Network的忠实粉丝！",
			partners_text: "PI Network现在所做的一切都是为了证明Pi Fans的坚持是值得的！ 欢迎更多平台和机构与SpacePi合作，官方联系邮箱：pi@space-pi.com",
			partners_email_title: "官方联系邮箱：",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	"434a": function(t, e, a) {},
	"4e79": function(t, e, a) {
		"use strict";
		a("363b")
	},
	5: function(t, e) {},
	5056: function(t) {
		t.exports = JSON.parse(
			'{"contractName":"spacePi","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numTokensSellToAddToLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive","payable":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"swapNumber","type":"uint256"}],"name":"setNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}],"address":"0x259a5f830f71e22717d02c529ec62ffa248087b9"}'
		)
	},
	"56d7": function(t, e, a) {
		"use strict";
		a.r(e);
		a("e260"), a("e6cf"), a("cca6"), a("a79d");
		var i = a("2b0e"),
			n = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("v-app", [i("alert", {
					attrs: {
						status: t.alert.status,
						text: t.alert.text,
						type: t.alert.type
					}
				}), i("div", {
					staticClass: "returnTop"
				}, [i("v-img", {
					staticClass: "logo-img",
					attrs: {
						src: a("050b")
					},
					on: {
						click: t.returnTop
					}
				})], 1), i("v-dialog", {
					attrs: {
						"max-width": "290"
					},
					model: {
						value: t.musicDialog,
						callback: function(e) {
							t.musicDialog = e
						},
						expression: "musicDialog"
					}
				}, [i("v-card", [i("v-card-title", {
					staticClass: "text-h5"
				}, [t._v(" warning ")]), i("v-card-text", [t._v(
					" The browser does not support music playback. Click to play "
				)]), i("v-card-actions", [i("v-spacer"), i("v-btn", {
					attrs: {
						color: "darken-1",
						text: ""
					},
					on: {
						click: t.play
					}
				}, [t._v(" play ")]), i("v-btn", {
					attrs: {
						color: "darken-1",
						text: ""
					},
					on: {
						click: function(e) {
							t.musicDialog = !1
						}
					}
				}, [t._v(" close ")])], 1)], 1)], 1), i("v-app-bar", {
					class: ["top-navigation", t.topNavigationShrinkStatus ? "" :
						"top-navigation-open", "bg"
					],
					style: t.topNavigationShrinkStatus ? "background: #1E0A4D" :
						"background:linear-gradient(to bottom, rgba(0,0,0, 1), rgba(255,255,255, 0))",
					attrs: {
						elevation: t.topNavigationShrinkStatus ? 24 : 0,
						app: "",
						color: "rgba(255, 255, 255, 1)",
						height: "none"
					}
				}, [i("a", {
					on: {
						click: function(e) {
							return t.$router.push("/")
						}
					}
				}, [i("div", {
					staticClass: "logo"
				}, [i("v-img", {
					staticClass: "logo-img",
					attrs: {
						src: a("cf05")
					}
				}), i("div", {
					staticClass: "logo-title"
				}, [i("span", [t._v("Pi ")]), i("span", {
					staticClass: "y"
				}, [t._v("Network")])])], 1)]), i("div", {
					staticClass: "tabs"
				}, [i("a", {
					on: {
						click: function(e) {
							return t.$router.push("/")
						}
					}
				}, [i("div", {
					staticClass: "tabs-line",
					style: "/" == t.$route.path ?
						"border-top: 2px solid rgba(255, 255, 255, 0.6);" :
						""
				}), t._v(" " + t._s(t.$t("home")) + " ")]), t._l(t.menu, (function(
					e, a) {
					return i("div", {
						key: a
					}, [i("a", {
						on: {
							click: function(a) {
								return t.poenUrl(e.link)
							}
						}
					}, [i("div", {
						staticClass: "tabs-line"
					}), i("div", {
						staticClass: "tabs-s"
					}, [i("span", [t._v(" " + t._s(
							e[t.locale]
						) + " ")]), 1 == e
						.picture_status ? i(
							"v-img", {
								staticClass: "tabs-img",
								attrs: {
									src: e.picture
								},
								on: {
									click: t
										.returnTop
								}
							}) : t._e()
					], 1)])])
				}))], 2), i("v-spacer"), i("div", {
					staticClass: "locale"
				}, [i("v-menu", {
					attrs: {
						"offset-y": ""
					},
					scopedSlots: t._u([{
						key: "activator",
						fn: function(e) {
							var n = e.on,
								s = e.attrs;
							return [i("v-btn", t._g(t._b({
									staticClass: "locale-btn",
									attrs: {
										tile: "",
										height: "85px",
										elevation: "",
										color: "rgba(255, 255, 255, 0)",
										dark: ""
									}
								}, "v-btn", s, !
								1), n), [i("div", {
								staticClass: "logo-img"
							}, [i("v-img", {
								staticClass: "locale-img",
								attrs: {
									src: a(
										"0ad3"
									)
								}
							})], 1), t._l(t
								.localeData, (
									function(e,
										a) {
										return i(
											"div", {
												key: a,
												attrs: {
													value: a
												}
											},
											[e.key ==
												t
												.locale ?
												i("span",
													[t._v(" " +
														t
														._s(e
															.name
														) +
														" "
													)]
												) :
												t
												._e()
											]
										)
									}))], 2)]
						}
					}])
				}, [i("v-list", t._l(t.localeData, (function(e, a) {
					return i("v-list-item", {
						key: a,
						on: {
							click: function(a) {
								return t
									.localeClick(e
										.key)
							}
						}
					}, [i("v-list-item-title", [t._v(t
						._s(e.name))])], 1)
				})), 1)], 1)], 1), i("div", {
					staticClass: "tabs-icon",
					on: {
						click: function(e) {
							t.tabsStatus = !0
						}
					}
				}, [i("v-img", {
					staticClass: "logo-img",
					attrs: {
						src: a("6874")
					}
				})], 1)], 1), i("v-main", {
					staticStyle: {
						"z-index": "1"
					}
				}, [i("a", {
					on: {
						click: t.spacepiMusicClick
					}
				}, [i("div", {
					staticClass: "spacepiMusic",
					attrs: {
						id: "spacepiMusic"
					}
				})]), i("audio", {
					ref: "audio",
					staticStyle: {
						display: "none"
					},
					attrs: {
						controls: "controls",
						src: t.mp3
					}
				}), i("router-view")], 1), t.tabsStatus ? i("div", {
					staticClass: "tabs-Sframes-subject"
				}, [i("div", {
					staticClass: "tabs-subject"
				}, [i("div", {
					staticClass: "navigation"
				}, [i("div", {
					staticClass: "logo"
				}, [i("div", {
					staticClass: "logo-img"
				}, [i("v-img", {
					staticClass: "logo-img",
					attrs: {
						src: a("cf05")
					}
				})], 1), i("div", {
					staticClass: "logo-title"
				}, [i("span", [t._v("space")]), i("span", {
					staticClass: "y"
				}, [t._v("pi")])])])]), i("div", {
					staticClass: "tabs"
				}, [i("a", {
					on: {
						click: function(e) {
							return t.mobileOutside("/")
						}
					}
				}, [t._v(" " + t._s(t.$t("home")) + " ")]), t._l(t.menu, (
					function(e, a) {
						return i("div", {
							key: a
						}, [i("a", {
							on: {
								click: function(a) {
									return t
										.poenUrl(e
											.link)
								}
							}
						}, [i("div", {
							staticClass: "tabs-line"
						}), i("div", {
							staticClass: "tabs-s"
						}, [i("span", [t._v(
								" " + t
								._s(e[t
									.locale
								]) +
								" ")]), 1 == e
							.picture_status ? i(
								"v-img", {
									staticClass: "tabs-img",
									attrs: {
										src: e
											.picture
									},
									on: {
										click: t
											.returnTop
									}
								}) : t._e()
						], 1)])])
					}))], 2), i("div", {
					staticClass: "locale"
				}, [i("v-menu", {
					attrs: {
						"offset-y": ""
					},
					scopedSlots: t._u([{
						key: "activator",
						fn: function(e) {
							var n = e.on,
								s = e.attrs;
							return [i("v-btn", t._g(t
								._b({
										staticClass: "locale-btn",
										attrs: {
											tile: "",
											elevation: "",
											color: "rgba(255, 255, 255, 0)",
											dark: ""
										}
									},
									"v-btn",
									s, !1),
								n), [i(
									"div", {
										staticClass: "logo-img"
									}, [i("v-img", {
										staticClass: "locale-img",
										attrs: {
											src: a(
												"0ad3"
											)
										}
									})], 1),
								t._l(t
									.localeData,
									(function(
										e,
										a
									) {
										return i(
											"div", {
												key: a,
												attrs: {
													value: a
												}
											},
											[e.key ==
												t
												.locale ?
												i("span",
													[t._v(" " +
														t
														._s(e
															.name
														) +
														" "
													)]
												) :
												t
												._e()
											]
										)
									}))
							], 2)]
						}
					}], null, !1, 2702781776)
				}, [i("v-list", t._l(t.localeData, (function(e, a) {
					return i("v-list-item", {
						key: a,
						on: {
							click: function(a) {
								return t
									.localeClick(
										e
										.key
									)
							}
						}
					}, [i("v-list-item-title", [
						t._v(t._s(e
							.name))
					])], 1)
				})), 1)], 1)], 1)]), i("div", {
					staticClass: "tabs-close",
					on: {
						click: function(e) {
							t.tabsStatus = !1
						}
					}
				}, [i("div", {
					staticClass: "logo-img"
				}, [i("v-img", {
					staticClass: "logo-img",
					attrs: {
						src: a("a254")
					}
				})], 1)])]) : t._e()], 1)
			},
			s = [],
			r = a("f3f3"),
			o = (a("ac1f"), a("466d"), a("b0c0"), a("2f62")),
			c = a("bc3a"),
			p = a.n(c),
			l = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "alert"
				}, [0 != t.status ? a("v-alert", {
					attrs: {
						dense: "",
						type: t.type
					}
				}, [t._v(" " + t._s(t.text) + " ")]) : t._e()], 1)
			},
			u = [],
			d = {
				data: function() {
					return {}
				},
				props: {
					text: {
						type: String,
						default: "warning"
					},
					type: {
						type: String,
						default: "warning"
					},
					status: {
						type: Boolean,
						default: !1
					}
				},
				computed: {},
				watch: {},
				components: {},
				created: function() {},
				mounted: function() {},
				methods: {}
			},
			m = d,
			y = (a("222d"), a("2877")),
			g = a("6544"),
			A = a.n(g),
			k = a("0798"),
			v = Object(y["a"])(m, l, u, !1, null, "5b900798", null),
			h = v.exports;
		A()(v, {
			VAlert: k["a"]
		});
		var b = a("94f1"),
			f = a.n(b),
			x = a("1328"),
			C = a("70a7"),
			S = a.n(C),
			P = {
				name: "App",
				data: function() {
					return {
						menu: [],
						topNavigationShrinkStatus: !1,
						tabsStatus: !1,
						localeData: [{
							key: "en_US",
							name: "En"
						}, {
							key: "tr_TR",
							name: "Türk"
						}, {
							key: "ko_KR",
							name: "한국어"
						}, {
							key: "ja_JP",
							name: "日本"
						}, {
							key: "in",
							name: "Indonesia"
						}, {
							key: "th",
							name: "ไทย"
						}, {
							key: "ar",
							name: "عربي"
						}, {
							key: "zh_TW",
							name: "繁體中文"
						}, {
							key: "zh_CN",
							name: "简体中文"
						}],
						spacepiMusic: "",
						mp3: S.a,
						musicDialog: !1
					}
				},
				watch: {
					tabsStatus: function(t) {}
				},
				computed: Object(r["a"])({}, Object(o["c"])(["locale", "domainUrl", "alert"])),
				components: {
					alert: h
				},
				created: function() {},
				mounted: function() {
					var t = this,
						e = {
							container: document.getElementById("spacepiMusic"),
							renderer: "svg",
							loop: !0,
							autoplay: !0,
							animationData: x
						};
					this.spacepiMusic = f.a.loadAnimation(e);
					var a = -1 !== window.navigator.userAgent.indexOf("Chrome");
					a ? (this.spacepiMusic.pause(), this.$refs.audio.pause()) : (this.$refs.audio.volume =
						.1, this.$refs.audio.play(), this.$refs.audio.onended = function() {
							t.$refs.audio.play()
						}), window.addEventListener("scroll", (function() {
						var e = Math.floor(document.body.scrollTop || document.documentElement
							.scrollTop || window.pageYOffset);
						t.topNavigationShrinkStatus = e > 0
					}), !0), setTimeout((function() {
						t.location()
					}), 1)
				},
				methods: Object(r["a"])(Object(r["a"])({}, Object(o["b"])(["setLocale"])), {}, {
					location: function() {
						this.getMenu()
					},
					localeClick: function(t) {
						this.$store.commit("setLocale", t), this.$i18n.locale = t
					},
					isMobile: function() {
						var t = navigator.userAgent.match(
							/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
						);
						return t
					},
					getMenu: function() {
						var t = this;
						p.a.post(this.domainUrl + "spacepiMenu").then((function(e) {
							// console.log(e.data.data)
							// t.menu = e.data.data
						})).catch((function(t) {}))
					},
					poenUrl: function(t) {
						window.open(t)
					},
					mobileOutside: function(t) {
						t != this.$route.path ? (this.$router.push(t), this.tabsStatus = !1) : this
							.tabsStatus = !1
					},
					spacepiMusicClick: function() {
						1 == this.spacepiMusicStatus ? (this.spacepiMusicStatus = !1, this
							.spacepiMusic.pause(), this.$refs.audio.pause()) : (this
							.spacepiMusicStatus = !0, this.spacepiMusic.play(), this.$refs.audio
							.play())
					},
					play: function() {
						var t = this;
						this.musicDialog = !1, this.$refs.audio.play(), this.$refs.audio.onended =
							function() {
								t.$refs.audio.play()
							}, this.spacepiMusic.play()
					},
					plusReady: function() {
						var t = plus.os.name;
						"iOS" == t ? plus.navigator.setStatusBarBackground("#368CBD") : plus
							.navigator.setStatusBarBackground("#ddd")
					},
					returnTop: function() {
						document.getElementById("app").scrollIntoView()
					}
				})
			},
			_ = P,
			w = (a("cd06"), a("7496")),
			B = a("40dc"),
			E = a("8336"),
			T = a("b0af"),
			I = a("99d9"),
			D = a("169a"),
			N = a("adda"),
			M = a("8860"),
			O = a("da13"),
			Q = a("5d23"),
			F = a("f6c4"),
			R = a("e449"),
			j = a("2fa4"),
			G = Object(y["a"])(_, n, s, !1, null, "0f25d585", null),
			U = G.exports;
		A()(G, {
			VApp: w["a"],
			VAppBar: B["a"],
			VBtn: E["a"],
			VCard: T["a"],
			VCardActions: I["a"],
			VCardText: I["b"],
			VCardTitle: I["c"],
			VDialog: D["a"],
			VImg: N["a"],
			VList: M["a"],
			VListItem: O["a"],
			VListItemTitle: Q["a"],
			VMain: F["a"],
			VMenu: R["a"],
			VSpacer: j["a"]
		});
		var L = a("8c4f"),
			K = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [i("div", {
					staticClass: "pc"
				}, [i("animation", {
					staticClass: "animation"
				})], 1), i("div", {
					staticClass: "mo"
				}, [i("animationm", {
					staticClass: "animation"
				})], 1), i("spacePi"), i("div", {
					staticClass: "spacepi_bg"
				}, [i("div", {
					staticClass: "spacepi-img-subject"
				}, [i("v-container", {
					staticClass: "spacepi-img-container"
				}, [i("v-img", {
					attrs: {
						src: a("8270")
					}
				})], 1)], 1)]), i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "partners-container"
				}, [i("div", {
					staticClass: "partners-content wow spacepi-animation fade-out-min-in-max-animation"
				}, [t._v(" " + t._s(t.$t("partners_carousel_text")) + " ")]), i(
					"div", {
						
					}, 1), i("a", [i("div", {
				}, )])])], 1), i("div", {
					staticClass: "what-subject"
				}, [i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "what-container wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "what-title"
				}, [i("div", {
					staticClass: "what-line"
				}), t._v(" " + t._s(t.$t("doge")) + " ")]), i("div", {
					staticClass: "what-content"
				}, [i("span", [t._v(t._s(t.$t("text")[0]))]), i("span",
					[t._v(t._s(t.$t("text")[1]))]), i("span", [t._v(
					t._s(t.$t("text")[2]))])])]), i("div", {
					staticClass: "what-float1"
				}, [i("v-container", {
					staticClass: "what-container"
				}, [i("div", {
					staticClass: "what-subject1"
				}, [i("div", {
					staticClass: "what-left"
				}, [i("div", {
					staticClass: "v-img-s"
				}, [i("div", {
					staticClass: "v-img"
				}, [i("v-img", {
					attrs: {
						src: a(
							"cf93"
						)
					}
				})], 1)]), i("div", {
					staticClass: "character-img"
				}, [i("v-img", {
					attrs: {
						src: a("08bf")
					}
				})], 1)]), i("div", {
					staticClass: "what-right wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "right-s"
				}, [i("div", {
					staticClass: "what-title"
				}, [t._v(" " + t._s(t
					.$t("car")[
						0].title
				) + " ")]), i("div", {
					staticClass: "what-content"
				}, [t._v(" " + t._s(t
						.$t("car")[
							0]
						.content) +
					" ")])])])])])], 1), i("div", {
					staticClass: "what-float2"
				}, [i("v-container", {
					staticClass: "what-container"
				}, [i("div", {
					staticClass: "what-subject2"
				}, [i("div", {
					staticClass: "what-left wow spacepi-animation fade-left-in-right-animation"
				}, [i("div", {
					staticClass: "left-s"
				}, [i("div", {
					staticClass: "what-title"
				}, [t._v(" " + t._s(t
					.$t("car")[
						1].title
				) + " ")]), i("div", {
					staticClass: "what-content"
				}, [t._v(" " + t._s(t
						.$t("car")[
							1]
						.content) +
					" ")])])]), i("div", {
					staticClass: "what-right"
				}, [i("div", {
					staticClass: "v-img-s"
				}, [i("div", {
					staticClass: "v-img"
				}, [i("v-img", {
					attrs: {
						src: a(
							"ddbe"
						)
					}
				})], 1)]), i("div", {
					staticClass: "aircraft-img"
				}, [i("v-img", {
					attrs: {
						src: a("726e")
					}
				})], 1)])])])], 1)], 1)]), i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "concept-container"
				}, [i("div", {
					staticClass: "concept-title-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("span", {
					staticClass: "concept-title"
				}, [t._v(t._s(t.$t("station").enter))]), i("div", {
					staticClass: "Vice-title-subject"
				}, [i("div", {
					staticClass: "Vice-title"
				}, [i("div", {
					staticClass: "line"
				}), t._v(" " + t._s(t.$t("station").title) +
					" ")])])]), i("div", {
					staticClass: "concept-subject"
				}, [i("div", {
					staticClass: "concept-img"
				}, [i("v-img", {
					attrs: {
						src: a("f6b6")
					}
				})], 1), i("div", {
					staticClass: "concept-content wow spacepi-animation fade-right-in-left-animation"
				}, [i("span", [t._v(t._s(t.$t("station").text[0]))]), i(
					"span", [t._v(t._s(t.$t("station").text[1]))])])]), i("div", {
					staticClass: "concept-car wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "car concept-card concept-card-animation"
				}, [i("span", {
					staticClass: "car-title"
				}, [t._v(t._s(t.$t("station").c[2].title))]), i(
					"span", {
						staticClass: "car-content text-w"
					}, [t._v(t._s(t.$t("station").c[2].text))])]), i(
					"div", {
						staticClass: "car concept-card concept-card-animation"
					}, [i("span", {
						staticClass: "car-title"
					}, [t._v(t._s(t.$t("station").c[3].title))]), i(
						"span", {
							staticClass: "car-content"
						}, [t._v(t._s(t.$t("station").c[3].text))])]), i(
					"div", {
						staticClass: "car concept-card concept-card-animation"
					}, [i("span", {
						staticClass: "car-title"
					}, [t._v(t._s(t.$t("station").c[5].title))]), i(
						"span", {
							staticClass: "car-content"
						}, [t._v(t._s(t.$t("station").c[5].text))])]), i(
					"div", {
						staticClass: "car concept-card concept-card-animation"
					}, [i("span", {
						staticClass: "car-title"
					}, [t._v(t._s(t.$t("station").c[1].title))]), i(
						"span", {
							staticClass: "car-content"
						}, [t._v(t._s(t.$t("station").c[1].text))])]), i(
					"div", {
						staticClass: "car concept-card concept-card-animation"
					}, [i("span", {
						staticClass: "car-title"
					}, [t._v(t._s(t.$t("station").c[0].title))]), i(
						"span", {
							staticClass: "car-content"
						}, [t._v(t._s(t.$t("station").c[0].text))])]), i(
					"div", {
						staticClass: "car concept-card concept-card-animation"
					}, [i("span", {
						staticClass: "car-title"
					}, [t._v(t._s(t.$t("station").c[4].title))]), i(
						"span", {
							staticClass: "car-content"
						}, [t._v(t._s(t.$t("station").c[4].text))])])])])], 1), i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "nftCarousel_container"
				}, [i("nftCarousel")], 1)], 1), i("div", {
					staticClass: "spacepi_bg"
				}, [i("div", {
					staticClass: "telegraph-subject"
				}, [i("telegraph")], 1)]), i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "spacepiwep-external-container"
				}, [i("div", {
					staticClass: "spacepiwep-container"
				}, [i("div", {
					staticClass: "spacepiwep-left"
				}, [i("div", {
					staticClass: "spacepiwep-img wow spacepi-animation fade-in-down-animation"
				}, [i("div", {
					staticClass: "spacepiwep-img-subject"
				}, [i("v-img", {
					attrs: {
						src: a("c4a9")
					}
				})], 1)])]), i("div", {
					staticClass: "spacepiwep-right"
				}, [i("div", {
					staticClass: "spacepiwep-container-subject"
				}, [i("div", {
					staticClass: "spacepiwep-title-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "line"
				}), i("span", {
					staticClass: "spacepiwep-title"
				}, [t._v(t._s(t.$t("spacepiwep")
					.title))])]), i("div", {
					staticClass: "spacepiwep-content wow spacepi-animation fade-in-up-animation"
				}, [t._v(" " + t._s(t.$t("spacepiwep")
					.text) + " ")])]), i("a", {
					staticClass: "cta spacepiwep-bnt wow spacepi-animation fade-in-up-animation",
					attrs: {
						href: 'https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90#balances',
						target: "_blank"
					}
				}, [i("span", [t._v(t._s(t.$t(
					"spacepiwep.trend_bnt_title"
				)))]), i("span", [i("svg", {
					attrs: {
						width: "25px",
						height: "43px",
						viewBox: "0 0 66 43",
						version: "1.1"
					}
				}, [i("g", {
					attrs: {
						id: "arrow",
						stroke: "none",
						"stroke-width": "1",
						fill: "none",
						"fill-rule": "evenodd"
					}
				}, [i("path", {
					staticClass: "one",
					attrs: {
						d: "M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z",
						fill: "#FFFFFF"
					}
				}), i("path", {
					staticClass: "two",
					attrs: {
						d: "M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z",
						fill: "#FFFFFF"
					}
				}), i("path", {
					staticClass: "three",
					attrs: {
						d: "M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z",
						fill: "#FFFFFF"
					}
				})])])])])])])]), i("v-container", {
					staticClass: "spacepiwep-external-container-m"
				}, [i("div", {
					staticClass: "spacepiwep-title-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "line"
				}), i("span", [t._v(t._s(t.$t("spacepiwep").title))])]), i("div", {
					staticClass: "spacepiwep-content wow spacepi-animation fade-in-up-animation"
				}, [t._v(" " + t._s(t.$t("spacepiwep").text) + " ")]), i("div", {
					staticClass: "spacepiwep-img wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "spacepiwep-img-subject"
				}, [i("v-img", {
					attrs: {
						src: a("c4a9")
					}
				})], 1)]), i("a", [i("div", {
					staticClass: "spacepiwep-bnt wow spacepi-animation fade-in-up-animation"
				}, [t._v(" " + t._s(t.$t(
					"spacepiwep.trend_bnt_title")) + " ")])])])], 1), i("div", {
					staticClass: "roadmap_bg"
				}, [i("v-container", {
					staticClass: "roadmap-container"
				}, [i("div", {
					staticClass: "roadmap-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "roadmap-title-subject"
				}, [i("div", {
					staticClass: "line"
				}), i("span", {
					staticClass: "roadmap-title"
				}, [t._v("-" + t._s(t.$t("ROADMAP")))])]), i("div", {
					staticClass: "roadmap-content"
				}, [t._v(" " + t._s(t.$t("ROADMAPtext")) + " ")])]), i("div", {
					staticClass: "one-subject"
				}, [i("div", {
					staticClass: "one-img"
				}, [i("v-img", {
					attrs: {
						src: a("c9d5")
					}
				})], 1), i("div", {
					staticClass: "one-content wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "one-title"
				}, [t._v(t._s(t.$t("Phase1")))]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt1_text1")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt1_text2")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt1_text3")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt1_text4")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt1_text5")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-white"
				}, [i("span", [t._v(t._s(t.$t("rt1_text6")))])]), i(
					"div", {
						staticClass: "one-text one-white"
					}, [i("span", [t._v(t._s(t.$t("rt1_text7")))])]
				), i("div", {
					staticClass: "one-text one-white"
				}, [i("span", [t._v(t._s(t.$t("rt1_text8")))])]), i(
					"div", {
						staticClass: "one-text one-yellow"
					}, [i("span", [t._v(t._s(t.$t("rt1_text9")))]),
						i("div", {
							staticClass: "one-yes"
						}, [i("v-img", {
							attrs: {
								src: a("723f")
							}
						})], 1)
					]), i("div", {
					staticClass: "one-text one-white"
				}, [i("span", [t._v(t._s(t.$t(
					"rt1_text10")))])])])]), i("div", {
					staticClass: "two-subject",
					staticStyle: {
						"z-index": "1"
					}
				}, [i("div", {
					staticClass: "one-content wow spacepi-animation fade-left-in-right-animation"
				}, [i("div", {
					staticClass: "one-title"
				}, [t._v(t._s(t.$t("Phase2")))]), i("div", {
					staticClass: "one-text one-white"
				}, [t._v(t._s(t.$t("rt2_text1")))]), i("div", {
					staticClass: "one-text one-white"
				}, [i("span", [t._v(t._s(t.$t("rt2_text2")))])]), i(
					"div", {
						staticClass: "one-text one-white"
					}, [i("span", [t._v(t._s(t.$t("rt2_text3")))])]
				), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt2_text4")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt2_text5")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-yellow"
				}, [i("span", [t._v(t._s(t.$t("rt2_text6")))]),
					i("div", {
						staticClass: "one-yes"
					}, [i("v-img", {
						attrs: {
							src: a("723f")
						}
					})], 1)
				]), i("div", {
					staticClass: "one-text one-white"
				}, [i("span", [t._v(t._s(t.$t("rt2_text7")))])]), i(
					"div", {
						staticClass: "one-text one-white"
					}, [t._v(t._s(t.$t("rt2_text8")))]), i("div", {
					staticClass: "one-text one-white"
				}, [t._v(t._s(t.$t("rt2_text9")))])]), i("div", {
					staticClass: "one-img"
				}, [i("v-img", {
					attrs: {
						src: a("97c5")
					}
				})], 1)])])], 1), i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "tokenomics-container"
				}, [i("div", {
					staticClass: "tokenomics-subject"
				}, [i("div", {
					staticClass: "tokenomics-left"
				}, [i("div", {
					staticClass: "tokenomics-left-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "tokenomics-left-title-subject"
				}, [i("div", {
					staticClass: "line"
				}), i("span", {
					staticClass: "tokenomics-left-title"
				}, [t._v(t._s(t.$t("Tokenomics")
					.title))])]), i("div", {
					staticClass: "tokenomics-left-Vice-title"
				}, [t._v(t._s(t.$t("Tokenomics")
					.text))]), i("div", {
					staticClass: "tokenomics-left-content"
				}, [t._v(" " + t._s(t.$t("Tokenomics")
					.content) + " ")])])]), i("div", {
					staticClass: "tokenomics-content wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "tokenomics-grid"
				}, [i("span", {
					staticClass: "tokenomics-grid-title"
				}, [t._v(" " + t._s(t.$t("Tokenomics")
					.array[0].title))]), i("span", {
					staticClass: "tokenomics-grid-content"
				}, [t._v(t._s(t.$t("Tokenomics").array[
					0].text))])]), i("div", {
					staticClass: "tokenomics-grid"
				}, [i("span", {
					staticClass: "tokenomics-grid-title"
				}, [t._v(t._s(t.$t("Tokenomics").array[
					1].title))]), i("span", {
					staticClass: "tokenomics-grid-content"
				}, [t._v(t._s(t.$t("Tokenomics").array[
					1].text))])]), i("div", {
					staticClass: "tokenomics-grid"
				}, [i("span", {
					staticClass: "tokenomics-grid-title"
				}, [t._v(t._s(t.$t("Tokenomics").array[
					2].title))]), i("span", {
					staticClass: "tokenomics-grid-content"
				}, [t._v(t._s(t.$t("Tokenomics").array[
					2].text))])])])])]), i("v-container", {
					staticClass: "tokenomics-container-m"
				}, [i("div", {
					staticClass: "tokenomics-title-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "line"
				}), i("span", {
					staticClass: "tokenomics-title"
				}, [t._v(t._s(t.$t("Tokenomics").title))])]), i("div", {
					staticClass: "tokenomics--Vice-title wow spacepi-animation fade-right-in-left-animation"
				}, [t._v(t._s(t.$t("Tokenomics").text))]), i("div", {
					staticClass: "tokenomics-left-content wow spacepi-animation fade-out-min-in-max-animation"
				}, [t._v(" " + t._s(t.$t("Tokenomics").content) + " ")]), i("div", {
					staticClass: "tokenomics-content wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "tokenomics-grid"
				}, [i("span", {
					staticClass: "tokenomics-grid-title"
				}, [t._v(t._s(t.$t("Tokenomics").array[0]
					.title))]), i("span", {
					staticClass: "tokenomics-grid-content"
				}, [t._v(t._s(t.$t("Tokenomics").array[0]
					.text))])]), i("div", {
					staticClass: "tokenomics-grid"
				}, [i("span", {
					staticClass: "tokenomics-grid-title"
				}, [t._v(t._s(t.$t("Tokenomics").array[1]
					.title))]), i("span", {
					staticClass: "tokenomics-grid-content"
				}, [t._v(t._s(t.$t("Tokenomics").array[1]
					.text))])]), i("div", {
					staticClass: "tokenomics-grid"
				}, [i("span", {
					staticClass: "tokenomics-grid-title"
				}, [t._v(t._s(t.$t("Tokenomics").array[2]
					.title))]), i("span", {
					staticClass: "tokenomics-grid-content"
				}, [t._v(t._s(t.$t("Tokenomics").array[2]
					.text))])])])])], 1), i("div", {
					staticClass: "spacepi_bg"
				}, [i("div", {
					staticClass: "choice-container-subject"
				}, [i("v-container", {
					staticClass: "choice-container"
				}, [i("div", {
					staticClass: "choice-explain"
				}, [i("span", {
					staticClass: "choice-explain-content wow spacepi-animation fade-out-min-in-max-animation"
				}, [t._v(" " + t._s(t.$t("answers").text) +
					" ")])]), i("div", {
					staticClass: "choice-region wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "choice-left"
				}, [i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(1)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[0] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							0
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[0] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[0] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[0]
							.text) +
						" ")]) : t._e()
				])]), i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(2)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[1] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							1
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[1] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[1] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[1]
							.text) +
						" ")]) : t._e()
				])]), i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(3)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[2] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							2
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[2] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[2] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[2]
							.text) +
						" ")]) : t._e()
				])]), i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(4)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[3] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							3
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[3] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[3] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[3]
							.text) +
						" ")]) : t._e()
				])])]), i("div", {
					staticClass: "choice-left"
				}, [i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(5)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[4] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							4
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[4] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[4] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[4]
							.text) +
						" ")]) : t._e()
				])]), i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(6)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[5] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							5
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[5] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[5] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[5]
							.text) +
						" ")]) : t._e()
				])]), i("a", {
					on: {
						click: function(e) {
							return t.choiceClick(7)
						}
					}
				}, [i("div", {
					staticClass: "choice-subject",
					style: 0 == t.choice[6] ?
						"" :
						"background: rgba(22, 15, 38, 0.4)"
				}, [i("div", {
						staticClass: "choice-title-subject"
					}, [i("span", {
						staticClass: "choice-title"
					}, [t._v(t._s(t
						.$t(
							"answers"
						)
						.array[
							6
						]
						.title
					))]), i("div", {
						staticClass: "choice-img"
					}, [0 == t
						.choice[6] ?
						i("v-img", {
							attrs: {
								src: a(
									"e87a"
								)
							}
						}) : i(
							"v-img", {
								attrs: {
									src: a(
										"3a79"
									)
								}
							})
					], 1)]), 1 == t.choice[6] ?
					i("span", {
						staticClass: "choice-content"
					}, [t._v(" " + t._s(t
							.$t(
								"answers"
							)
							.array[6]
							.text) +
						" ")]) : t._e()
				])]), i("div", {
					staticClass: "choice-height"
				})])])])], 1)]), i("foot")], 1)
			},
			J = [],
			z = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("v-container", {
					staticClass: "spacepi-container"
				}, [i("div", {
					staticClass: "spacepi-title wow spacepi-animation fade-in-up-animation"
				}, [t._v("Pi "), i("span", [t._v("Network")])]), i("span", {
					staticClass: "spacepi-vice-title fade-in-up-animation"
				}, [t._v(" " + t._s(t.$t("only")) + " ")]), i("span", {
					staticClass: "spacepi-content wow spacepi-animation fade-in-up-animation"
				}, [t._v(" " + t._s(t.$t("introduce")) + " ")]), i("div", {
					staticClass: "spacepi-button "
				}, t._l(t.spacepiBuntton, (function(e, a) {
					// console.log(e)
					// console.log(a)
					return i("v-menu", {
						key: a,
						attrs: {
							transition: "slide-y-transition",
							"open-on-hover": "",
							"offset-y": ""
						},
						scopedSlots: t._u([{
							key: "activator",
							fn: function(n) {
								var s = n.on,
									r = n.attrs;
								return [0 == a ? i("v-btn", t
										._g(t._b({
												staticClass: "left wow spacepi-animation fade-in-up-animation",
												on: {
													click: function(
														a
													) {
														1 != e
															.staus &&
															t
															.spacepiTo(
																e
																.link
															)
													}
												}
											}, "v-btn",
											r, !1), s), [t
											._v(" " + t._s(
												e[t
													.locale
												]
											) + " ")
										]) : t._e(), a != t
									.spacepiBuntton.length -
									1 && 0 != a ? i("v-btn",
										t._g(t._b({
												staticClass: "wow spacepi-animation fade-in-up-animation",
												on: {
													click: function(
														a
													) {
														1 != e
															.staus &&
															t
															.spacepiTo(
																e
																.link
															)
													}
												}
											}, "v-btn",
											r, !1), s), [t
											._v(" " + t._s(
												e[t
													.locale
												]
											) + " ")
										]) : t._e(), a == t
									.spacepiBuntton.length -
									1 ? i("v-btn", t._g(t
											._b({
													staticClass: "right wow spacepi-animation fade-in-up-animation",
													on: {
														click: function(
															a
														) {
															1 != e
																.staus &&
																t
																.spacepiTo(
																	e
																	.link
																)
														}
													}
												}, "v-btn",
												r, !1), s),
										[t._v(" " + t._s(e[t
												.locale
											]) +
											" ")]) : t._e()
								]
							}
						}], null, !0)
					}, [0 != e.staus ? i("v-list", {
						staticClass: "spacepi-list"
					}, t._l(t.spacepiBunttonList, (function(n, s) {
						return i("div", {
							key: s
						}, [n.b_id == e.id && 0 == a ?
							i("v-list-item", {
								staticClass: "right",
								on: {
									click: function(
										e) {
										return t
											.spacepiTo(
												n
												.link
											)
									}
								}
							}, [i("v-list-item-title", {
								staticStyle: {
									"text-align": "center"
								}
							}, [t._v(t._s(n[t
								.locale
							]))])], 1) : t._e(), n
							.b_id == e.id && 0 != a &&
							a != t.spacepiBuntton
							.length - 1 ? i(
								"v-list-item", {
									on: {
										click: function(
											e) {
											return t
												.spacepiTo(
													n
													.link
												)
										}
									}
								}, [i("v-list-item-title", {
									staticStyle: {
										"text-align": "center"
									}
								}, [t._v(t._s(n[t
									.locale
								]))])], 1) : t._e(),
							n.b_id == e.id && a == t
							.spacepiBuntton.length - 1 ?
							i("v-list-item", {
								staticClass: "left",
								on: {
									click: function(
										e) {
										return t
											.spacepiTo(
												n
												.link
											)
									}
								}
							}, [i("v-list-item-title", {
								staticStyle: {
									"text-align": "center"
								}
							}, [t._v(t._s(n[t
								.locale
							]))])], 1) : t._e()
						], 1)
					})), 0) : t._e()], 1)
				})), 1), i("span", {
					staticClass: "spacepi-illustrate spacepi-animation fade-in-up-animation"
				}, [t._v(" " + t._s(t.$t("happy_text")) + " ")]), i("div", {
					staticClass: "spacepi-address spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "address"
				}, [i("svg", {
					staticClass: "address-svg",
					attrs: {
						viewBox: "0 0 903.09 83"
					}
				}, [i("g", {
					attrs: {
						transform: "translate(1990 -540.573)",
						fill: "rgba(44,29,81,0.5)"
					}
				}, [i("path", {
					attrs: {
						d: "M -1087.709838867188 623.0731201171875 L -1989.5 623.0731201171875 L -1989.499877929688 541.0733642578125 L -1127.703979492188 541.0733642578125 L -1087.709838867188 623.0731201171875 Z",
						stroke: "none"
					}
				}), i("path", {
					attrs: {
						d: "M -1088.509887695312 622.5731201171875 L -1128.016357421875 541.5733642578125 L -1988.999877929688 541.5733642578125 L -1989 622.5731201171875 L -1088.509887695312 622.5731201171875 M -1086.90966796875 623.5731201171875 L -1086.910400390625 623.5715942382812 L -1086.90966796875 623.5731201171875 L -1990 623.5731201171875 L -1989.999877929688 540.5733642578125 L -1127.391479492188 540.5733642578125 L -1086.90966796875 623.5731201171875 Z",
						stroke: "none",
						fill: "#FFB44E"
					}
				})])]), i("span", [t._v(t._s(t.address))])]), i("div", {
					directives: [{
						name: "clipboard",
						rawName: "v-clipboard:copy",
						value: t.address,
						expression: "address",
						arg: "copy"
					}, {
						name: "clipboard",
						rawName: "v-clipboard:success",
						value: t.onCopy,
						expression: "onCopy",
						arg: "success"
					}],
					staticClass: "copy",
					staticStyle: {
						cursor: "pointer"
					}
				}, [i("svg", {
					staticClass: "copy-svg",
					attrs: {
						viewBox: "0 0 311.683 83.001"
					}
				}, [i("path", {
					attrs: {
						d: "M-1678.317,115h-271.2L-1990,32h296.9l14.782,16.417V115h0Z",
						transform: "translate(1990 -32)",
						fill: "#FFB44E"
					}
				})]), i("div", {
					staticClass: "copy-img",
					attrs: {
						id: "copy-img"
					}
				})])]), i("div", {
					staticClass: "spacepi-address-m spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "address",
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v(" " + t._s(t.address.substr(0, 22)) + "..." + t._s(t.address
					.substr(t.address.length - 5)) + " ")]), i("div", {
					directives: [{
						name: "clipboard",
						rawName: "v-clipboard:copy",
						value: t.address,
						expression: "address",
						arg: "copy"
					}, {
						name: "clipboard",
						rawName: "v-clipboard:success",
						value: t.onCopym,
						expression: "onCopym",
						arg: "success"
					}],
					staticClass: "copy-img"
				}, [i("v-img", {
					staticClass: "v-img",
					attrs: {
						src: a("78a3")
					}
				})], 1)])])
			},
			H = [],
			Y = a("2cb0"),
			V = {
				data: function() {
					return {
						address: this.$t("bsc_token"),
						spacepiBuntton: [],
						spacepiBunttonList: [],
						copy: ""
					}
				},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale", "alert"])),
				components: {},
				mounted: function() {
					var t = this,
						e = {
							container: document.getElementById("copy-img"),
							renderer: "svg",
							loop: !1,
							autoplay: !1,
							animationData: Y
						};
					this.copy = f.a.loadAnimation(e), setTimeout((function() {
						t.location()
					}), 1)
				},
				methods: Object(r["a"])(Object(r["a"])({}, Object(o["b"])(["setAlert"])), {}, {
					location: function() {
						this.getspacepiBuntton(), this.getspacepiBunttonList()
					},
					spacepiTo: function(t) {
						window.open(t)
					},
					getspacepiBuntton: function() {
						var t = this;
						var testArray = []
						p.a.post(this.domainUrl + "spacepiBuntton", {}).then((function(e) {
							console.log(e.data.data, '111')
							testArray.push({
								ar: "يشتري Pi Network",
								create_date: 1648718156,
								en_US: "Buy Pi Network",
								id: 1,
								in: "Beli Pi Network",
								ja_JP: "Pi Networkを購入する",
								ko_KR: "Pi Network 구매",
								link: "",
								sort: 4,
								staus: 1,
								th: "ซื้อ Pi Network",
								tr_TR: "Pi Network satın al",
								zh_CN: "购买 Pi Network",
								zh_TW: "购买 Pi Network"
							})
							testArray.push({
								ar: "Pi Network اتجاه",
								create_date: 1648718156,
								en_US: "Pi Network Trend",
								id: 3,
								in: "Pi Network Trend",
								ja_JP: "Pi Network 傾向",
								ko_KR: "Pi Network 경향",
								link: "",
								sort: 4,
								staus: 1,
								th: "Pi Network แนวโน้ม",
								tr_TR: "Pi Network Akım",
								zh_CN: "Pi Network 趋势",
								zh_TW: "Pi Network 趨勢"
							})
							// testArray[1].zh_CN = 'Pi Network 趋势';
							t.spacepiBuntton = testArray
						})).catch((function(t) {}))
					},
					getspacepiBunttonList: function() {
						var t = this;
						var testArray1 = []
						p.a.post(this.domainUrl + "spacepiBunttonList", {}).then((function(e) {
							console.log(e.data.data, '2222')
							testArray1.push({
								ar: "PanCakeSwap",
								b_id: 1,
								create_date: 1648755864,
								en_US: "PanCakeSwap",
								id: 8,
								in: "PanCakeSwap",
								ja_JP: "PanCakeSwap",
								ko_KR: "PanCakeSwap",
								link: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90",
								sort: 1,
								th: "PanCakeSwap",
								tr_TR: "PanCakeSwap",
								zh_CN: "PanCakeSwap",
								zh_TW: "PanCakeSwap",
							})
							testArray1.push({
								ar: "Staysafu يكشف",
								b_id: 3,
								create_date: 1648756329,
								en_US: "Staysafu Detect",
								id: 10,
								in: "Staysafu Detect",
								ja_JP: "Staysafu 探知",
								ko_KR: "Staysafu 감지하다",
								link: "https://app.staysafu.org/scan/free?a=0x0a6231128a5140dba469553ae34a92e830974b90",
								sort: 1,
								th: "Staysafu ตรวจจับ",
								tr_TR: "Staysafu tespit etmek",
								zh_CN: "Staysafu 检测",
								zh_TW: "Staysafu 检测",
							})
							testArray1.push({
								ar: "Dextools اتجاه",
								b_id: 3,
								create_date: 1648718544,
								en_US: "Dextools Trend",
								id: 2,
								in: "Dextools Trend",
								ja_JP: "Dextools 傾向",
								ko_KR: "Dextools 경향",
								link: "https://www.dextools.io/app/en/bnb/pair-explorer/0xa527035b53961f83009ef010ae1600afa89b1438",
								sort: 1,
								th: "Dextools แนวโน้ม",
								tr_TR: "Dextools Akım",
								zh_CN: "Dextools 趋势",
								zh_TW: "Dextools 趨勢",
							})
							testArray1.push({
								ar: "Poocoin اتجاه",
								b_id: 3,
								create_date: 1648719008,
								en_US: "Poocoin Trend",
								id: 3,
								in: "Poocoin Trend",
								ja_JP: "Poocoin 傾向",
								ko_KR: "Poocoin 경향",
								link: "https://poocoin.app/tokens/0x0a6231128a5140dba469553ae34a92e830974b90",
								sort: 1,
								th: "Poocoin แนวโน้ม",
								tr_TR: "Poocoin Akım",
								zh_CN: "Poocoin 趋势",
								zh_TW: "Poocoin 趨勢"
							})
							t.spacepiBunttonList = testArray1;
							for (var a = [], i = [], n = 0; n < t.spacepiBunttonList
								.length; n++) a[n] =
								"width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;",
								i[n] = !1;
							t.tabarray = a, t.array1 = i
							console.log(a)
						})).catch((function(t) {}))
					},
					onCopy: function(t) {
						var e = this;
						this.copy.play(), setTimeout((function() {
							e.copy.stop(), e.$store.commit("setAlert", {
								status: !1,
								text: "",
								type: ""
							})
						}), 2e3)
					},
					onCopym: function(t) {
						var e = this;
						this.$store.commit("setAlert", {
							status: !0,
							text: this.$t("copySuccess"),
							type: "success"
						}), setTimeout((function() {
							e.$store.commit("setAlert", {
								status: !1,
								text: "",
								type: ""
							})
						}), 2e3)
					}
				})
			},
			W = V,
			X = (a("6733"), a("a523")),
			q = Object(y["a"])(W, z, H, !1, null, "26db3abe", null),
			Z = q.exports;
		A()(q, {
			VBtn: E["a"],
			VContainer: X["a"],
			VImg: N["a"],
			VList: M["a"],
			VListItem: O["a"],
			VListItemTitle: Q["a"],
			VMenu: R["a"]
		});
		var $ = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					attrs: {
						id: "animation"
					}
				})
			},
			tt = [],
			et = a("7b76"),
			at = {
				name: "animation",
				components: {},
				data: function() {
					return {
						defaultOptions: {
							animationData: et
						},
						animationSpeed: 1,
						anim: {}
					}
				},
				mounted: function() {
					this.svgFun()
				},
				methods: {
					svgFun: function() {
						var t = {
							container: document.getElementById("animation"),
							renderer: "svg",
							loop: !1,
							autoplay: !0,
							animationData: et
						};
						f.a.loadAnimation(t)
					}
				}
			},
			it = at,
			nt = Object(y["a"])(it, $, tt, !1, null, null, null),
			st = nt.exports,
			rt = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					attrs: {
						id: "animationm"
					}
				})
			},
			ot = [],
			ct = a("a1a7"),
			pt = {
				name: "animationm",
				components: {},
				data: function() {
					return {
						defaultOptions: {
							animationData: ct
						},
						animationSpeed: 1,
						anim: {}
					}
				},
				mounted: function() {
					this.svgFun()
				},
				methods: {
					svgFun: function() {
						var t = {
							container: document.getElementById("animationm"),
							renderer: "svg",
							loop: !1,
							autoplay: !0,
							animationData: ct
						};
						f.a.loadAnimation(t)
					}
				}
			},
			lt = pt,
			ut = Object(y["a"])(lt, rt, ot, !1, null, null, null),
			dt = ut.exports,
			mt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("v-container", {
					staticClass: "telegraph-container"
				}, [i("div", {
					staticClass: "telegram-title-subject concept-content wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "line"
				}), i("span", {
					staticClass: "telegraph-title"
				}, [t._v(t._s(t.$t("telegraph")))])]), i("div", {
					staticClass: "telegraph-grid concept-content wow spacepi-animation fade-in-up-animation"
				}, [t._l(t.telegraph, (function(e, a) {
					return i("div", {
						key: a,
						staticClass: "telegraph-grid-subject p"
					}, [i("a", {
						on: {
							click: function(a) {
								return t.to(e.link)
							}
						}
					}, [i("v-img", {
						attrs: {
							src: e.picture
						}
					})], 1)])
				})), t._l(t.telegraph, (function(e, a) {
					return 0 == t.telegraphStatus ? [a < 6 ? i("div", {
						staticClass: "telegraph-grid-subject m"
					}, [i("a", {
						on: {
							click: function(a) {
								return t.to(e.link)
							}
						}
					}, [i("v-img", {
						attrs: {
							src: e.m_picture
						},
						on: {
							click: function(a) {
								return t.to(e.link)
							}
						}
					})], 1)]) : t._e()] : t._e()
				})), t._l(t.telegraph, (function(e, a) {
					return 1 == t.telegraphStatus ? [i("div", {
						staticClass: "telegraph-grid-subject m"
					}, [i("a", {
						on: {
							click: function(a) {
								return t.to(e.link)
							}
						}
					}, [i("v-img", {
						attrs: {
							src: e.m_picture
						},
						on: {
							click: function(a) {
								return t.to(e.link)
							}
						}
					})], 1)])] : t._e()
				})), 0 == t.telegraphStatus ? i("div", {
					staticClass: "m"
				}, [i("v-btn", {
					staticClass: "more-m",
					staticStyle: {
						background: "rgba(22, 15, 38, 0)"
					},
					on: {
						click: function(e) {
							t.telegraphStatus = !0
						}
					}
				}, [i("span", [t._v(t._s(t.$t("telegraph_more")))]), i("div", {
					staticClass: "more-telegrams-add"
				}, [i("v-img", {
					attrs: {
						src: a("ec75")
					}
				})], 1)])], 1) : t._e()], 2)])
			},
			yt = [],
			gt = {
				data: function() {
					return {
						telegraph: [],
						telegraphStatus: !1
					}
				},
				props: {},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale"])),
				watch: {},
				components: {},
				created: function() {
					setTimeout(this.location(), 1)
				},
				mounted: function() {},
				methods: {
					location: function() {
						this.getspacepiTelegraph()
					},
					to: function(t) {
						window.open(t)
					},
					getspacepiTelegraph: function() {
						var t = this;
						var testArray4 = []
						p.a.post(this.domainUrl + "telegraph", {}).then((function(e) {
							console.log(e.data.data, '55')
							testArray4.push(
							{
								create_date: 1648822645,
								id: 8,
								link: "https://t.me/PI_NetworkCN",
								m_picture: "http://resource.space-pi.com/storage/topic/20220523/2b4063701a60f5905b0d653f2aabeef5.svg",
								name: "中文社区",
								picture: "http://resource.space-pi.com/storage/topic/20220523/6c48e630f49021b00bf628b684ddbfbc.svg",
								sort: 2
							})
							t.telegraph = testArray4
						})).catch((function(t) {}))
					}
				}
			},
			At = gt,
			kt = (a("0ab4"), Object(y["a"])(At, mt, yt, !1, null, "6ad151c3", null)),
			vt = kt.exports;
		A()(kt, {
			VBtn: E["a"],
			VContainer: X["a"],
			VImg: N["a"]
		});
		var ht = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "foot-subject"
				}, [i("v-container", {
					staticClass: "foot-container"
				}, [i("div", {
					staticClass: "logo-subject"
				}, [i("div", {
					staticClass: "logo-left"
				}, [i("div", {
					staticClass: "logo-img"
				}, [i("v-img", {
					attrs: {
						src: a("cf05")
					}
				})], 1), i("div", {
					staticClass: "logo-title-subject"
				}, [i("span", [t._v("Pi ")]), i("span", {
					staticClass: "y"
				}, [t._v("Network")])])]), i("div", {
					staticClass: "logo-right"
				}, [i("div", {
					staticClass: "locale"
				}, [i("v-menu", {
					attrs: {
						"offset-y": ""
					},
					scopedSlots: t._u([{
						key: "activator",
						fn: function(e) {
							var n = e.on,
								s = e.attrs;
							return [i("v-btn", t
								._g(t
									._b({
											staticClass: "locale-btn",
											attrs: {
												tile: "",
												elevation: "",
												color: "rgba(255, 255, 255, 0)",
												dark: ""
											}
										},
										"v-btn",
										s,
										!
										1
									),
									n),
								[i("div", {
											staticClass: "locale-img"
										},
										[i("v-img", {
											attrs: {
												src: a(
													"0ad3"
												)
											}
										})],
										1
									),
									t
									._l(t
										.localeData,
										(function(
											e,
											a
										) {
											return i(
												"div", {
													key: a,
													attrs: {
														value: a
													}
												},
												[e.key ==
													t
													.locale ?
													i("span",
														[t._v(" " +
															t
															._s(e
																.name
															) +
															" "
														)]
													) :
													t
													._e()
												]
											)
										})
									)
								], 2)]
						}
					}])
				}, [i("v-list", t._l(t.localeData, (function(e,
					a) {
					return i("v-list-item", {
						key: a,
						on: {
							click: function(
								a) {
								return t
									.localeClick(
										e
										.key
									)
							}
						}
					}, [i("v-list-item-title",
						[t._v(t._s(e
							.name
						))]
					)], 1)
				})), 1)], 1)], 1)])]), i("div", {
					staticClass: "join-subject"
				}, [i("span", {
					staticClass: "join-title"
				}, [t._v(t._s(t.$t("Community.title")))]), i("span", {
					staticClass: "join-content"
				}, [t._v(t._s(t.$t("Community.text")))])]), i("div", {
					staticClass: "join-bnt-subject"
				}, [i("a", [i("div", {
					staticClass: "join-bnt",
					on: {
						click: function(e) {
							t.Jump(t.$t("Community").buttext_url)
						}
					}
				}, [t._v(t._s(t.$t("Community.buttext")))])])]), i("div", {
					staticClass: "join-link-subject"
				}, [i("div", {
					staticClass: "join-link-vice-subject"
				}, t._l(t.url, (function(e, a) {
					return i("a", {
						key: a,
						staticClass: "join-a",
						on: {
							click: function(a) {
								return t.Jump(e.link)
							}
						}
					}, [i("div", {
						staticClass: "join-img"
					}, 1)])
				})), 0)]), i("div", {
					staticClass: "foot-line"
				}), i("div", {
					staticClass: "foot-copyright"
				}, [t._v(" " + t._s(t.$t("footer1")) + " " + t._s(t.$t("footer2")) +
					" ")])])], 1)
			},
			bt = [],
			ft = {
				data: function() {
					return {
						url: [],
						localeData: [{
							key: "en_US",
							name: "En"
						}, {
							key: "tr_TR",
							name: "Türk"
						}, {
							key: "ko_KR",
							name: "한국어"
						}, {
							key: "ja_JP",
							name: "日本"
						}, {
							key: "in",
							name: "Indonesia"
						}, {
							key: "th",
							name: "ไทย"
						}, {
							key: "ar",
							name: "عربي"
						}, {
							key: "zh_TW",
							name: "繁體中文"
						}, {
							key: "zh_CN",
							name: "简体中文"
						}]
					}
				},
				props: {},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale"])),
				watch: {},
				components: {},
				created: function() {
					this.location()
				},
				mounted: function() {},
				methods: Object(r["a"])(Object(r["a"])({}, Object(o["b"])(["setLocale"])), {}, {
					location: function() {
						this.bottomPartners()
					},
					Jump: function(t) {
						window.open(t)
					},
					bottomPartners: function() {
						var t = this;
						p.a.post(this.domainUrl + "bottomPartners", {}).then((function(e) {
							t.url = e.data.data
						})).catch((function(t) {}))
					},
					localeClick: function(t) {
						this.$store.commit("setLocale", t), this.$i18n.locale = t
					}
				})
			},
			xt = ft,
			Ct = (a("8ce5"), Object(y["a"])(xt, ht, bt, !1, null, "71227b0c", null)),
			St = Ct.exports;
		A()(Ct, {
			VBtn: E["a"],
			VContainer: X["a"],
			VImg: N["a"],
			VList: M["a"],
			VListItem: O["a"],
			VListItemTitle: Q["a"],
			VMenu: R["a"]
		});
		var Pt = a("b918"),
			_t = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "nftCarousel"
				}, [a("div", {
					staticClass: "pc"
				}, [a("div", {
					staticClass: "nft-carousel"
				}, [a("v-carousel", {
					staticClass: "nft-carousel-container",
					attrs: {
						"hide-delimiters": "",
						"show-arrows": !1,
						cycle: ""
					}
				}, t._l(t.getNftCarouselData, (function(e, i) {
					return a("v-carousel-item", {
						key: i
					}, [a("div", [a("v-img", {
						staticClass: "nft-carousel-img",
						attrs: {
							src: e.picture,
							contain: !0
						},
						on: {
							click: function(a) {
								return t
									.spacepiTo(
										e
										.url
									)
							}
						}
					})], 1)])
				})), 1)], 1)]), a("div", {
					staticClass: "mo"
				}, [a("div", {
					staticClass: "nft-carousel-s"
				}, [a("v-carousel", {
					staticClass: "nft-carousel-container",
					attrs: {
						"hide-delimiters": "",
						"show-arrows": !1,
						cycle: ""
					}
				}, t._l(t.getNftCarouselData, (function(e, i) {
					return a("v-carousel-item", {
						key: i
					}, [a("div", [a("v-img", {
						staticClass: "nft-carousel-img",
						attrs: {
							src: e.picture_m
						},
						on: {
							click: function(a) {
								return t
									.spacepiTo(
										e
										.url
									)
							}
						}
					})], 1)])
				})), 1)], 1)]), "/nft" == t.$router.currentRoute.path ? a("div", {
					staticClass: "nft-top-bnt wow spacepi-animation fade-in-up-animation"
				}, t._l(t.getNftTopBunttonData, (function(e, i) {
					return a("v-menu", {
						key: i,
						attrs: {
							transition: "slide-y-transition",
							"open-on-hover": "",
							"offset-y": ""
						},
						scopedSlots: t._u([{
							key: "activator",
							fn: function(n) {
								var s = n.on,
									r = n.attrs;
								return [0 == i ? a("v-btn", t
										._g(t._b({
												staticClass: "left",
												on: {
													click: function(
														a
													) {
														1 != e
															.staus &&
															t
															.spacepiTo(
																e
																.link
															)
													}
												}
											}, "v-btn",
											r, !1), s), [
											"zh_CN" == t
											.locale ||
											"zh_TW" == t
											.locale ? a(
												"span", [t
													._v(" " +
														t
														._s(e
															.zh_CN
														) +
														" ")
												]) : a(
												"span", [t
													._v(" " +
														t
														._s(e
															.en_US
														) +
														" ")
												])
										]) : t._e(), i != t
									.getNftTopBunttonData
									.length - 1 && 0 != i ?
									a("v-btn", t._g(t._b({
											on: {
												click: function(
													a
												) {
													1 != e
														.staus &&
														t
														.spacepiTo(
															e
															.link
														)
												}
											}
										}, "v-btn",
										r, !1), s), [
										"zh_CN" == t
										.locale ||
										"zh_TW" == t
										.locale ? a(
											"span", [t
												._v(" " +
													t
													._s(e
														.zh_CN
													) +
													" ")
											]) : a(
											"span", [t
												._v(" " +
													t
													._s(e
														.en_US
													) +
													" ")
											])
									]) : t._e(), i == t
									.getNftTopBunttonData
									.length - 1 ? a("v-btn",
										t._g(t._b({
												staticClass: "right",
												on: {
													click: function(
														a
													) {
														1 != e
															.staus &&
															t
															.spacepiTo(
																e
																.link
															)
													}
												}
											}, "v-btn",
											r, !1), s), [
											"zh_CN" == t
											.locale ||
											"zh_TW" == t
											.locale ? a(
												"span", [t
													._v(" " +
														t
														._s(e
															.zh_CN
														) +
														" ")
												]) : a(
												"span", [t
													._v(" " +
														t
														._s(e
															.en_US
														) +
														" ")
												])
										]) : t._e()
								]
							}
						}], null, !0)
					}, [0 != e.staus ? a("v-list", t._l(t
						.getNftTopBunttonListData, (function(n, s) {
							return a("div", {
								key: s
							}, [n.b_id == e.id && 0 == i ?
								a("v-list-item", {
									staticClass: "right",
									on: {
										click: function(
											e) {
											return t
												.spacepiTo(
													n
													.link
												)
										}
									}
								}, [a("v-list-item-title", {
									staticStyle: {
										"text-align": "center"
									}
								}, ["zh_CN" == t
									.locale &&
									"zh_TW" == t
									.locale ? a(
										"span",
										[t._v(" " +
											t
											._s(e
												.zh_CN
											) +
											" "
										)]
									) : a(
										"span",
										[t._v(" " +
											t
											._s(e
												.en_US
											) +
											" "
										)])
								])], 1) : t._e(), n.b_id ==
								e.id && 0 != i && i != t
								.getNftTopBunttonData
								.length - 1 ? a(
									"v-list-item", {
										on: {
											click: function(
												e) {
												return t
													.spacepiTo(
														n
														.link
													)
											}
										}
									}, [a("v-list-item-title", {
										staticStyle: {
											"text-align": "center"
										}
									}, ["zh_CN" == t
										.locale &&
										"zh_TW" == t
										.locale ? a(
											"span",
											[t._v(" " +
												t
												._s(e
													.zh_CN
												) +
												" "
											)]
										) : a(
											"span",
											[t._v(" " +
												t
												._s(e
													.en_US
												) +
												" "
											)])
									])], 1) : t._e(), n
								.b_id == e.id && i == t
								.getNftTopBunttonData
								.length - 1 ? a(
									"v-list-item", {
										staticClass: "left",
										on: {
											click: function(
												e) {
												return t
													.spacepiTo(
														n
														.link
													)
											}
										}
									}, [a("v-list-item-title", {
										staticStyle: {
											"text-align": "center"
										}
									}, ["zh_CN" == t
										.locale &&
										"zh_TW" == t
										.locale ? a(
											"span",
											[t._v(" " +
												t
												._s(e
													.zh_CN
												) +
												" "
											)]
										) : a(
											"span",
											[t._v(" " +
												t
												._s(e
													.en_US
												) +
												" "
											)])
									])], 1) : t._e()
							], 1)
						})), 0) : t._e()], 1)
				})), 1) : t._e()])
			},
			wt = [],
			Bt = {
				data: function() {
					return {
						getNftCarouselData: [],
						getNftTopBunttonData: [],
						getNftTopBunttonListData: []
					}
				},
				components: {},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale"])),
				created: function() {},
				mounted: function() {
					this.getData()
				},
				methods: {
					spacepiTo: function(t) {
						window.open(t)
					},
					getData: function() {
						this.getNftCarousel(), this.getNftTopBuntton(), this.getNftTopBunttonList()
					},
					getNftCarousel: function() {
						var t = this;
						var testArray3 = [{
							create_date: 1658341633,
							id: 2,
							picture: 'https://cdn.pixabay.com/photo/2020/04/01/08/57/transformation-4990460_1280.jpg',
							picture_m: 'https://cdn.pixabay.com/photo/2020/04/01/08/57/transformation-4990460_1280.jpg',
							sort: 1,
							url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90'
						}];
						p.a.post(this.domainUrl + "getNftCarousel").then((function(e) {
							console.log(e.data.data, '333')

							t.getNftCarouselData = testArray3
						})).catch((function(t) {}))
					},
					getNftTopBuntton: function() {
						var t = this;
						p.a.post(this.domainUrl + "getNftTopBuntton").then((function(e) {
							t.getNftTopBunttonData = e.data.data
						})).catch((function(t) {}))
					},
					getNftTopBunttonList: function() {
						var t = this;
						p.a.post(this.domainUrl + "getNftTopBunttonList").then((function(e) {
							t.getNftTopBunttonListData = e.data.data
						})).catch((function(t) {}))
					}
				}
			},
			Et = Bt,
			Tt = (a("fc39"), a("5e66")),
			It = a("3e35"),
			Dt = Object(y["a"])(Et, _t, wt, !1, null, "9e452178", null),
			Nt = Dt.exports;
		A()(Dt, {
			VBtn: E["a"],
			VCarousel: Tt["a"],
			VCarouselItem: It["a"],
			VImg: N["a"],
			VList: M["a"],
			VListItem: O["a"],
			VListItemTitle: Q["a"],
			VMenu: R["a"]
		});
		var Mt = {
				data: function() {
					return {
						carouselChartIndex: 0,
						carouseChartArrar: [],
						responsecArray: [],
						progresstime: null,
						progress: 0,
						progressArray: [],
						choice: [],
						response: []
					}
				},
				components: {
					spacePi: Z,
					animation: st,
					animationm: dt,
					telegraph: vt,
					foot: St,
					nftCarousel: Nt
				},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale"])),
				mounted: function() {
					var t = this;
					setTimeout((function() {
						t.partnersC(), t.partners()
					}), 1), setTimeout((function() {}), 1e3);
					var e = {
						container: document.getElementById("spot"),
						renderer: "svg",
						loop: !0,
						autoplay: !0,
						animationData: Pt
					};
					f.a.loadAnimation(e);
					var a = {
						container: document.getElementById("spot-m"),
						renderer: "svg",
						loop: !0,
						autoplay: !0,
						animationData: Pt
					};
					f.a.loadAnimation(a)
				},
				methods: {
					spacepiTo: function(t) {
						window.open(t)
					},
					carouselStartInterval: function() {
						var t = this;
						this.progresstime = setInterval((function() {
							var e = [];
							t.progress++;
							for (var a = 0; a < t.responsecArray.length; a++) e[a] = 0;
							e[t.carouselChartIndex] = t.progress, 100 == t.progress && (t
								.progress = 0, t.carouselChartIndex++, t.responsecArray
								.length <= t.carouselChartIndex && (t.carouselChartIndex =
									0)), t.progressArray = e
						}), 100)
					},
					partnersC: function() {
						var t = this;
						p.a.post(this.domainUrl + "partnersList").then((function(e) {
							t.responsecArray = e.data.data
						})).catch((function(t) {}))
					},
					partners: function() {
						var t = this;
						p.a.post(this.domainUrl + "Partners").then((function(e) {
							console.log(e.data.data,'66')
							// t.carouseChartArrar = e.data.data
						})).catch((function(t) {}))
					},
					carousel: function(t) {
						this.progress = 0, "down" === t ? (this.carouselChartIndex++, this.responsecArray
							.length <= this.carouselChartIndex && (this.carouselChartIndex = 0)) : (
							0 === this.carouselChartIndex && (this.carouselChartIndex = this
								.responsecArray.length), this.carouselChartIndex--)
					},
					carouselStartStatus: function(t) {
						t ? clearInterval(this.progresstime) : this.carouselStartInterval()
					},
					carouselProgressClick: function(t) {
						this.carouselChartIndex = t, this.progress = 0
					},
					choiceClick: function(t) {
						this.choice = [0, 0, 0, 0, 0, 0, 0, 0];
						for (var e = 0; e < this.choice.length; e++) e == t - 1 && (this.choice[e] = 1)
					}
				}
			},
			Ot = Mt,
			Qt = (a("5878"), a("8e36")),
			Ft = Object(y["a"])(Ot, K, J, !1, null, "5133969e", null),
			Rt = Ft.exports;
		A()(Ft, {
			VCarousel: Tt["a"],
			VCarouselItem: It["a"],
			VContainer: X["a"],
			VImg: N["a"],
			VProgressLinear: Qt["a"]
		});
		var jt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [i("div", {
					staticClass: "spacepi_bg"
				}, [i("div", {
					staticClass: "partners-subject"
				}, [i("v-container", {
					staticClass: "partners-container"
				}, [i("div", {
					staticClass: "partners-title-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "line"
				}), i("span", {
					staticClass: "partners-title"
				}, [i("span", [t._v(t._s(t.$t(
					"partners_title1")))]), i("span", [t._v(
					t._s(t.$t("partners_title2")))])])]), i("div", {
					staticClass: "partners-content wow spacepi-animation fade-out-min-in-max-animation"
				}, [t._v(" " + t._s(t.$t("partners_text")) + " ")]), i(
					"div", {
						staticClass: "partners-bnt-content wow spacepi-animation fade-in-up-animation"
					}, [i("div", {
							staticClass: "partners-bnt1 p"
						}, [t._v(t._s(t.$t("partners_email_title")))]), i(
							"div", {
								staticClass: "partners-bnt1-s m"
							}, [t._v(t._s(t.$t("partners_email_title")))]),
						i("div", {
							directives: [{
								name: "clipboard",
								rawName: "v-clipboard:copy",
								value: t.$t("partners_email"),
								expression: "$t('partners_email')",
								arg: "copy"
							}, {
								name: "clipboard",
								rawName: "v-clipboard:success",
								value: t.onCopy,
								expression: "onCopy",
								arg: "success"
							}],
							staticClass: "partners-bnt2"
						}, [i("span", [t._v(t._s(t.$t(
							"partners_email")))]), i("div", {
							staticClass: "partners-copy"
						}, [i("v-img", {
							attrs: {
								src: a("85e3")
							}
						})], 1)])
					])])], 1)]), i("div", {
					staticClass: "spacepi_bg"
				}, [i("telegraph")], 1), i("div", {
					staticClass: "spacepi_bg"
				}, [i("v-container", {
					staticClass: "friendship-partner-container"
				}, t._l(t.array, (function(e, a) {
					return i("div", {
						key: a,
						staticClass: "friendship-partner-subject"
					}, [i("div", {
						staticClass: "friendship-partner-title-subject wow spacepi-animation fade-right-in-left-animation"
					}, [i("div", {
						staticClass: "line"
					}), i("div", {
						staticClass: "friendship-partner-title"
					}, [t._v(" " + t._s(e[t.locale]) +
						" ")])]), i("div", {
						staticClass: "friendship-partner-adsense wow spacepi-animation fade-in-up-animation"
					}, [t._l(t.data, (function(a) {
						return [e.id == a.p_id ? i(
							"v-img", {
								attrs: {
									src: a
										.picture
								},
								on: {
									click: function(
										e
									) {
										return t
											.to(a
												.link
											)
									}
								}
							}) : t._e()]
					}))], 2)])
				})), 0)], 1), i("foot")], 1)
			},
			Gt = [],
			Ut = {
				data: function() {
					return {
						array: [],
						data: []
					}
				},
				components: {
					telegraph: vt,
					foot: St
				},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale"])),
				created: function() {
					setTimeout(this.location(), 1)
				},
				methods: {
					location: function() {
						this.partnersC(), this.partners()
					},
					partnersC: function() {
						var t = this;
						p.a.post(this.domainUrl + "partnersList").then((function(e) {
							t.array = e.data.data
						})).catch((function(t) {}))
					},
					partners: function() {
						var t = this;
						p.a.post(this.domainUrl + "Partners").then((function(e) {
							t.data = e.data.data
						})).catch((function(t) {}))
					},
					to: function(t) {
						window.open(t)
					},
					onCopy: function(t) {
						var e = this;
						this.$store.commit("setAlert", {
							status: !0,
							text: this.$t("copySuccess"),
							type: "success"
						}), setTimeout((function() {
							e.$store.commit("setAlert", {
								status: !1,
								text: "",
								type: ""
							})
						}), 2e3)
					}
				}
			},
			Lt = Ut,
			Kt = (a("8440"), Object(y["a"])(Lt, jt, Gt, !1, null, "d169b950", null)),
			Jt = Kt.exports;
		A()(Kt, {
			VContainer: X["a"],
			VImg: N["a"]
		});
		var zt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [i("div", {
					staticClass: "lock-warehouse-subject"
				}, [i("v-container", {
					staticClass: "wbnb-container"
				}, [i("div", {
					staticClass: "wbnb-title-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "wbnb-line"
				}), i("span", {
					staticClass: "wbnb-title"
				}, [t._v("Pi Network"), i("span", {
					staticClass: "wbnb-title-line"
				}, [t._v("/")]), t._v("WBNB")])]), i("div", {
					staticClass: "lock-subject wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "lock-img"
				}, [i("v-img", {
					attrs: {
						src: a("3a4a")
					}
				})], 1), i("span", {
					staticClass: "lock-time"
				}, [t._v(t._s(t.lockTime))]), i("span", {
					staticClass: "lock-time-title"
				}, [t._v("Lock Timer")]), i("div", {
					staticClass: "lock-line"
				}), i("div", {
					staticClass: "lock-public-subject"
				}, [i("div", {
					staticClass: "lock-public-s"
				}, [i("span", {
					staticClass: "lock-public-title"
				}, [t._v("Total Supply of LP")]), i(
					"span", {
						staticClass: "lock-public-text"
					}, [t._v("23780.324316926395")])]), i("div", {
					staticClass: "lock-public-s"
				}, [i("span", {
					staticClass: "lock-public-title"
				}, [t._v("LP in Locker (96%)")]), i(
					"span", {
						staticClass: "lock-public-text"
					}, [t._v("22836.8")])]), i("div", {
					staticClass: "lock-public-s"
				}, [i("span", {
					staticClass: "lock-public-title"
				}, [t._v("Unlock Date")]), i("span", {
					staticClass: "lock-public-text"
				}, [t._v("14 Mar 2023 at 00:00")])]), i("div", {
					staticClass: "lock-public-s"
				}, [i("span", {
					staticClass: "lock-public-title"
				}, [t._v("# Lockers")]), i("span", {
					staticClass: "lock-public-text"
				}, [t._v("1")])])])])]), i("v-container", {
					staticClass: "spacepi-address-container"
				}, [i("div", {
					staticClass: "spacepi-address-subject wow spacepi-animation fade-in-up-animation"
				}, [i("span", {
					staticClass: "spacepi-address pc"
				}, [t._v("0xFCC43c2f154b2286CDDe879Ab7664653D351fC3D")]), i(
					"span", {
						staticClass: "spacepi-address mo"
					}, [t._v("0xFCC...fC3D")]), i("span", {
					staticClass: "spacepi-i"
				}, [t._v("is the Owner")])])]), i("v-container", {
					staticClass: "spacepi-bnt-container bnt-animation wow spacepi-animation fade-in-up-animation"
				}, [i("div", {
					staticClass: "button_base b05_3d_roll",
					on: {
						click: function(e) {
							return t.spacepiTo(
								"https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC"
							)
						}
					}
				}, [i("div", [t._v(" → ")]), i("div", [t._v(" → ")])])]), i("v-container", {
					staticClass: "info-container"
				}, [i("div", {
					staticClass: "info-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("span", {
					staticClass: "info-text"
				}, [t._v(
					"for PiNetwork & Elon Musk & PI Network Team")]), i(
					"div", {
						staticClass: "info-title-subject"
					}, [i("div", {
						staticClass: "info-line"
					}), i("div", {
						staticClass: "info-title"
					}, [t._v("PI Network LOCKED")])])]), i("div", {
					staticClass: "info-contract-subject"
				}, t._l(t.info, (function(e, n) {
					return i("div", {
						key: n,
						staticClass: "contract-car wow spacepi-animation fade-in-up-animation"
					}, [i("div", {
						staticClass: "contract-head"
					}, [i("div", {
						staticClass: "contract-head-l"
					}, [i("span", {
						staticClass: "contract-head1"
					}, [t._v(t._s(n +
						1))]), i("div", {
						staticClass: "contract-head2"
					}, [i("v-img", {
						attrs: {
							src: a(
								"151f"
							)
						}
					})], 1), i("div", {
						staticClass: "contract-head3"
					}, [i("v-img", {
						attrs: {
							src: a(
								"f9ed"
							)
						}
					})], 1), i("span", {
						staticClass: "contract-head4"
					}, [t._v(t._s(e
						.address
					))])]), i("div", {
						staticClass: "contract-head-r"
					}, [i("span", {
						staticClass: "contract-head5"
					}, [t._v(t._s(e
						.percentage
					))])])]), i("div", {
						staticClass: "contract-content"
					}, [i("span", {
						staticClass: "contract1"
					}, [t._v("LOCKED DETAILS")]), i(
						"span", {
							staticClass: "contract2"
						}, [t._v("No1: " + t._s(e
								.spacePi) +
							" SpacePi")]), i(
						"div", {
							staticClass: "contract3"
						}, [i("span", {
							staticClass: "contract-y"
						}, [t._v("Start"),
							i("span", {
								staticClass: "contract-span-w"
							}, [t._v(
								"/"
							)]), t
							._v("Update")
						]), i("div", {
							staticClass: "contract-time"
						}, [i("div", [t._v(
								"Time: "
							),
							i("span", {
								staticClass: "contract-span"
							}, [t
								._v(t
									._s(e
										.startTime
									)
								)
							]), t
							._v(
								" (UTC-8)"
							)
						]), i("div", [t
							._v(
								" End Time: "
							),
							i("span", {
								staticClass: "contract-span"
							}, [t
								._v(t
									._s(e
										.endTime
									)
								)
							]), t
							._v(
								" (UTC-8)"
							)
						])])]), i("div", {
						staticClass: "contract4"
					}, [i("div", {
						staticClass: "contract-bnt",
						on: {
							click: function(
								a) {
								return t
									.spacepiTo(
										e
										.url
									)
							}
						}
					}, [i("div", {
						staticClass: "contract-img"
					}, [i("v-img", {
						staticClass: "icon",
						attrs: {
							src: a(
								"5724"
							)
						}
					}), i(
						"v-img", {
							staticClass: "icon-h",
							attrs: {
								src: a(
									"3757"
								)
							}
						})], 1)])])])])
				})), 0)]), i("foot")], 1)])
			},
			Ht = [],
			Yt = {
				data: function() {
					return {
						lockTime: "",
						info: [{
							address: "0x06...28b7",
							spacePi: "150000000000000.00",
							startTime: "2022-03-18 06:49:22",
							endTime: "2023-06-27 03:14:00",
							percentage: "7.50%",
							url: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x0a6231128a5140dba469553ae34a92e830974b90&type=tokenlock&chain=BSC"
						}, {
							address: "0x43...36df",
							spacePi: "150000000000000.00",
							startTime: "2022-03-18 06:53:49",
							endTime: "2023-06-27 03:14:00",
							percentage: "7.50%",
							url: "https://dxsale.app/app/v3_3/dxlockview?id=1&add=0x0a6231128a5140dba469553ae34a92e830974b90&type=tokenlock&chain=BSC"
						}, {
							address: "0xcd...b30d",
							spacePi: "20000000000000.00",
							startTime: "2022-04-07 05:40:09",
							endTime: "2023-01-08 03:14:00",
							percentage: "1%",
							url: "https://dxsale.app/app/v3_3/dxlockview?id=4&add=0x0a6231128a5140dba469553ae34a92e830974b90&type=tokenlock&chain=BSC"
						}, {
							address: "0x33...7c5b",
							spacePi: "20000000000000.00",
							startTime: "2022-04-07 05:45:30",
							endTime: "2023-04-08 03:14:00",
							percentage: "1%",
							url: "https://dxsale.app/app/v3_3/dxlockview?id=5&add=0x0a6231128a5140dba469553ae34a92e830974b90&type=tokenlock&chain=BSC"
						}, {
							address: "0x2d...540f",
							spacePi: "20000000000000.00",
							startTime: "2022-04-07 05:34:21",
							endTime: "2022-10-08 03:14:00",
							percentage: "1%",
							url: "https://dxsale.app/app/v3_3/dxlockview?id=3&add=0x0a6231128a5140dba469553ae34a92e830974b90&type=tokenlock&chain=BSC"
						}, {
							address: "0x7c...a9b5",
							spacePi: "20000000000000.00",
							startTime: "2022-04-07 05:28:57",
							endTime: "2022-07-08 03:14:00",
							percentage: "1%",
							url: "https://dxsale.app/app/v3_3/dxlockview?id=2&add=0x0a6231128a5140dba469553ae34a92e830974b90&type=tokenlock&chain=BSC"
						}]
					}
				},
				components: {
					foot: St
				},
				computed: {},
				created: function() {
					var t = this;
					setInterval((function() {
						t.lock_count_down()
					}), 1e3)
				},
				methods: {
					lock_count_down: function() {
						var t = new Date,
							e = new Date("2023/03/14"),
							a = e.getTime() - t.getTime(),
							i = Math.floor(a / 864e5),
							n = Math.floor(a / 36e5 % 24),
							s = Math.floor(a / 6e4 % 60),
							r = Math.floor(a / 1e3 % 60);
						this.lockTime = t >= e ? "000:00:00:00" : i + ":" + n + ":" + s + ":" + r
					},
					spacepiTo: function(t) {
						window.open(t)
					}
				}
			},
			Vt = Yt,
			Wt = (a("8e05"), Object(y["a"])(Vt, zt, Ht, !1, null, "20558636", null)),
			Xt = Wt.exports;
		A()(Wt, {
			VContainer: X["a"],
			VImg: N["a"]
		});
		var qt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [i("div", {
					staticClass: "lock-warehouse-subject"
				}, [i("v-container", {
					staticClass: "task-container"
				}, [i("div", [i("div", {
					staticClass: "task-subject wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "task-line"
				}), i("span", {
					staticClass: "task-title"
				}, [t._v("PI Network ARMY DAILY TASKS")])]), i("div", {
					staticClass: "task-vice wow spacepi-animation fade-right-in-left-animation"
				}, [t._v(
					" OK! Here are some PI Network Army missions! Let's take a few seconds to do the simple task! "
				)])]), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card task-card-subject-b1 wow spacepi-animation fade-left-in-right-animation"
				}, [i("div", {
					staticClass: "task-card-title"
				}, [t._v(
					' 1.Click on CMC and tap the Good button! Also search for "SpacePi" on CMC as it keeps us hot! '
				)]), i("div", {
					staticClass: "task-line task-card-subject-b1"
				}), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card-icon"
				}, [i("v-img", {
					attrs: {
						src: a("14d5")
					}
				})], 1)]), i("div", {
					staticClass: "task-line task-card-subject-b1"
				}), i("div", {
					staticClass: "task-url-subject"
				}, [i("div", {
					staticClass: "task-url task-card-subject-b1"
				}, [i("span", [t._v(
					"https://coinmarketcap.com/currencies/spacepi/"
				)])]), i("div", {
					staticClass: "task-bnt task-bnt-b1"
				}, [i("div", {
					staticClass: "task-bnt b03_skewed_slide_in ",
					on: {
						click: function(e) {
							return t
								.spacepiTo(
									"https://coinmarketcap.com/currencies/spacepi/"
								)
						}
					}
				}, [i("div", [t._v(" → ")]), i(
					"div", [t._v(" → ")])])])])]), i("div", {
					staticClass: "task-card task-card-subject-b2 wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "task-card-title"
				}, [t._v(
					" 2. Click on Coingecko and tap the Good button! "
				)]), i("div", {
					staticClass: "task-line task-card-subject-b2"
				}), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card-icon"
				}, [i("v-img", {
					attrs: {
						src: a("71d5")
					}
				})], 1)]), i("div", {
					staticClass: "task-line task-card-subject-b2"
				}), i("div", {
					staticClass: "task-url-subject"
				}, [i("div", {
					staticClass: "task-url task-card-subject-b2"
				}, [i("span", [t._v(
					"https://www.coingecko.com/en/coins/spacepi//"
				)])]), i("div", {
					staticClass: "task-bnt task-bnt-b2"
				}, [i("div", {
					staticClass: "task-bnt b03_skewed_slide_in ",
					on: {
						click: function(e) {
							return t
								.spacepiTo(
									"https://www.coingecko.com/en/coins/spacepi/"
								)
						}
					}
				}, [i("div", [t._v(" → ")]), i(
					"div", [t._v(" → ")])])])])]), i("div", {
					staticClass: "task-card task-card-subject-b3 wow spacepi-animation fade-left-in-right-animation"
				}, [i("div", {
					staticClass: "task-card-title"
				}, [t._v(
					" 3. Click on Crypto and tap the Good button! "
				)]), i("div", {
					staticClass: "task-line task-card-subject-b3"
				}), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card-icon"
				}, [i("v-img", {
					attrs: {
						src: a("5765")
					}
				})], 1)]), i("div", {
					staticClass: "task-line task-card-subject-b3"
				}), i("div", {
					staticClass: "task-url-subject"
				}, [i("div", {
					staticClass: "task-url task-card-subject-b3"
				}, [i("span", [t._v(
					"https://crypto.com/price/spacepi"
				)])]), i("div", {
					staticClass: "task-bnt task-bnt-b3"
				}, [i("div", {
					staticClass: "task-bnt b03_skewed_slide_in",
					on: {
						click: function(e) {
							return t
								.spacepiTo(
									"https://crypto.com/price/spacepi"
								)
						}
					}
				}, [i("div", [t._v(" → ")]), i(
					"div", [t._v(" → ")])])])])]), i("div", {
					staticClass: "task-card task-card-subject-b4 wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "task-card-title"
				}, [t._v(
					" 4. Click on Digitalcoinprice and tap the Good button! "
				)]), i("div", {
					staticClass: "task-line task-card-subject-b4"
				}), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card-icon"
				}, [i("v-img", {
					attrs: {
						src: a("3a08")
					}
				})], 1)]), i("div", {
					staticClass: "task-line task-card-subject-b4"
				}), i("div", {
					staticClass: "task-url-subject"
				}, [i("div", {
					staticClass: "task-url task-card-subject-b4"
				}, [i("span", [t._v(
					"https://digitalcoinprice.com/coins/spacepi/"
				)])]), i("div", {
					staticClass: "task-bnt task-bnt-b4"
				}, [i("div", {
					staticClass: "task-bnt b03_skewed_slide_in",
					on: {
						click: function(e) {
							return t
								.spacepiTo(
									"https://digitalcoinprice.com/coins/spacepi/"
								)
						}
					}
				}, [i("div", [t._v(" → ")]), i(
					"div", [t._v(" → ")])])])])]), i("div", {
					staticClass: "task-card task-card-subject-b5 wow spacepi-animation fade-left-in-right-animation"
				}, [i("div", {
					staticClass: "task-card-title"
				}, [t._v(
					" 5. Click on Dextools and tap on GREEN STAR ️ "
				)]), i("div", {
					staticClass: "task-line task-card-subject-b5"
				}), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card-icon"
				}, [i("v-img", {
					attrs: {
						src: a("f652")
					}
				})], 1)]), i("div", {
					staticClass: "task-line task-card-subject-b5"
				}), i("div", {
					staticClass: "task-url-subject"
				}, [i("div", {
					staticClass: "task-url task-card-subject-b5"
				}, [i("span", [t._v(
					"https://www.dextools.io/app/bsc/pair-explorer/0x7f1b11a798273da438b4b132df1383d8387e73b4"
				)])]), i("div", {
					staticClass: "task-bnt task-bnt-b5"
				}, [i("div", {
					staticClass: "task-bnt b03_skewed_slide_in",
					on: {
						click: function(e) {
							return t
								.spacepiTo(
									"https://www.dextools.io/app/bsc/pair-explorer/0x7f1b11a798273da438b4b132df1383d8387e73b4"
								)
						}
					}
				}, [i("div", [t._v(" → ")]), i(
					"div", [t._v(" → ")])])])])]), i("div", {
					staticClass: "task-card task-card-subject-b6 wow spacepi-animation fade-right-in-left-animation"
				}, [i("div", {
					staticClass: "task-card-title"
				}, [t._v(
					" 6. Click on Certik and tap on Secure button! ️ "
				)]), i("div", {
					staticClass: "task-line task-card-subject-b6"
				}), i("div", {
					staticClass: "task-card-subject"
				}, [i("div", {
					staticClass: "task-card-icon"
				}, [i("v-img", {
					attrs: {
						src: a("3c2b")
					}
				})], 1)]), i("div", {
					staticClass: "task-line task-card-subject-b6"
				}), i("div", {
					staticClass: "task-url-subject"
				}, [i("div", {
					staticClass: "task-url task-card-subject-b6"
				}, [i("span", [t._v(
					"https://www.certik.com/projects/spacepi"
				)])]), i("div", {
					staticClass: "task-bnt task-bnt-b6"
				}, [i("div", {
					staticClass: "task-bnt b03_skewed_slide_in",
					on: {
						click: function(e) {
							return t
								.spacepiTo(
									"https://www.certik.com/projects/spacepi"
								)
						}
					}
				}, [i("div", [t._v(" → ")]), i(
					"div", [t._v(" → ")])])])])])])]), i("foot")], 1)])
			},
			Zt = [],
			$t = {
				data: function() {
					return {}
				},
				components: {
					foot: St
				},
				computed: {},
				created: function() {},
				methods: {
					spacepiTo: function(t) {
						window.open(t)
					}
				}
			},
			te = $t,
			ee = (a("4e79"), Object(y["a"])(te, qt, Zt, !1, null, "a707185c", null)),
			ae = ee.exports;
		A()(ee, {
			VContainer: X["a"],
			VImg: N["a"]
		});
		var ie = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "nft"
				}, [a("div", {
					staticClass: "nft-container"
				}, [a("nftCarousel"), t._l(t.getNftTypeData, (function(e, i) {
					return a("div", {
						key: i,
						staticClass: "nft-subject wow spacepi-animation fade-in-up-animation"
					}, [a("div", {
						staticClass: "nft-title-subject"
					}, [a("div", {
						staticClass: "nft-title"
					}, [a("div", {
							staticClass: "nft-line"
						}), "zh_CN" == t.locale ||
						"zh_TW" == t.locale ? a("span", [t
							._v(" " + t._s(e
								.zh_CN_title) + " ")
						]) : a("span", [t._v(" " + t._s(e
							.en_US_title) + " ")])
					]), a("v-btn", {
						staticClass: "nft-more",
						on: {
							click: function(a) {
								return t.spacepiTo(e
									.url)
							}
						}
					}, ["zh_CN" == t.locale || "zh_TW" == t
						.locale ? a("span", [t._v(" " + t
							._s(e.zh_CN_bnt) + " ")]) : a(
							"span", [t._v(" " + t._s(e
								.en_US_bnt) + " ")])
					])], 1), a("div", {
						staticClass: "nft-text"
					}, ["zh_CN" == t.locale || "zh_TW" == t.locale ?
						a("span", [t._v(" " + t._s(e.zh_CN_text) +
							" ")]) : a("span", [t._v(" " + t._s(e
							.en_US_text) + " ")])
					]), a("div", {
						staticClass: "nft-img-container"
					}, t._l(t.getNftListData, (function(i, n) {
						return i.t_id == e.id ? a("div", {
							key: n,
							staticClass: "nft-img",
							on: {
								click: function(e) {
									return t
										.spacepiTo(
											i
											.url
										)
								}
							}
						}, [a("v-img", {
							staticClass: "img",
							attrs: {
								src: i
									.picture
							}
						})], 1) : t._e()
					})), 0)])
				}))], 2)])
			},
			ne = [],
			se = {
				data: function() {
					return {
						getNftTypeData: [],
						getNftListData: []
					}
				},
				components: {
					nftCarousel: Nt
				},
				computed: Object(r["a"])({}, Object(o["c"])(["domainUrl", "locale"])),
				created: function() {},
				mounted: function() {
					this.getData()
				},
				methods: {
					spacepiTo: function(t) {
						window.open(t)
					},
					getData: function() {
						this.getNftType(), this.getNftList()
					},
					getNftType: function() {
						var t = this;
						p.a.post(this.domainUrl + "getNftType").then((function(e) {
							t.getNftTypeData = e.data.data
						})).catch((function(t) {}))
					},
					getNftList: function() {
						var t = this;
						p.a.post(this.domainUrl + "getNftList").then((function(e) {
							t.getNftListData = e.data.data
						})).catch((function(t) {}))
					}
				}
			},
			re = se,
			oe = (a("bca3"), Object(y["a"])(re, ie, ne, !1, null, "5d727924", null)),
			ce = oe.exports;
		A()(oe, {
			VBtn: E["a"],
			VImg: N["a"]
		}), i["a"].use(L["a"]);
		var pe = L["a"].prototype.push;
		L["a"].prototype.push = function(t) {
			return pe.call(this, t).catch((function(t) {
				return t
			}))
		};
		var le = [{
				path: "/",
				name: "主页",
				component: Rt
			}, {
				path: "/partners",
				name: "友情合作商",
				component: Jt
			}, {
				path: "/lock",
				name: "锁仓",
				component: Xt
			}, {
				path: "/task",
				name: "任务",
				component: ae
			}, {
				path: "/nft",
				name: "NFT",
				component: ce
			}],
			ue = new L["a"]({
				base: "",
				routes: le,
				scrollBehavior: function(t, e, a) {
					return a || {
						x: 0,
						y: 0
					}
				}
			}),
			de = ue,
			me = a("c964"),
			ye = (a("96cf"), a("99af"), a("a9e3"), a("fb6a"), a("e9c4"), a("d3b7"), a("25f0"), a("b6802"), a(
				"1276"), a("d81d"), a("a15b"), a("99e5")),
			ge = new ye(window.ethereum),
			Ae = (ge.eth.getAccounts(), {
				PerSaleAbi: a("e719"),
				spacePiAbi: a("5056"),
				DogiAbi: a("02ef"),
				InviteAbi: a("c972"),
				StakePoolAbi: a("bd77")
			});

		function ke(t) {
			var e = t.abi,
				a = t.address,
				i = new ge.eth.Contract(e, a);
			return {
				contractObject: i,
				address: a
			}
		}
		i["a"].use(o["a"]);
		var ve = ke(Ae.PerSaleAbi),
			he = ve.contractObject,
			be = ke(Ae.spacePiAbi),
			fe = be.contractObject,
			xe = new o["a"].Store({
				state: {
					address: sessionStorage.getItem("accountAddress") || "",
					locale: sessionStorage.getItem("locale") || "en_US",
					isLangAlive: !0,
					isInvited: JSON.parse(sessionStorage.getItem("isInvited")) || "",
					isInvitedPledge: JSON.parse(sessionStorage.getItem("isInvitedPledge")) || "",
					isRoueInvited: "",
					tokenDecimals: 0,
					storeSwapRatio: 0,
					balanceof: 0,
					initalAddress: "",
					storeMyTotalspacepi: 0,
					storeInviteRewards: 0,
					storeInviteList: [],
					storeInvitePledgeLink: [],
					storeInviteLink: [],
					deadline: 165355448e4,
					inviteeAddress: "0x456463b185a447552b31516c2cb729b9c90D531B",
					domainUrl: "https://resource.space-pi.com/api/",
					alert: {
						status: !1,
						text: "",
						type: ""
					}
				},
				mutations: {
					setAlert: function(t, e) {
						t.alert = {
							status: e.status,
							text: e.text,
							type: e.type
						}
					},
					editAddress: function(t, e) {
						t.address = e, sessionStorage.setItem("accountAddress", e)
					},
					setLocale: function(t, e) {
						t.locale = e, sessionStorage.setItem("locale", e)
					},
					updateIsLangAlive: function(t, e) {
						t.isLangAlive = e
					},
					updateIsInvited: function(t, e) {
						t.isInvited = e
					},
					updateIsInvitedPledge: function(t, e) {
						t.isInvitedPledge = e
					},
					updateIsRoueInvited: function(t, e) {
						t.isRoueInvited = e
					},
					updateDecimal: function(t, e) {
						t.tokenDecimals = e
					},
					updateStoreSwapRatio: function(t, e) {
						t.storeSwapRatio = e
					},
					updateBalanceof: function(t, e) {
						t.balanceof = e
					},
					updateMyspacepi: function(t, e) {
						t.storeMyTotalspacepi = e
					},
					updateEndTimenew: function(t, e) {
						t.deadline = e
					},
					updateInviteList: function(t, e) {
						t.storeInviteList = e
					},
					updateInviteRewards: function(t, e) {
						t.storeInviteRewards = e
					},
					updateInvitationLink: function(t, e) {
						var a = window.location.host,
							i = "https://".concat(a, "/#/presale?address=").concat(e, "&isInvited=")
							.concat(e ? Number(t.isInvited[1]) : "NaN"),
							n = i.slice(0, 15) + " .... " + i.slice(68);
						t.storeInviteLink = [i, n]
					},
					updateInvitationPledgeLink: function(t, e) {
						var a = window.location.host,
							i = "https://".concat(a, "/#/presale?address=").concat(e, "&isInvited=")
							.concat(Number(t.isInvitedPledge["isInvited"])),
							n = i.slice(0, 15) + " .... " + i.slice(68);
						t.storeInvitePledgeLink = [i, n]
					},
					updateInitalAddress: function(t, e) {
						t.initalAddress = e
					}
				},
				actions: {
					getInviteInfo: function(t, e) {
						return Object(me["a"])(regeneratorRuntime.mark((function a() {
							var i, n, s, r;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return i = t.commit, a.next = 3,
											InviteObj.methods
											.getInviteInfo(e).call();
									case 3:
										n = a.sent, s = n.isInvited, r =
											n.inviter, i(
												"updateIsInvitedPledge", {
													inviter: r,
													isInvited: s
												}), sessionStorage
											.setItem("isInvitedPledge",
												JSON.stringify({
													inviter: r,
													isInvited: s
												}));
									case 7:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getInvited: function(t, e) {
						return Object(me["a"])(regeneratorRuntime.mark((function a() {
							var i, n;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return i = t.commit, a.next = 3,
											he.methods.isInvited(e)
											.call();
									case 3:
										n = a.sent, i("updateIsInvited",
												n), sessionStorage
											.setItem("isInvited", JSON
												.stringify(n));
									case 6:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					getdecimal: function(t) {
						return Object(me["a"])(regeneratorRuntime.mark((function e() {
							var a, i, n, s;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return a = t.commit, i = t
											.dispatch, e.next = 3, fe
											.methods.decimals().call();
									case 3:
										return n = e.sent, a(
												"updateDecimal", n), i(
												"getPerHTPrice", n), e
											.next = 8, he.methods
											.endTime().call();
									case 8:
										s = e.sent, a(
											"updateEndTimenew",
											1e3 * s);
									case 10:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					getPerHTPrice: function(t, e) {
						var a = this;
						return Object(me["a"])(regeneratorRuntime.mark((function i() {
							var n, s, r;
							return regeneratorRuntime.wrap((function(i) {
								while (1) switch (i.prev = i.next) {
									case 0:
										return n = t.commit, i.next = 3,
											he.methods.perHTPrice()
											.call();
									case 3:
										s = i.sent, r = s / Math.pow(10,
											e), a.swapRatio = r, n(
											"updateStoreSwapRatio",
											r);
									case 7:
									case "end":
										return i.stop()
								}
							}), i)
						})))()
					},
					getBalance: function(t, e) {
						return Object(me["a"])(regeneratorRuntime.mark((function a() {
							var i, n;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return i = t.commit, a.next = 3,
											ge.eth.getBalance(e);
									case 3:
										n = a.sent, i("updateBalanceof",
											ge.utils.fromWei(n));
									case 5:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					myInvites: function(t, e) {
						return Object(me["a"])(regeneratorRuntime.mark((function a() {
							var i, n, s, r, o, c, p;
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										return i = t.commit, n = t
											.state, a.next = 3, he
											.methods
											.perInviteAirdropAmount()
											.call();
									case 3:
										return s = a.sent, r = s / Math
											.pow(10, n.tokenDecimals), a
											.next = 7, he.methods
											.getInvitee(e).call();
									case 7:
										o = a.sent, i(
												"updateInviteList", o),
											c = (o.length + 1) * r, i(
												"updateMyspacepi", c),
											p = c - r, i(
												"updateInviteRewards", p
											);
									case 13:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					}
				},
				modules: {}
			}),
			Ce = a("901e"),
			Se = a.n(Ce),
			Pe = a("8c2c"),
			_e = a("4eb5"),
			we = a.n(_e),
			Be = a("a925");
		i["a"].use(Be["a"]);
		var Ee = new Be["a"]({
				locale: sessionStorage.getItem("locale") || "en_US",
				silentTranslationWarn: !0,
				messages: {
					en_US: a("a638").default,
					tr_TR: a("7b38").default,
					ko_KR: a("f774").default,
					ja_JP: a("d935").default,
					in: a("f1a7").default,
					th: a("ca8a").default,
					ar: a("77bf").default,
					zh_TW: a("2a16").default,
					zh_CN: a("4251").default
				}
			}),
			Te = Ee,
			Ie = (a("778e"), a("434a"), a("b0c3"), a("f997"), a("0be7"), a("f309"));
		i["a"].use(Ie["a"]);
		var De = new Ie["a"]({}),
			Ne = a("c4c2"),
			Me = a.n(Ne);
		localStorage.clear(), i["a"].component("lottie", Pe["a"]), i["a"].use(we.a), i["a"].prototype
			.$BigNumber = Se.a, i["a"].config.productionTip = !1, window.plus && plus.navigator
			.setStatusBarBackground("#0344fb"), new i["a"]({
				audio: Me.a,
				router: de,
				store: xe,
				i18n: Te,
				vuetify: De,
				render: function(t) {
					return t(U)
				}
			}).$mount("#app")
	},
	5724: function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	5765: function(t, e, a) {
		t.exports = a.p + "img/cry.1e3a77e1.png"
	},
	5873: function(t, e, a) {},
	5878: function(t, e, a) {
		"use strict";
		a("b1ad")
	},
	"58b8": function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	"5b7a": function(t, e, a) {},
	6: function(t, e) {},
	6733: function(t, e, a) {
		"use strict";
		a("890f")
	},
	6874: function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA0CAYAAAApDX79AAAABHNCSVQICAgIfAhkiAAAANtJREFUaEPt2sERgjAQBVDTg03YfzE2YQ8CBWCc+QnGncc9C/m83QOhvffr5jpNoAnosw4BdbpHQALKBixBBBGUJdATNLV6geKtwB6mbkFAWiwDRhBBBGUJEJTlZwYRRFCWAEFZfmbQ1YL2b9z37J2ttXq4oGqHAAL6QYuVOmcjiKBs6BNE0HqCXtkjrbV6eIuttb38aQR09QzK39laFQgiKBNJEEEEZQkQlOVnBhFEUJYAQVl+x1+uj6xE7dV+A+61WLVjmtGeCSIoM0UQQQRlCXwh6Dn1Dn9efAMH4WXRbrJO5wAAAABJRU5ErkJggg=="
	},
	7: function(t, e) {},
	"70a7": function(t, e, a) {
		t.exports = a.p + "media/bg.aa45d28f.mp3"
	},
	"71d5": function(t, e, a) {
		t.exports = a.p + "img/coin.f191f0cf.png"
	},
	"723f": function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	"726e": function(t, e, a) {
		t.exports = a.p + "img/aircraft.e8aee7ac.png"
	},
	"778e": function(t, e, a) {},
	"77bf": function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "الصفحة الأمامية",
			url_buy_twitter: "تويتر",
			url_buy_telegram: "برقية",
			index_SpacePi_Bscscan_t: "PI Network Bscscan",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "تلغراف",
			telegraph_more: "المزيد من البرقيات",
			spacepiwep: {
				title: "SPISWAP",
				o: "صعد على متنها",
				bnt: "تقرير التدقيق",
				text: "بناءً على وجهة النظر هذه ، أصبحت PI Network أداة استثمار لشراء الأصول أو الخدمات الافتراضية في نظامها البيئي ، وسوف تنفجر بحيوية جديدة وقيمة غير مسبوقة مع تطبيق SpacePi. فيما يلي بعض النقاط الرئيسية في نظام PI Network البيئي.",
				trend_bnt_title: "اتجاه SpacePi",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "سيكون PI Network دائمًا معجبًا مخلصًا لشبكة PI! كل ما تفعله PI Network الآن هو إثبات أن استمرار وجود مراوح PI يستحق كل هذا العناء!",
			selectLang: "اختر اللغة",
			happy_gd: "شركاء أكثر ودية",
			happy_text: "من أجل جعل PI Network تحقق ابتكارات أكبر ، قررنا ترقية العقد إلى الآلية الأكثر أمانًا ، واعتماد نفس مستوى SHIBA Token. كن مطمئنًا ، أصولك آمنة ، وقد تم إصدار الرموز المميزة لمحفظتك. الرجاء إضافة عقد ترقية. سوف يتخلى العقد الذي تمت ترقيته عن جميع الأذونات ويغلق. عنوان العقد:",
			happy_text1: "سيكون PI Network دائمًا معجبًا إيمانيًا بشبكة Pi Network!",
			happy_text2: "كل ما يفعله PI Network الآن هو إثبات أن استمرار Pi Fans يستحق كل هذا العناء!",
			doge: "ما هو PI Network？",
			only: "مزود الخدمة الشامل الوحيد في العالم من نوع رمز مميز لبروتوكول متعدد عبر سلسلة",
			introduce: "سيكون PI Network هو الوحيد في مجال blockchain الذي يكسر الحواجز التقنية ويدمج العديد من الرموز المميزة للبروتوكول عبر السلاسل لأنواع مزودي الخدمة المتكاملة. المستقبل ينتمي إلى جميع مشغلات الأصول الرقمية في blockchain. دعونا نعمل معا لنشهد هذه اللحظة العظيمة!",
			text: ["ستنشئ PI Network نظامًا بيئيًا رقميًا عالي المستوى غير مسبوق ، مما يوفر تجربة غمر رقمية بسيطة وفعالة كجوهر. يمنح قيمة تداول الرمز المميز ، ويسمح لمزيد من الأشخاص بالمشاركة في البناء البيئي لـ PI Network ، ويخلق عالمًا ترفيهيًا بلا حدود ، ويربط المستخدمين في كل ركن من أركان العالم ، ويؤسس بيئة metaverse غير مركزية وغير موثوقة للغاية للمستخدمين العالميين.",
				"يتضمن PI Network فئتين رئيسيتين من blockchain ، NFT و Metaverse. تقوم PI Network ببناء منصة ألعاب واقع افتراضي لامركزية على الإنترنت تدمج الشخصيات والدعائم وقصص الحياة في تفاعلات اجتماعية افتراضية. يمكن للاعبين اللعب في العالم الافتراضي. لشراء الأسلحة والدروع والدعائم والأحجار الكريمة. شارك في مجموعات مختلفة لتطوير الألعاب الافتراضية والحياتية والحركية والألعاب الأخرى.",
				"سيتم تقديم جميع مزايا PI Network في شكل الرمز المميز SpacePi. إن الواقع الافتراضي والواقع لـ PI Network metaverse مترابطان للغاية ، وأصبح اقتصاد الحلقة المغلقة المرتبط بالمنصة مفتوحة المصدر الشكل النهائي للإنترنت."
			],
			tetxbu: "ورق ابيض",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["شراء SpacePi"],
			index_Liquidity_title: "السيولة مقفلة",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "تدقيق Goplus",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "سعر SpacePi",
			index_SpacePi: [{
				title: "Dextools اتجاه"
			}, {
				title: "Poocoin اتجاه"
			}, {
				title: "Avedex اتجاه"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "ما هو SpacePi؟",
				content: "ستنشئ PI Network نظامًا بيئيًا رقميًا عالي المستوى غير مسبوق ، مما يوفر تجربة غمر رقمية بسيطة وفعالة كجوهر."
			}, {
				title: "عالم SpacePi",
				content: "يمنح قيمة تداول الرمز المميز ، ويسمح لمزيد من الأشخاص بالمشاركة في البناء البيئي لـ PI Network ، ويخلق عالمًا ترفيهيًا بلا حدود ، ويربط المستخدمين في كل ركن من أركان العالم ، ويؤسس بيئة metaverse غير مركزية وغير موثوقة للغاية للمستخدمين العالميين."
			}],
			station: {
				enter: "نظام بيئي قوي SpacePi",
				title: "في الواقع نحن نبني عالمًا رقميًا لم يسبق له مثيل.",
				text: ["أصبح الاقتصاد الرقمي نوعًا من الأصول المشروعة جديرًا بدراسة المستثمرين ، وقد انفجر بشكل كبير على المدى القصير.",
					"بناءً على وجهة النظر هذه ، أصبحت PI Network أداة استثمار لشراء الأصول أو الخدمات الافتراضية في نظامها البيئي ، وسوف تنفجر بحيوية جديدة وقيمة غير مسبوقة مع تطبيق SpacePi. فيما يلي بعض النقاط الرئيسية في نظام PI Network البيئي."
				],
				c: [{
					title: "رمز SpacePi",
					text: "نوع جديد من الرموز المميزة للمرافق مدعوم من عدة سلاسل عامة ، يعمل كأساس في نظام PI Network البيئي ، ويخدم تطبيقات متنوعة ، مع سيناريوهات تطبيق قوية"
				}, {
					title: "مقدمة إلى SpacePi",
					text: "يعتمد نظام PI Network البيئي على WEB3.0 الثلاثية الأبعاد للإنترنت NFT والمكونات التقنية الأخرى ، وأصبح أقوى داعم تقني لمستخدمي الفضاء في الفضاء الافتراضي لـ Metaverse."
				}, {
					title: "PI Network NFTs",
					text: "يمكن أن تصبح الأصول الرقمية غير المتجانسة والقابلة للتحويل ذات الخصائص الفريدة مجموعة فنية أو دعامة لعبة في نظام PI Network البيئي."
				}, {
					title: "PI Network DAO",
					text: "سيتم استخدام رمز PI Network للتصويت في DAO في نظام PI Network البيئي لضمان أن المشروع مستدام ذاتيًا ولا يحتوي على وحدة تحكم."
				}, {
					title: "PI Network ميتافيرس",
					text: "مساحة افتراضية ثلاثية الأبعاد Metaverse ثلاثية الأبعاد في نظام PI Network البيئي"
				}, {
					title: "سوق NFT",
					text: "يتيح سوق PI Network للمشاركين إدارة وتداول PI Network NFTs ، والتي يتم تسعيرها في PI Network كعملة التداول"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "metauniverse",
				title: "لعبة SpacePi",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "إيلون ماسك",
				title: "رائد فضاء",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			hoce_token: "0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3",
			tron_token: "TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}, {
				title: "PI Network (heco)",
				url: "https://ht.mdex.co/#/swap?inputCurrency=HT&outputCurrency=0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3"
			}, {
				title: "PI Network (tron)",
				url: "https://sunswap.com/#/home?tokenAddress=TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX&type=swap"
			}],
			ROADMAP: "خريطة الطريق",
			ROADMAPtext: "هذه هي الخطة التي جعلت نظام PI Network البيئي منذ الولادة وحتى العظمة.",
			Phase1: "المرحلة الأولى",
			Phase2: "المرحلة الثانية",
			r_title1: "واحد",
			r_title2: "اثنين",
			rt1_text1: "إطلاق الموقع الرسمي ونشر العقود الذكية",
			rt1_text2: "ابدأ عمليات وسائل التواصل الاجتماعي مثل Telegram و Twitter",
			rt1_text3: "افتح الجولة الأولى من عمليات الإنزال الجوي لأفراد المجتمع",
			rt1_text4: "3000 عضو برقية",
			rt1_text5: "فتح أرباح السيولة",
			rt1_text6: "مدرج في CoinMarketCap",
			rt1_text7: "مدرج في CoinGecko",
			rt1_text8: "تدقيق وكالة الطرف الثالث",
			rt1_text9: "بدء التسويق الشامل",
			rt1_text10: "الجولة الثانية من عمليات الإنزال الجوي للمجتمع",
			rt2_text1: "التعاون مع محافظ الطرف الثالث",
			rt2_text2: "",
			rt2_text3: "200 ألف + أعضاء Telegram",
			rt2_text4: "1000K + حاملي التوكن",
			rt2_text5: "ابدأ في تطوير Pi NetworkSwap",
			rt2_text6: "ابدأ في تطوير Pi NetworkNFT",
			rt2_text7: "ابدأ PiDAO",
			rt2_text8: "إطلاق بروتوكول معاملات التجميع عبر السلاسل Pi NetworkSwap",
			rt2_text9: "قم بإدراج أفضل CEXs في السوق",
			Tokenomics: {
				text: "المجتمع دائما يأتي أولا",
				title: "بيئة رمزية عادلة",
				content: "من أجل بناء شركة النقل الديمقراطي الخاصة بنا خارج الأرض ، يعتمد PI Network على إصدار بيئي رمزي عادل ، بدون رمز خاص ، ولا ضريبة تطوير.",
				array: [{
					title: "لا أحد",
					text: "ضريبة التنمية"
				}, {
					title: "لا أحد",
					text: "رمز حرق"
				}, {
					title: "120k+",
					text: "مالك"
				}]
			},
			answers: {
				text: "PI Network هو الرمز المميز الوحيد لبروتوكول متعدد السلاسل من نوع مزود الخدمة في العالم",
				array: [{
					title: "1. ما هو metaverse الذي وصفه SpacePi؟",
					text: "الألعاب هي الشكل الأساسي للميتافيرس. من نموذج المنتج ، اللعبة هي النموذج الأولي للميتافيرس. نظرًا لكونه عالمًا افتراضيًا تم إنشاؤه بواسطة الأشخاص استنادًا إلى المحاكاة والامتداد والخيال الخيالي للواقع ، فإن الألعاب تشبه في شكل منتج إلى Metaverse. إذا كنت معتادًا على الكتاب أو فيلم Ready Player One ، فهذا مثال رائع على metaverse."
				}, {
					title: "2.هل ميتافيرس مسألة؟",
					text: "استنادًا إلى تكامل Web3.0 وتكنولوجيا الإنترنت الثلاثية الأبعاد و blockchain و NFT ، تتوافق القيم التي يقدمها مفهوم Metaverse مع القيم الأساسية للإنترنت. يعتقد PI Network أن metaverse قد يكون الشكل النهائي للإنترنت. لذلك ، اتخذنا اللعبة كنقطة انطلاق وأنشأنا PI Network ، وهي لعبة blockchain افتراضية تعتمد على NFT + metaverse ، مما يجعل الارتباط بين الواقع والافتراضية أكثر كفاءة ويثري تداول القيمة. أصبحت أهمية هذه المنصات الرقمية واضحة خلال الوباء العالمي الأخير."
				}, {
					title: "3. ما هو نظام PI Network البيئي؟",
					text: "باعتبارها لعبة blockchain مدعومة بمفهوم NFT + Metaverse ، تتضمن PI Network عدة أقسام أساسية من حيث البناء البيئي للمنصة. NFT نظام اللعبة Metaverse لعبة البيئة PI Network Exchange"
				}, {
					title: "4- ماذا يمكننا أن نفعل في PI Network metaverse؟",
					text: "يجمع PI Network Token ، المشار إليه باسم PI Network ، بين فئتي blockchain الرئيسيتين لـ NFT و Metaverse ، بهدف إنشاء منصة ألعاب واقع افتراضي لامركزية عبر الإنترنت تدمج الشخصيات والدعائم وقصص الحياة في تفاعل اجتماعي افتراضي. يمكن شراء الأسلحة والدروع والدعائم والأحجار الكريمة في العالم الافتراضي. شارك في مجموعات مختلفة لتطوير الألعاب الافتراضية والحياتية والحركية والألعاب الأخرى. على هذا النحو ، فإن PI Network هو المشروع الأول والوحيد عبر مجالات metaverse و NFT"
				}, {
					title: "5. كيف تربح المال في PI Network Metaverse؟",
					text: "يمكن لـ PI Network أيضًا دعم مطوري الطرف الثالث في برمجة تطبيقات الألعاب اللامركزية وتصحيحها وإصدارها وتطبيقات ألعاب الهندسة الهجينة لبيئة blockchain. في الوقت نفسه ، تدمج PI Network نظام حساب المستخدم الموزع المستند إلى blockchain ، وتداول الأصول الرقمية NFT والمحفظة ، والتي يمكن أن تحقق التخزين الدائم خارج السلسلة والاستخدام المتقاطع لأصول اللعبة داخل التطبيق NFT."
				}, {
					title: "6. مطور SpacePi؟",
					text: "تم تطوير PI Network Metaverse بالاشتراك مع مطورين مستقلين حول العالم ، مع خبرة لا مثيل لها تقريبًا وقدرة على توجيه وإدارة وتعزيز المشاريع المتعلقة بالعملات المشفرة. معًا ، يشكلون فريقًا قويًا مع مجموعة من المؤيدين المتشابهين في التفكير الذين لديهم ثقة وشغف لرؤية PI Network metaverse ، وهي مغامرة جديدة في عالم metaverse."
				}, {
					title: "7- كيف يمكنني تقديم المزيد من المساعدة؟",
					text: "بسبب اللامركزية الكاملة ، سيتطلب PI Network metaverse مجتمعًا أكبر بكثير للوصول إلى أهدافنا ، فنحن نرحب بك للانضمام إلى PI Network"
				}]
			},
			Community: {
				title: "انضم إلى مجتمع PI Network العالمي",
				text: "سيكون PI Network هو الوحيد في مجال blockchain الذي يكسر الحواجز التقنية ويدمج العديد من الرموز المميزة للبروتوكول عبر السلاسل لأنواع مزودي الخدمة المتكاملة. المستقبل ينتمي إلى جميع مشغلات الأصول الرقمية في blockchain. دعونا نعمل معا لنشهد هذه اللحظة العظيمة!",
				buttext: "انضم إلينا",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			footer1: "إذا كان لديك أي سؤال ، يرجى الاتصال بنا",
			footer2: "حقوق النشر © 2021-2022 SpacePi. كل الحقوق محفوظة",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "نسخ النجاح",
			partners_title1: "PI Network ستظل دائمًا",
			partners_title2: "كن من المعجبين بشبكة PI!",
			partners_text: "كل ما يفعله PI Network الآن هو إثبات أن استمرار Pi Fans يستحق كل هذا العناء! نرحب بالمزيد من المنصات والمؤسسات للتعاون مع PI Network ، البريد الإلكتروني الرسمي للاتصال: pi@space-pi.com",
			partners_email_title: "البريد الإلكتروني للاتصال الرسمي:",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	"78a3": function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	"7b38": function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "ön Sayfa",
			url_buy_twitter: "heyecan",
			index_SpacePi_Bscscan_t: "PI Network Tarayıcı",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "TELEGRAM",
			telegraph_more: "Daha Fazla Telgraf",
			spacepiwep: {
				title: "SPISWAP",
				o: "Gemide",
				bnt: "TEFTİŞ RAPORU",
				text: "Bu bakış açısına dayanarak, ekosisteminde sanal varlık veya hizmet satın almak için bir yatırım aracı haline gelen SpacePi, PI Network uygulamasıyla yeni bir canlılık ve eşi görülmemiş bir değerle patlayacak. İşte PI Network ekosisteminin bazı önemli noktaları.",
				trend_bnt_title: "Uzay Pi Trendi",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "PI Network HER ZAMAN PI NETWORK'ÜN İNANÇ HAYRANI OLACAKTIR! PI Network'NİN ŞİMDİ YAPTIĞI HER ŞEY, PI HAYRANLARININ DİRENİŞİNİN buna DEĞER OLDUĞUNU KANITLAMAK İÇİNDİR!",
			selectLang: "Bir dil seçin",
			happy_gd: "Daha Dost Ortaklar",
			happy_text: "SpacePi'nin daha büyük yeniliklere imza atması için SHIBA Token ile aynı seviyeyi benimseyerek sözleşmeyi en güvenli mekanizmaya yükseltmeye karar verdik.Yükselen sözleşme tüm izinlerden vazgeçecek ve kilitlenecektir.Sözleşme adresi:",
			happy_text1: "PI Network her zaman Pi Network'ün inançlı bir hayranı olacak!",
			happy_text2: "SpacePi'nin şimdi yaptığı her şey, Pi Hayranlarının ısrarının buna değdiğini kanıtlamak!",
			doge: "PI Network nedir?",
			only: "Dünyanın tek kapsamlı hizmet sağlayıcı türü çoklu zincirler arası protokol belirteci",
			introduce: "SpacePi, blockchain alanında teknik engelleri aşan ve kapsamlı hizmet sağlayıcı türlerinin çoklu zincirler arası protokol sertifikalarını entegre eden tek kişi olacak.Gelecek tüm blockchain dijital varlık oyuncularına ait.Bu harika ana tanık olmak için birlikte çalışalım!",
			text: ["SpacePi, çekirdek olarak basit ve verimli bir metaverse dijital daldırma deneyimi sağlayan benzeri görülmemiş bir üst düzey dijital ekosistem yaratacaktır. Token dolaşımının değerini bahşedin, daha fazla insanın SpacePi'nin ekolojik yapısına katılmasına izin verin, sınırsız bir eğlence dünyası yaratın, dünyanın her köşesindeki kullanıcıları birbirine bağlayın ve küresel kullanıcılar için güvenilir ve oldukça merkezi olmayan bir metaverse ekolojisi kurun.",
				"SpacePi, NFT ve Metaverse'in iki ana blok zinciri kategorisini içerir.SpacePi, karakterleri, sahne donanımlarını ve yaşam hikayelerini sanal sosyal etkileşime entegre eden merkezi olmayan bir çevrimiçi sanal gerçeklik oyun platformu inşa ediyor.Oyuncular sanal dünyada oynayabilir.Silah, zırh, sahne satın almak için ve mücevherler. Sanal, yaşam, aksiyon ve diğer oyunları geliştirmek için farklı koleksiyonlara katılın.",
				"SpacePi'nin tüm faydaları, yerel simge PI Network biçiminde sunulacaktır. PI Network meta veri tabanının sanal ve gerçekliği birbirine son derece bağlıdır ve açık kaynak platformuna bağlı kapalı döngü ekonomisi, İnternet'in son biçimi haline gelmiştir."
			],
			tetxbu: "Beyaz kağıdı okuyun",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["PI Network satın al"],
			index_Liquidity_title: "Likidite Kilitli",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus algılama",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "PI Network Price",
			index_SpacePi: [{
				title: "Dextools Akım"
			}, {
				title: "Poocoin Akım"
			}, {
				title: "Avedex Akım"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "PI Network nedir?",
				content: "SpacePi, çekirdek olarak basit ve verimli bir metaverse dijital daldırma deneyimi sağlayan benzeri görülmemiş bir üst düzey dijital ekosistem yaratacaktır."
			}, {
				title: "uzay pastası dünyası",
				content: "Token dolaşımının değerini bahşedin, daha fazla insanın PI Network nin ekolojik yapısına katılmasına izin verin, sınırsız bir eğlence dünyası yaratın, dünyanın her köşesindeki kullanıcıları birbirine bağlayın ve küresel kullanıcılar için güvenilir ve oldukça merkezi olmayan bir metaverse ekolojisi kurun."
			}],
			station: {
				enter: "Güçlü PI Network Ekosistemi",
				title: "Aslında daha önce hiç olmadığı kadar dijital bir dünya inşa ediyoruz.",
				text: ["Dijital ekonomi, kısa vadede katlanarak artan, yatırımcıların dikkatine değer meşru bir varlık türü haline geldi.",
					"Bu bakış açısına dayanarak, ekosisteminde sanal varlık veya hizmet satın almak için bir yatırım aracı haline gelen SpacePi, PI Network uygulamasıyla yeni bir canlılık ve eşi görülmemiş bir değerle patlayacak. İşte PI Network ekosisteminin bazı önemli noktaları."
				],
				c: [{
					title: "Uzay Pi Simgesi",
					text: "Güçlü uygulama senaryoları ile çeşitli uygulamalara hizmet veren, PI Network ekosisteminde bir temel görevi gören, birden fazla genel zincir tarafından desteklenen yeni bir yardımcı program belirteci türü"
				}, {
					title: "PI Network ye Giriş",
					text: "PI Network ekosistemi WEB3.0 holografik İnternet NFT ve diğer teknik bileşenlere dayanmaktadır ve Metaverse in sanal alanında uzay kullanıcıları için en güçlü teknik destekçi haline gelmiştir."
				}, {
					title: "PI Network NFT leri",
					text: "Eşsiz özelliklere sahip homojen olmayan ve aktarılabilir dijital varlıklar, PI Network ekosisteminde bir sanat koleksiyonu veya oyun desteği olabilir."
				}, {
					title: "PI Network DAO",
					text: "PI Network belirteci, projenin kendi kendini idame ettirmesini ve kontrolör içermemesini sağlamak için PI Network ekosistemindeki DAO da oy vermek için kullanılacaktır."
				}, {
					title: "PI Network Metaverse",
					text: "PI Network Ekosisteminde Oyunlaştırılmış 3D Metaverse Sanal Alanı"
				}, {
					title: "NFT pazarı",
					text: "PI Network Marketplace, katılımcıların dolaşımdaki para birimi olarak PI Network de fiyatlandırılan PI Network NFT lerini yönetmelerini ve ticaretini yapmalarını sağlar."
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}],
			Tokenomics: {
				text: "Topluluk her zaman önce gelir",
				title: "Adil belirteç ekolojisi",
				content: "Demokratik taşıyıcımızı dünyanın dışında inşa etmek için SpacePi, adil bir belirteç ekolojisine dayalı olarak piyasaya sürüldü.",
				array: [{
					title: "olmadan",
					text: "kalkınma vergisi"
				}, {
					title: "olmadan",
					text: "jeton yakma"
				}, {
					title: "120k+",
					text: "Kulp"
				}]
			},
			ROADMAP: "yol haritası",
			ROADMAPtext: "PI Network ekosistemini doğumdan büyüklüğe getiren plan budur.",
			Phase1: "ilk aşama",
			Phase2: "ikinci sahne",
			r_title1: "ONE",
			r_title2: "TWO",
			rt1_text1: "Resmi web sitesini başlatın ve akıllı sözleşmeleri dağıtın",
			rt1_text2: "Telegram ve Twitter gibi sosyal medya operasyonlarını başlatın",
			rt1_text3: "Topluluk üyeleri için ilk airdrop turunu açın",
			rt1_text4: "3000 Telgraf üyesi",
			rt1_text5: "Likidite Temettülerini Açın",
			rt1_text6: "CoinMarketCap'te listeleniyor",
			rt1_text7: "CoinGecko'da listeleniyor",
			rt1_text8: "Üçüncü taraf ajans denetimi",
			rt1_text9: "Kitlesel pazarlamayı başlatın",
			rt1_text10: "Topluluk airdroplarının ikinci turu",
			rt2_text1: "Üçüncü taraf cüzdanlarla işbirliği",
			rt2_text2: "",
			rt2_text3: "200K+ Telgraf üyesi",
			rt2_text4: "120k+ jeton sahibi",
			rt2_text5: "Pi NetworkSwap geliştirmeye başlayın",
			rt2_text6: "Pi NetworkNFT'nin geliştirilmesine başlayın",
			rt2_text7: "PiDAO'yu Başlat",
			rt2_text8: "Zincirler arası toplama işlem protokolü Pi NetworkSwap'ı başlattı",
			rt2_text9: "Piyasadaki en iyi CEX'leri listeleyin",
			Community: {
				title: "PI Network küresel topluluğuna katılın",
				text: "SpacePi, blockchain alanında teknik engelleri aşan ve kapsamlı hizmet sağlayıcı türlerinin çoklu zincirler arası protokol sertifikalarını entegre eden tek kişi olacak.Gelecek tüm blockchain dijital varlık oyuncularına ait.Bu harika ana tanık olmak için birlikte çalışalım!",
				buttext: "bize katılın",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			answers: {
				text: "SpacePi, dünyadaki tek kapsamlı hizmet sağlayıcı tipi çoklu zincirler arası protokol belirtecidir.",
				array: [{
					title: "1.PI Network tarafından açıklanan metaverse nedir?",
					text: "Oyunlar, meta veri deposunun birincil biçimidir. Ürün formundan, oyun metaverse in prototipidir. Gerçekliğin simülasyonuna, uzantısına ve yaratıcı hayal gücüne dayalı olarak insanlar tarafından kurulan sanal bir dünya olarak oyunlar, ürün biçiminde Metaverse e benzer. Ready Player One kitabına veya filmine aşina iseniz, bu metaverse için harika bir örnektir."
				}, {
					title: "2.Metaverse Önemli mi?",
					text: "Web3.0, holografik İnternet teknolojisi, blok zinciri ve NFT nin entegrasyonuna dayanan Metaverse kavramının sunduğu değerler, İnternet in temel değerleri ile uyumludur. SpacePi, meta verinin İnternet in nihai biçimi olabileceğine inanıyor. Bu nedenle, oyunu başlangıç ​​noktası olarak aldık ve gerçeklik ile sanallık arasındaki bağlantıyı daha verimli hale getiren ve değer dolaşımını zenginleştiren NFT+ metaverse tabanlı bir sanal yaşam blok zinciri oyunu olan PI Network yi yarattık. Bu dijital platformların önemi, son küresel salgın sırasında belirgin hale geldi."
				}, {
					title: "3.PI Network Ekosistemi nedir?",
					text: "NFT + Metaverse konsepti ile desteklenen bir blok zincir oyunu olan SpacePi, platform ekolojik yapısı açısından birkaç çekirdek bölüm içermektedir.NFT oyun sistemi Metaverse oyun ekolojisi PI Network Exchange "
				}, {
					title: "4.PI Network meta veri tabanında ne yapabiliriz?",
					text: "PI Network olarak anılan PI Network Token, karakterleri, sahne donanımlarını ve yaşam hikayelerini sanal sosyal etkileşime entegre eden merkezi olmayan bir çevrimiçi sanal gerçeklik oyun platformu oluşturmayı amaçlayan NFT ve Metaverse nin iki ana blok zinciri kategorisini birleştirir. sanal dünyada satın alınabilir. Sanal, yaşam, aksiyon ve diğer oyunları geliştirmek için farklı koleksiyonlara katılın. Bu nedenle SpacePi, meta veri deposu ve NFT etki alanlarındaki ilk ve tek projedir."
				}, {
					title: "5.PI Network Metaverse de nasıl para kazanılır?",
					text: "PI Network ayrıca, blok zinciri ortamı için merkezi olmayan oyun uygulamalarını ve hibrit mimari oyun uygulamalarını programlamak, hata ayıklamak ve yayınlamak için üçüncü taraf geliştiricileri de destekleyebilir. Aynı zamanda SpacePi, zincir dışı kalıcı depolamayı ve uygulama içi oyun varlıkları NFT nin zincirler arası kullanımını gerçekleştirebilen blok zinciri tabanlı dağıtılmış kullanıcı hesabı sistemi, cüzdan ve NFT dijital varlık dolaşımını entegre eder."
				}, {
					title: "6.PI Network nin geliştiricisi mi?",
					text: "PI Network Metaverse, kripto ile ilgili projeleri yönlendirmek, yönetmek ve geliştirmek için neredeyse benzersiz bir deneyime ve yeteneğe sahip, dünya çapındaki bağımsız geliştiriciler tarafından ortaklaşa geliştirildi. Birlikte, Metaverse dünyasına yeni bir macera olan PI Network metaverse nin vizyonu konusunda kendine güvenen ve tutkulu olan, aynı fikirde olan bir grup destekçiyle güçlü bir ekip oluşturuyorlar."
				}, {
					title: "7.Nasıl daha fazla yardım sağlayabilirim?",
					text: "Tam ademi merkeziyetçilik nedeniyle, PI Network metaverse hedeflerimize ulaşmak için çok daha büyük bir topluluğa ihtiyaç duyacaktır, PI Network ye katılabilirsiniz."
				}]
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "kopya başarı",
			partners_title1: "PI Network HER ZAMAN OLACAK",
			partners_title2: "PI NETWORK'ÜN İNANÇ HAYRANI OLUN!",
			partners_text: "SpacePi'nin şimdi yaptığı her şey, Pi Hayranlarının ısrarının buna değdiğini kanıtlamak! PI Network ile işbirliği yapmak için daha fazla platforma ve kuruma hoş geldiniz, resmi iletişim e-postası: pi@space-pi.com",
			partners_email_title: "RESMİ İLETİŞİM E-POSTA:",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	"7b76": function(t) {
		t.exports = JSON.parse(
			'{"v":"5.6.9","fr":30,"ip":0,"op":180,"w":1920,"h":1720,"nm":"合成 1","ddd":0,"assets":[{"id":"image_0","w":1435,"h":1893,"u":"images/","p":"img_0.png","e":0},{"id":"image_1","w":1209,"h":834,"u":"images/","p":"img_1.png","e":0},{"id":"image_2","w":1984,"h":1674,"u":"images/","p":"img_2.png","e":0},{"id":"image_3","w":926,"h":514,"u":"images/","p":"img_3.png","e":0},{"id":"image_4","w":1608,"h":1080,"u":"images/","p":"img_4.png","e":0},{"id":"image_5","w":888,"h":943,"u":"images/","p":"img_5.png","e":0},{"id":"image_6","w":2273,"h":1864,"u":"images/","p":"img_6.png","e":0},{"id":"image_7","w":3840,"h":2114,"u":"images/","p":"img_7.png","e":0},{"id":"image_8","w":3000,"h":2128,"u":"images/","p":"img_8.png","e":0},{"id":"image_9","w":3840,"h":3440,"u":"images/","p":"img_9.jpg","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"space-光.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":110,"s":[0]},{"t":127,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1148,529.5,0],"ix":2},"a":{"a":0,"k":[717.5,946.5,0],"ix":1},"s":{"a":0,"k":[48.482,48.482,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"space.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[50]},{"t":107,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":20,"s":[593,484,0],"to":[97.5,-24,0],"ti":[-91.5,-24,0]},{"t":107,"s":[998,466,0]}],"ix":2},"a":{"a":0,"k":[604.5,417,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[0,0,100]},{"t":107,"s":[49.876,49.876,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"飞石头.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":69,"s":[0]},{"t":103,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":69,"s":[803,611,0],"to":[33.5,3.5,0],"ti":[-33.5,-3.5,0]},{"t":103,"s":[1004,632,0]}],"ix":2},"a":{"a":0,"k":[992,837,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":69,"s":[0,0,100]},{"t":103,"s":[50.119,50.119,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"右飞机.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":47,"s":[0]},{"t":107,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":47,"s":[1997,698,0],"to":[-61,0.5,0],"ti":[61,-0.5,0]},{"t":107,"s":[1631,701,0]}],"ix":2},"a":{"a":0,"k":[463,257,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":47,"s":[15.725,15.725,100]},{"t":107,"s":[51.362,51.362,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"右房子.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":98,"s":[0]},{"t":115,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1513,640.5,0],"ix":2},"a":{"a":0,"k":[804,540,0],"ix":1},"s":{"a":0,"k":[50.871,50.871,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"左飞机.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":48,"s":[0]},{"t":107,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":48,"s":[-523,974,0],"to":[126.5,-65,0],"ti":[-126.5,65,0]},{"t":107,"s":[236,584,0]}],"ix":2},"a":{"a":0,"k":[444,471.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":48,"s":[115.991,115.991,100]},{"t":107,"s":[54.505,54.505,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"左星球.png","cl":"png","refId":"image_6","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":108,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[-675.5,-589,0],"to":[206,175,0],"ti":[-206,-175,0]},{"t":108,"s":[560.5,461,0]}],"ix":2},"a":{"a":0,"k":[1136.5,932,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[129.037,129.037,100]},{"t":108,"s":[49.318,49.318,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"下地球.png","cl":"png","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,1193,0],"ix":2},"a":{"a":0,"k":[1920,1057,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[107.721,107.721,100]},{"t":108,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"点缀飞机.png","cl":"png","refId":"image_8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":103,"s":[0]},{"t":120,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1054,534,0],"ix":2},"a":{"a":0,"k":[1500,1064,0],"ix":1},"s":{"a":0,"k":[52.533,52.533,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"背景.png","cl":"png","refId":"image_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,860,0],"ix":2},"a":{"a":0,"k":[1920,1720,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[75.208,75.208,100]},{"t":108,"s":[50,50,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0}],"markers":[]}'
		)
	},
	8: function(t, e) {},
	8270: function(t, e, a) {
		t.exports = a.p + "img/spacepi.05181cea.png"
	},
	"82fa": function(t, e, a) {},
	8440: function(t, e, a) {
		"use strict";
		a("d859")
	},
	"85e3": function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAABHNCSVQICAgIfAhkiAAAAaBJREFUeF7tm11Og0AUhe8MLsAl+G5ISF2AuBKXou7AJXQn1gXYkBDjszto3wvXAVKkFgyTkEDh46lJJy0czvnODD8mS+9UZrYF4YfxOSSDCCKI4CyDCG0iqOi7C9TGJ1NjjnVAi42Y++Y+DMAEfQnC7fOYB+bz31m6cvtqnhABEXCCEAcHAk2jOBcbnzLBj2ktFXlZYPSBaNdYRGifLOGEImWd8wT9im7yg30cwoJT+Q1V+faKQwWh4G0qBzDEfpQz5PNV5D9OQIRjHeEE4tDGBCvZgwmTi1l1HtLVprnqHIQJiODwjAiIULU0TkAEnFDPWIkDcSAOxKG5hIUJMAEmwASY8OcaI2AEjIARMAJGwHh+B4p2oB1oB9qBdlhEO6iurei6PNuB7s1tkhzP/ILuRf6avbhZeRVuY0RABJwgi4lDAbtm5Z18trJbBBg7BWj5YrbtgAjlSy79N5zgtEIERKgigxMQASfU9dHxlHvi3k3c9e+YcUca1UiMua4XhdV7oP232T7q31+CGT/ljgi+cfiMoiy3rz7CTX2s40HyA6NRsBMg35lfAAAAAElFTkSuQmCC"
	},
	"890f": function(t, e, a) {},
	"8ce5": function(t, e, a) {
		"use strict";
		a("a717")
	},
	"8e05": function(t, e, a) {
		"use strict";
		a("5873")
	},
	9: function(t, e) {},
	"97c5": function(t, e, a) {
		t.exports = a.p + "img/one-img1.0cd404fd.png"
	},
	a0c8: function(t, e, a) {
		t.exports = a.p + "img/carousel-left.e49de944.png"
	},
	a1a7: function(t) {
		t.exports = JSON.parse(
			'{"v":"5.6.9","fr":30,"ip":0,"op":159,"w":1125,"h":2200,"nm":"合成 1","ddd":0,"assets":[{"id":"image_0","w":1435,"h":1893,"u":"imagesm/","p":"img_0.png","e":0},{"id":"image_1","w":926,"h":514,"u":"imagesm/","p":"img_1.png","e":0},{"id":"image_2","w":1984,"h":1674,"u":"imagesm/","p":"img_2.png","e":0},{"id":"image_3","w":888,"h":943,"u":"imagesm/","p":"img_3.png","e":0},{"id":"image_4","w":1209,"h":834,"u":"imagesm/","p":"img_4.png","e":0},{"id":"image_5","w":3840,"h":2114,"u":"imagesm/","p":"img_5.png","e":0},{"id":"image_6","w":3000,"h":2128,"u":"imagesm/","p":"img_6.png","e":0},{"id":"image_7","w":2273,"h":1864,"u":"imagesm/","p":"img_7.png","e":0},{"id":"image_8","w":1608,"h":1080,"u":"imagesm/","p":"img_8.png","e":0},{"id":"image_9","w":3840,"h":3440,"u":"imagesm/","p":"img_9.jpg","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"space-光.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[0]},{"t":129,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[732.5,574.171,0],"ix":2},"a":{"a":0,"k":[717.5,946.5,0],"ix":1},"s":{"a":0,"k":[51.598,51.598,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"右飞机.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[1333,543.939,0],"to":[-103.333,90.333,0],"ti":[175.333,-1.333,0]},{"t":120,"s":[941,655.939,0]}],"ix":2},"a":{"a":0,"k":[463,257,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":30,"s":[1,1,100]},{"t":120,"s":[43.304,43.304,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"飞石头.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":88,"s":[0]},{"t":130,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[618.5,526.657,0],"ix":2},"a":{"a":0,"k":[992,837,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":88,"s":[15.635,15.635,100]},{"t":129,"s":[38.635,38.635,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"左飞机.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":51,"s":[-295.5,1294.296,0],"to":[81.667,-53.667,0],"ti":[-81.667,53.667,0]},{"t":120,"s":[194.5,972.296,0]}],"ix":2},"a":{"a":0,"k":[444,471.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":51,"s":[80.39,80.39,100]},{"t":120,"s":[45.255,45.255,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"space.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":28,"s":[302,715.304,0],"to":[24.417,-78.667,0],"ti":[-86.417,22.667,0]},{"t":120,"s":[562.5,489.304,0]}],"ix":2},"a":{"a":0,"k":[604.5,417,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":28,"s":[1,1,100]},{"t":120,"s":[47.395,47.395,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"下地球.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[562.5,1206,0],"ix":2},"a":{"a":0,"k":[1920,1057,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[32.604,32.604,100]},{"t":120,"s":[64.271,64.271,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"点缀飞机.png","cl":"png","refId":"image_6","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[0]},{"t":130,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-661.5,468.657,0],"ix":2},"a":{"a":0,"k":[1500,1064,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"左星球.png","cl":"png","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[-69.5,-86,0],"to":[61.333,62.667,0],"ti":[-61.333,-62.667,0]},{"t":120,"s":[298.5,290,0]}],"ix":2},"a":{"a":0,"k":[1136.5,932,0],"ix":1},"s":{"a":0,"k":[31.58,31.58,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"右房子.png","cl":"png","refId":"image_8","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[0]},{"t":130,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[838.5,604.329,0],"ix":2},"a":{"a":0,"k":[804,540,0],"ix":1},"s":{"a":0,"k":[44.03,44.03,100],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"背景.png","cl":"png","refId":"image_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[368.5,1048.296,0],"ix":2},"a":{"a":0,"k":[1920,1720,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[79.116,79.116,100]},{"t":120,"s":[61.199,61.199,100]}],"ix":6}},"ao":0,"ip":0,"op":900,"st":0,"bm":0}],"markers":[]}'
		)
	},
	a254: function(t, e) {
		t.exports =
			"data:image/png;base64,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"
	},
	a638: function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "Home",
			url_buy_twitter: "Twitter",
			url_buy_telegram: "Telegram",
			index_SpacePi_Bscscan_t: "PI Network Bscscan",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "TELEGRAM",
			telegraph_more: "More Telegrams",
			spacepiwep: {
				title: "SPISWAP",
				o: "On board",
				bnt: "Audit Report",
				text: "Based on this point of view, PI Network has become an investment tool for purchasing virtual assets or services in its ecosystem, and it will burst out with new vitality and unprecedented value with the application of SpacePi. Here are some key points of the PI Network ecosystem.",
				trend_bnt_title: "SPISWAP",
				trend_bnt_url: "https://spi-swap.com/swap"
			},
			partners_carousel_text: "PI Network WILL ALWAYS BE A FAITH FAN OF PI NETWORK!EVERYTHING PI Network DO NOW IS TO PROVE THAT THE PERSISTENCE OF PI FANS IS WORTH IT!",
			selectLang: "Choose language",
			happy_gd: "More Friendly Partners",
			happy_text: "In order to make PI Network achieve greater innovations, we decided to upgrade the contract to the most secure mechanism, adopting the same level as SHIBA Token. The upgraded contract will give up all permissions and locked. Contract address:",
			happy_text1: "PI Network will always be a faith fan of Pi Network!",
			happy_text2: "Everything PI Network do now is to prove that the persistence of Pi Fans is worth it!",
			doge: "WHAT IS PI Network？",
			only: "The world's only comprehensive service provider type multiple cross-chain protocol token",
			introduce: "PI Network will be the only one in the blockchain field that breaks technical barriers and integrates multiple cross-chain protocol tokens of integrated service provider types. The future belongs to all blockchain digital asset players. Let us work together to witness this great moment!",
			text: ["PI Network will create an unprecedented top-level digital ecosystem, providing a simple and efficient metaverse digital immersion experience as the core. Endows the token circulation value, allows more people to participate in the ecological construction of SpacePi, creates a borderless entertainment world, links users in every corner of the world, and establishes a trustless and highly decentralized metaverse ecology for global users.",
				"PI Network includes two major blockchain categories, NFT and Metaverse. PI Network is building a decentralized online virtual reality game platform that integrates characters, props and life storylines into virtual social interactions. Players can play in the virtual world. to buy weapons, armor, props and gems. Participate in different collections to develop virtual, life, action and other games.",
				"All the benefits of PI Network will be presented in the form of the native token SpacePi. The virtual and reality of the PI Network metaverse are highly interconnected, and the closed-loop economy attached to the open-source platform has become the final form of the Internet."
			],
			tetxbu: "Whitepaper",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["Buy SpacePi"],
			index_Liquidity_title: "Liquidity Locked",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus Audit",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "PI Network Price",
			index_SpacePi: [{
				title: "Dextools Trend"
			}, {
				title: "Poocoin Trend"
			}, {
				title: "Avedex Trend"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "WHAT IS PI Network？",
				content: "PI Network will create an unprecedented top-level digital ecosystem, providing a simple and efficient metaverse digital immersion experience as the core."
			}, {
				title: "PI Network WORLD",
				content: "Endows the token circulation value, allows more people to participate in the ecological construction of SpacePi, creates a borderless entertainment world, links users in every corner of the world, and establishes a trustless and highly decentralized metaverse ecology for global users."
			}],
			station: {
				enter: "Powerful PI Network Ecosystem",
				title: "IN EFFECT WE ARE BUILDING A DIGITAL WORLD LIKE NEVER BEFORE",
				text: ["The digital economy has become a legitimate asset type worthy of investors consideration, which has exploded exponentially in the short term.",
					"Based on this point of view, PI Network has become an investment tool for purchasing virtual assets or services in its ecosystem, and it will burst out with new vitality and unprecedented value with the application of SpacePi. Here are some key points of the PI Network ecosystem."
				],
				c: [{
					title: "PI Network Token",
					text: "A new type of utility token supported by multiple public chains, serving as a foundation in the PI Network ecosystem, serving various applications, with powerful application scenarios"
				}, {
					title: "Introduction to SpacePi",
					text: "The PI Network ecosystem is based on WEB3.0 holographic Internet NFT and other technical components, and has become the most powerful technical supporter for space users in the virtual space of the Metaverse."
				}, {
					title: "PI Network NFTs",
					text: "Non-homogeneous and transferable digital assets with unique characteristics can become an art collection or a game prop in the PI Network ecosystem."
				}, {
					title: "PI Network DAO",
					text: "The PI Network token will be used for voting in the DAO in the PI Network ecosystem to ensure that the project is self-sustaining and has no controller."
				}, {
					title: "PI Network Metaverse",
					text: "A Gamified 3D Metaverse Virtual Space in the PI Network Ecosystem"
				}, {
					title: "NFT market",
					text: "The PI Network Marketplace enables participants to manage and trade PI Network NFTs, which are priced in PI Network as the currency of circulation"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			hoce_token: "0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3",
			tron_token: "TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}, {
				title: "PI Network (heco)",
				url: "https://ht.mdex.co/#/swap?inputCurrency=HT&outputCurrency=0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3"
			}, {
				title: "PI Network (tron)",
				url: "https://sunswap.com/#/home?tokenAddress=TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX&type=swap"
			}],
			ROADMAP: "ROADMAP",
			ROADMAPtext: "This is the plan that made the PI Network ecosystem from birth to greatness.",
			Phase1: "THE FIRST STAGE",
			Phase2: "THE SECOND STAGE",
			r_title1: "ONE",
			r_title2: "TWO",
			rt1_text1: "Launch the official website and deploy smart contracts",
			rt1_text2: "Start social media operations such as Telegram and Twitter",
			rt1_text3: "Open the first round of airdrops for community members",
			rt1_text4: "3000 Telegram members",
			rt1_text5: "Open Market repurchase",
			rt1_text6: "Listed on CoinMarketCap",
			rt1_text7: "Listed on CoinGecko",
			rt1_text8: "Third-party agency audit",
			rt1_text9: "Initiate mass marketing",
			rt1_text10: "The second round of community airdrops",
			rt2_text1: "Cooperation with third-party wallets",
			rt2_text2: "",
			rt2_text3: "200K+ Telegram members",
			rt2_text4: "120k+ token holders",
			rt2_text5: "Start the development of Pi NetworkSwap",
			rt2_text6: "Start the development of Pi NetworkNFT",
			rt2_text7: "Start PiDAO",
			rt2_text8: "Launched the cross-chain aggregation transaction protocol Pi NetworkSwap",
			rt2_text9: "List the top CEXs in the market",
			Tokenomics: {
				text: "COMMUNITY ALWAYS COMES FIRST",
				title: "FAIR TOKEN ECOLOGY",
				content: "In order to build our democratic carrier outside the earth, PI Network is based on a fair token ecological release, no private token, no development tax.",
				array: [{
					title: "None",
					text: "Development tax"
				}, {
					title: "None",
					text: "Token burning"
				}, {
					title: "120k+",
					text: "Holder"
				}]
			},
			answers: {
				text: "PI Network IS THE ONLY COMPREHENSIVE SERVICE PROVIDER TYPE MULTIPLE CROSS-CHAIN PROTOCOL TOKEN IN THE WORLD",
				array: [{
					title: "1.What is the metaverse described by PI Network？",
					text: "Games are the primary form of the metaverse. From the product form, the game is the prototype of the metaverse. As a virtual world constructed by people based on the simulation, extension and imaginative imagination of reality, games are similar in product form to the Metaverse. If you are familiar with the book or the movie Ready Player One, this is a great example of the metaverse."
				}, {
					title: "2.Does the Metaverse Matter?",
					text: "Based on the integration of Web3.0, holographic Internet technology, blockchain and NFT, the values presented by the concept of the Metaverse are in line with the core values of the Internet. PI Network believes that the metaverse may be the ultimate form of the Internet. Therefore, we took the game as the starting point and created SpacePi, a virtual life blockchain game based on NFT+ metaverse, which makes the link between reality and virtuality more efficient and enriches the circulation of value. The importance of these digital platforms has become apparent during the recent global pandemic."
				}, {
					title: "3.What is the PI Network Ecosystem?",
					text: "As a blockchain game supported by the concept of NFT + Metaverse, PI Network includes several core sections in terms of platform ecological construction. NFT game system Metaverse game ecology PI Network Exchange"
				}, {
					title: "4.What can we do in the PI Network metaverse?",
					text: "PI Network Token, referred to as PI Network, combines the two major blockchain categories of NFT and Metaverse, aiming to create a decentralized online virtual reality game platform that integrates characters, props and life storylines into virtual social interaction. Weapons, armor, props and gems can be purchased in the virtual world. Participate in different collections to develop virtual, life, action and other games. As such, PI Network is the first and only project across the metaverse and NFT domains"
				}, {
					title: "5.How to earn money in the PI Network Metaverse?",
					text: "PI Network can also support third-party developers to program, debug and release decentralized game applications and hybrid architecture game applications for the blockchain environment. At the same time, PI Network integrates blockchain-based distributed user account system, wallet and NFT digital asset circulation, which can realize off-chain permanent storage and cross-chain use of in-app game assets NFT."
				}, {
					title: "6.Developer of PI Network？",
					text: "The PI Network Metaverse is co-developed by independent developers around the world, with an almost unparalleled experience and ability to direct, manage, and enhance crypto-related projects. Together, they form a strong team with a group of like-minded supporters who are confident and passionate about the vision of the PI Network metaverse, a new adventure into the metaverse world."
				}, {
					title: "7.How can I provide more help?",
					text: "Due to complete decentralization, the PI Network metaverse will require a much larger community to reach our goals, you are welcome to join PI Network"
				}]
			},
			Community: {
				title: "JOIN THE PI Network GLOBAL COMMUNITY",
				text: "PI Network will be the only one in the blockchain field that breaks technical barriers and integrates multiple cross-chain protocol tokens of integrated service provider types. The future belongs to all blockchain digital asset players. Let us work together to witness this great moment!",
				buttext: "JOIN US",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "copySuccess",
			partners_title1: "PI Network WILL ALWAYS",
			partners_title2: "BE A FAITH FAN OF PI NETWORK!",
			partners_text: "Everything PI Network do now is to prove that the persistence of Pi Fans is worth it! Welcome more platforms and institutions to cooperate with SpacePi, official contact email: pi@space-pi.com",
			partners_email_title: "OFFICIAL CONTACT EMAIL:",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	a717: function(t, e, a) {},
	b0c3: function(t, e, a) {},
	b1ad: function(t, e, a) {},
	b918: function(t) {
		t.exports = JSON.parse(
			'{"v":"5.6.9","fr":30,"ip":0,"op":40,"w":34,"h":34,"nm":"合成 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"形状图层 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[17.053,16.322,0],"ix":2},"a":{"a":0,"k":[0.5,-0.5,0],"ix":1},"s":{"a":0,"k":[74.58,74.58,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10.25,10.25],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.611764705882,0.317647058824,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-0.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"形状图层 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[30]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[17.053,16.322,0],"ix":2},"a":{"a":0,"k":[0.5,-0.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[77.019,77.019,100]},{"t":40,"s":[291.653,291.653,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[10.25,10.25],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.611764705882,0.317647058824,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,-0.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900,"st":0,"bm":0}],"markers":[]}'
		)
	},
	bca3: function(t, e, a) {
		"use strict";
		a("82fa")
	},
	bd77: function(t) {
		t.exports = JSON.parse(
			'{"contractName":"StakePool","abi":[{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_totalReward","type":"uint256"},{"internalType":"uint256","name":"_perReward","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakeAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakeSub","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"invite","outputs":[{"internalType":"contract Invite","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"perBlockReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalFight","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalStatistics","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_invite","type":"address"}],"name":"setInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNum","type":"uint256"}],"name":"setStartBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blocks","type":"uint256"}],"name":"setDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"perReward","type":"uint256"}],"name":"setPerBlockReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeSub","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getWithdrawableReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getStakeInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}],"address":"0xaF79eC2df78c96d77570bbc1cDcE243167009855"}'
		)
	},
	c4a9: function(t, e, a) {
		t.exports = a.p + "img/spacepiwep-img.04ff0083.png"
	},
	c972: function(t) {
		t.exports = JSON.parse(
			'{"contractName":"Invite","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"inviter","type":"address"},{"indexed":true,"internalType":"address","name":"invitee","type":"address"}],"name":"BondInvite","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"inviter","type":"address"}],"name":"bondInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isInvited","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getInviteInfo","outputs":[{"components":[{"internalType":"address[]","name":"invites","type":"address[]"},{"internalType":"address","name":"inviter","type":"address"},{"internalType":"bool","name":"isInvited","type":"bool"}],"internalType":"struct Invite.InviteInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"a1","type":"address"},{"internalType":"address","name":"a2","type":"address"}],"name":"checkIsInvite","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"inviter","type":"address"}],"name":"getInvitee","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true}],"address":"0x23366f3C6803F2198A541BDb04107c4ae72e9e1B"}'
		)
	},
	c9d5: function(t, e, a) {
		t.exports = a.p + "img/one-img.6691c925.png"
	},
	ca8a: function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "หน้าแรก",
			url_buy_twitter: "ทวิตเตอร์",
			url_buy_telegram: "โทรเลข",
			index_SpacePi_Bscscan_t: "PI Network Bscscan",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "โทรเลข",
			telegraph_more: "โทรเลขเพิ่มเติม",
			spacepiwep: {
				title: "SPISWAP",
				o: "บนกระดาน",
				bnt: "รายงานการตรวจสอบ",
				text: "จากมุมมองนี้ PI Network ได้กลายเป็นเครื่องมือการลงทุนสำหรับการซื้อสินทรัพย์หรือบริการเสมือนในระบบนิเวศ และจะระเบิดพลังใหม่และคุณค่าที่ไม่เคยมีมาก่อนด้วยแอปพลิเคชัน PI Network นี่คือประเด็นสำคัญบางประการของระบบนิเวศ SpacePi",
				trend_bnt_title: "PI Network Trend",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "PI Network WILL ALWAYS BE A FAITH FAN OF PI NETWORK!EVERYTHING PI Network DO NOW IS TO PROVE THAT THE PERSISTENCE OF PI FANS IS WORTH IT!",
			selectLang: "เลือกภาษา",
			happy_gd: "พันธมิตรที่เป็นมิตรมากขึ้น",
			happy_text: "เพื่อให้ PI Network บรรลุนวัตกรรมที่มากขึ้น เราจึงตัดสินใจอัปเกรดสัญญาเป็นกลไกที่ปลอดภัยที่สุดโดยใช้ระดับเดียวกับ SHIBA Token สัญญาที่อัปเกรดจะยกเลิกการอนุญาตทั้งหมดและถูกล็อค ที่อยู่ของสัญญา:",
			happy_text1: "PI Network จะเป็นแฟนตัวยงของ Pi Network เสมอ!",
			happy_text2: "ทุกสิ่งที่ PI Network ทำในตอนนี้คือการพิสูจน์ว่าการคงอยู่ของ Pi Fans นั้นคุ้มค่า!",
			doge: "PI Network คืออะไร?",
			only: "ผู้ให้บริการที่ครอบคลุมเพียงรายเดียวในโลกที่พิมพ์โทเค็นโปรโตคอลข้ามสายหลายตัว",
			introduce: "PI Network จะเป็นหนึ่งเดียวในด้านบล็อกเชนที่ทำลายอุปสรรคทางเทคนิคและรวมโทเค็นโปรโตคอลข้ามเครือข่ายหลายประเภทของผู้ให้บริการแบบบูรณาการ อนาคตเป็นของผู้เล่นสินทรัพย์ดิจิทัลบล็อคเชนทั้งหมด ให้เราทำงานร่วมกันเพื่อเป็นสักขีพยานในช่วงเวลาที่ยอดเยี่ยมนี้!",
			text: ["PI Network จะสร้างระบบนิเวศดิจิทัลระดับบนสุดที่ไม่เคยมีมาก่อน โดยมอบประสบการณ์การดื่มด่ำดิจิทัล metaverse ที่ง่ายและมีประสิทธิภาพเป็นแกนหลัก มอบมูลค่าการหมุนเวียนโทเค็น ช่วยให้ผู้คนจำนวนมากขึ้นมีส่วนร่วมในการก่อสร้างเชิงนิเวศของ PI Network สร้างโลกแห่งความบันเทิงไร้พรมแดน เชื่อมโยงผู้ใช้ในทุกมุมโลก และสร้างระบบนิเวศ metaverse ที่ไม่น่าเชื่อถือและมีการกระจายอำนาจสูงสำหรับผู้ใช้ทั่วโลก",
				"PI Network ประกอบด้วยบล็อกเชนหลักสองประเภทคือ NFT และ Metaverse PI Network กำลังสร้างแพลตฟอร์มเกมเสมือนจริงออนไลน์ที่กระจายอำนาจซึ่งรวมเอาตัวละคร อุปกรณ์ประกอบฉาก และโครงเรื่องชีวิตเข้าไว้ในปฏิสัมพันธ์ทางสังคมเสมือนจริง ผู้เล่นสามารถเล่นได้ในโลกเสมือนจริง เพื่อซื้ออาวุธ ชุดเกราะ อุปกรณ์ประกอบฉาก และอัญมณี เข้าร่วมในคอลเลกชันต่างๆ เพื่อพัฒนาเกมเสมือนจริง ชีวิต แอ็คชั่น และเกมอื่นๆ",
				"ประโยชน์ทั้งหมดของ PI Network จะถูกนำเสนอในรูปแบบของโทเค็น PI Network ดั้งเดิม ความเสมือนจริงและความเป็นจริงของ PI Network metaverse นั้นเชื่อมโยงถึงกันอย่างมาก และเศรษฐกิจแบบวงปิดที่แนบมากับแพลตฟอร์มโอเพ่นซอร์สได้กลายเป็นรูปแบบสุดท้ายของอินเทอร์เน็ต"
			],
			tetxbu: "Whitepaper",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["ซื้อ SpacePi"],
			index_Liquidity_title: "สภาพคล่องถูกล็อค",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus Audit",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "ราคา SpacePi",
			index_SpacePi: [{
				title: "Dextools Trend"
			}, {
				title: "Poocoin Trend"
			}, {
				title: "Avedex Trend"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "PI Network คืออะไร?",
				content: "PI Network จะสร้างระบบนิเวศดิจิทัลระดับบนสุดที่ไม่เคยมีมาก่อน โดยมอบประสบการณ์การดื่มด่ำดิจิทัล metaverse ที่ง่ายและมีประสิทธิภาพเป็นแกนหลัก"
			}, {
				title: "PI Network world",
				content: "มอบมูลค่าการหมุนเวียนโทเค็น ช่วยให้ผู้คนจำนวนมากขึ้นมีส่วนร่วมในการก่อสร้างเชิงนิเวศของ PI Network สร้างโลกแห่งความบันเทิงไร้พรมแดน เชื่อมโยงผู้ใช้ในทุกมุมโลก และสร้างระบบนิเวศ metaverse ที่ไม่น่าเชื่อถือและมีการกระจายอำนาจสูงสำหรับผู้ใช้ทั่วโลก"
			}],
			station: {
				enter: "ระบบนิเวศ PI Network อันทรงพลัง",
				title: "เรากำลังสร้างโลกดิจิทัลอย่างที่ไม่เคยมีมาก่อน",
				text: ["เศรษฐกิจดิจิทัลได้กลายเป็นสินทรัพย์ประเภทที่ถูกต้องตามกฎหมายที่นักลงทุนควรพิจารณา ซึ่งได้ขยายตัวอย่างรวดเร็วในระยะสั้น",
					"จากมุมมองนี้ PI Network ได้กลายเป็นเครื่องมือการลงทุนสำหรับการซื้อสินทรัพย์หรือบริการเสมือนในระบบนิเวศ และจะระเบิดพลังใหม่และคุณค่าที่ไม่เคยมีมาก่อนด้วยแอปพลิเคชัน PI Network นี่คือประเด็นสำคัญบางประการของระบบนิเวศ SpacePi"
				],
				c: [{
					title: "PI Network Token",
					text: "โทเค็นยูทิลิตี้ประเภทใหม่ที่รองรับโดยเครือข่ายสาธารณะหลายแห่ง ซึ่งทำหน้าที่เป็นรากฐานในระบบนิเวศของ PI Network ซึ่งให้บริการแอปพลิเคชันต่างๆ พร้อมสถานการณ์การใช้งานที่ทรงพลัง"
				}, {
					title: "บทนำสู่ SpacePi",
					text: "ระบบนิเวศของ PI Network ขึ้นอยู่กับ NFT อินเทอร์เน็ตโฮโลแกรม WEB3.0 และส่วนประกอบทางเทคนิคอื่นๆ และได้กลายเป็นผู้สนับสนุนด้านเทคนิคที่ทรงพลังที่สุดสำหรับผู้ใช้พื้นที่ในพื้นที่เสมือนของ Metaverse"
				}, {
					title: "PI Network NFTs",
					text: "สินทรัพย์ดิจิทัลที่ไม่เป็นเนื้อเดียวกันและสามารถถ่ายโอนได้ซึ่งมีลักษณะเฉพาะสามารถกลายเป็นคอลเลคชันงานศิลปะหรืออุปกรณ์เกมในระบบนิเวศของ SpacePi"
				}, {
					title: "PI Network DAO",
					text: "โทเค็น PI Network จะใช้สำหรับการลงคะแนนเสียงใน DAO ในระบบนิเวศของ PI Network เพื่อให้แน่ใจว่าโปรเจ็กต์สามารถพึ่งพาตนเองได้และไม่มีตัวควบคุม"
				}, {
					title: "PI Network Metaverse",
					text: "Gamified 3D Metaverse Virtual Space ในระบบนิเวศ SpacePi"
				}, {
					title: "ตลาด NFT",
					text: "ตลาด PI Network ช่วยให้ผู้เข้าร่วมสามารถจัดการและแลกเปลี่ยน PI Network NFT ซึ่งกำหนดราคาใน PI Network เป็นสกุลเงินของการหมุนเวียน"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			hoce_token: "0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3",
			tron_token: "TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}, {
				title: "PI Network (heco)",
				url: "https://ht.mdex.co/#/swap?inputCurrency=HT&outputCurrency=0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3"
			}, {
				title: "PI Network (tron)",
				url: "https://sunswap.com/#/home?tokenAddress=TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX&type=swap"
			}],
			ROADMAP: "แผนงาน",
			ROADMAPtext: "นี่คือแผนที่สร้างระบบนิเวศของ PI Network ตั้งแต่กำเนิดจนถึงความยิ่งใหญ่",
			Phase1: "ระยะแรก",
			Phase2: "ขั้นตอนที่สอง",
			r_title1: "หนึ่ง",
			r_title2: "สอง",
			rt1_text1: "เปิดตัวเว็บไซต์อย่างเป็นทางการและปรับใช้สัญญาอัจฉริยะ",
			rt1_text2: "เริ่มดำเนินการด้านโซเชียลมีเดียเช่น Telegram และ Twitter",
			rt1_text3: "เปิดแอร์ดรอปรอบแรกสำหรับสมาชิกชุมชน",
			rt1_text4: "3000 สมาชิกโทรเลข",
			rt1_text5: "ปันผลเปิดสภาพคล่อง",
			rt1_text6: "จดทะเบียนบน CoinMarketCap",
			rt1_text7: "จดทะเบียนบน CoinGecko",
			rt1_text8: "การตรวจสอบหน่วยงานบุคคลที่สาม",
			rt1_text9: "เริ่มต้นการตลาดมวลชน",
			rt1_text10: "แอร์ดรอปชุมชนรอบสอง",
			rt2_text1: "ความร่วมมือกับกระเป๋าเงินบุคคลที่สาม",
			rt2_text2: "",
			rt2_text3: "200K + สมาชิกโทรเลข",
			rt2_text4: "ผู้ถือโทเค็น 1,000K+",
			rt2_text5: "เริ่มการพัฒนา Pi NetworkSwap",
			rt2_text6: "เริ่มการพัฒนา Pi NetworkNFT",
			rt2_text7: "เริ่ม PiDAO",
			rt2_text8: "เปิดตัวโปรโตคอลการทำธุรกรรมการรวมข้ามสายโซ่ Pi NetworkSwap",
			rt2_text9: "รายชื่อ CEX ชั้นนำในตลาด",
			Tokenomics: {
				text: "ชุมชนมาก่อนเสมอ",
				title: "นิเวศวิทยาโทเค็นที่เป็นธรรม",
				content: "ในการสร้างผู้ให้บริการที่เป็นประชาธิปไตยของเรานอกโลก PI Network ขึ้นอยู่กับการปล่อยโทเค็นเชิงนิเวศที่ยุติธรรม ไม่มีโทเค็นส่วนตัว ไม่มีภาษีการพัฒนา",
				array: [{
					title: "ไม่มี",
					text: "ภาษีการพัฒนา"
				}, {
					title: "ไม่มี",
					text: "Token ปลายทาง"
				}, {
					title: "120k+",
					text: "ที่ยึด"
				}]
			},
			answers: {
				text: "PI Network เป็นโทเค็นโปรโตคอลหลายสายของผู้ให้บริการที่ครอบคลุมรายเดียวในโลก",
				array: [{
					title: "1. metaverse อธิบายโดย PI Network คืออะไร?",
					text: "เกมเป็นรูปแบบหลักของ metaverse จากรูปแบบผลิตภัณฑ์ เกมดังกล่าวเป็นต้นแบบของ metaverse เนื่องจากโลกเสมือนจริงที่สร้างขึ้นโดยผู้คนตามการจำลอง การขยาย และจินตนาการทางจินตนาการของความเป็นจริง เกมจึงมีรูปแบบผลิตภัณฑ์คล้ายกับ Metaverse หากคุณคุ้นเคยกับหนังสือหรือภาพยนตร์ Ready Player One นี่เป็นตัวอย่างที่ดีของ metaverse"
				}, {
					title: "2. Metaverse มีความสำคัญหรือไม่?",
					text: "จากการรวม Web3.0 เทคโนโลยีอินเทอร์เน็ตโฮโลแกรม blockchain และ NFT ค่าที่นำเสนอโดยแนวคิดของ Metaverse นั้นสอดคล้องกับค่านิยมหลักของอินเทอร์เน็ต PI Network เชื่อว่า metaverse อาจเป็นที่สุด อินเทอร์เน็ต ดังนั้น เราจึงนำเกมเป็นจุดเริ่มต้นและสร้าง PI Network เกมบล็อกเชนชีวิตเสมือนจริงที่อิงจาก NFT+ metaverse ซึ่งทำให้การเชื่อมโยงระหว่างความเป็นจริงกับเสมือนจริงมีประสิทธิภาพมากขึ้นและทำให้การหมุนเวียนของมูลค่าสมบูรณ์ยิ่งขึ้น ความสำคัญของสิ่งเหล่านี้ แพลตฟอร์มดิจิทัลได้กลายเป็นที่ประจักษ์ในช่วงการระบาดใหญ่ทั่วโลกเมื่อเร็ว ๆ นี้"
				}, {
					title: "3. ระบบนิเวศ PI Network คืออะไร?",
					text: "ในฐานะเกมบล็อคเชนที่รองรับแนวคิดของ NFT + Metaverse PI Network มีส่วนหลักหลายส่วนในแง่ของการสร้างระบบนิเวศของแพลตฟอร์ม ระบบเกม NFT ระบบนิเวศของเกม Metaverse PI Network Exchange"
				}, {
					title: "4. เราทำอะไรได้บ้างใน PI Network metaverse?",
					text: "PI Network Token หรือที่เรียกกันว่า PI Network เป็นการรวมกลุ่มบล็อคเชนหลักสองหมวดหมู่ของ NFT และ Metaverse โดยมีเป้าหมายเพื่อสร้างแพลตฟอร์มเกมเสมือนจริงออนไลน์ที่กระจายอำนาจซึ่งรวมเอาตัวละคร อุปกรณ์ประกอบฉาก และโครงเรื่องชีวิตเข้าไว้ในปฏิสัมพันธ์ทางสังคมเสมือนจริง อาวุธ เกราะ อุปกรณ์ประกอบฉาก และอัญมณีสามารถ ซื้อในโลกเสมือนจริง เข้าร่วมในคอลเลกชันต่าง ๆ เพื่อพัฒนาเกมเสมือนจริง ชีวิต แอ็คชั่น และเกมอื่น ๆ ดังนั้น PI Network จึงเป็นโครงการแรกและโครงการเดียวในโดเมน metaverse และ NFT"
				}, {
					title: "5. วิธีหาเงินใน PI Network Metaverse?",
					text: "PI Network ยังสามารถสนับสนุนนักพัฒนาบุคคลที่สามในการเขียนโปรแกรม ดีบัก และเผยแพร่แอปพลิเคชันเกมแบบกระจายอำนาจและแอปพลิเคชันเกมสถาปัตยกรรมไฮบริดสำหรับสภาพแวดล้อมบล็อคเชน ในขณะเดียวกัน PI Network ได้รวมระบบบัญชีผู้ใช้แบบกระจายบนบล็อกเชน กระเป๋าเงิน และการหมุนเวียนสินทรัพย์ดิจิทัล NFT ซึ่ง สามารถรับรู้การจัดเก็บถาวรแบบออฟไลน์และการใช้เนื้อหาเกมในแอปข้ามสาย NFT."
				}, {
					title: "6.ผู้พัฒนา PI Network？",
					text: "PI Network Metaverse ได้รับการพัฒนาร่วมกันโดยนักพัฒนาอิสระทั่วโลกโดยมีประสบการณ์และความสามารถในการกำกับ จัดการ และปรับปรุงโครงการที่เกี่ยวข้องกับ crypto ที่แทบจะไม่มีใครเทียบได้ พวกเขาร่วมกันสร้างทีมที่แข็งแกร่งพร้อมกลุ่มผู้สนับสนุนที่มีความคิดเหมือนๆ กัน มั่นใจและหลงใหลในวิสัยทัศน์ของ PI Network metaverse ซึ่งเป็นการผจญภัยครั้งใหม่สู่โลก metaverse"
				}, {
					title: "7. ฉันจะให้ความช่วยเหลือเพิ่มเติมได้อย่างไร?",
					text: "เนื่องจากการกระจายอำนาจที่สมบูรณ์ PI Network metaverse จะต้องการชุมชนที่ใหญ่กว่ามากเพื่อบรรลุเป้าหมายของเรา คุณสามารถเข้าร่วม PI Network ได้"
				}]
			},
			Community: {
				title: "เข้าร่วมชุมชนระดับโลกของ SpacePi",
				text: "PI Network จะเป็นหนึ่งเดียวในด้านบล็อกเชนที่ทำลายอุปสรรคทางเทคนิคและรวมโทเค็นโปรโตคอลข้ามเครือข่ายหลายตัวของประเภทผู้ให้บริการแบบบูรณาการ อนาคตเป็นของผู้เล่นสินทรัพย์ดิจิทัล blockchain ทั้งหมด ให้เราทำงานร่วมกันเพื่อเป็นสักขีพยานในช่วงเวลาที่ยอดเยี่ยมนี้!",
				buttext: "เข้าร่วมกับเรา",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			footer1: "หากคุณมีคำถามใด ๆ โปรดติดต่อเรา",
			footer2: "ลิขสิทธิ์ © 2021-2022 SpacePi. สงวนลิขสิทธิ์",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "copySuccess",
			partners_title1: "PI Network จะเสมอ",
			partners_title2: "เป็นแฟนตัวยงของเครือข่าย PI!",
			partners_text: "ทุกสิ่งที่ PI Network ทำในตอนนี้คือการพิสูจน์ว่าการคงอยู่ของ Pi Fans นั้นคุ้มค่า! ยินดีต้อนรับแพลตฟอร์มและสถาบันอื่นๆ เพื่อร่วมมือกับ PI Network อีเมลติดต่ออย่างเป็นทางการ: pi@space-pi.com",
			partners_email_title: "อีเมลติดต่ออย่างเป็นทางการ:",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	cd06: function(t, e, a) {
		"use strict";
		a("5b7a")
	},
	cf05: function(t, e, a) {
		t.exports = a.p + "img/logo.d428dbed.png"
	},
	cf93: function(t, e, a) {
		t.exports = a.p + "img/what1.ab667a1b.png"
	},
	d859: function(t, e, a) {},
	d935: function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "表紙",
			url_buy_twitter: "Twitter",
			index_SpacePi_Bscscan_t: "SpacePiブラウザ",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "TELEGRAM",
			telegraph_more: "その他のテレグラム",
			spacepiwep: {
				title: "SPISWAP",
				o: "機内で",
				bnt: "監査報告書",
				text: "この観点に基づいて、PI Networkはそのエコシステムで仮想資産またはサービスを購入するための投資ツールになり、SpacePiのアプリケーションによって新しい活力と前例のない価値で爆発します。 Pi Networkエコシステムのいくつかの重要なポイントは次のとおりです。",
				trend_bnt_title: "SpacePiトレンド",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "PI Networkは、常にPIネットワークの忠実なファンになります！すべてのPI Networkは、PIファンの永続性が価値があることを証明することを目的としています。",
			selectLang: "言語を選択してください",
			happy_gd: "よりフレンドリーなパートナー",
			happy_text: "PI Networkがより大きなイノベーションを実現するために、SHIBAトークンと同じレベルで、契約を最も安全なメカニズムにアップグレードすることにしました。 アップグレード契約を追加してください。 アップグレードされた契約は、すべての権限とロックを放棄します。 契約住所：",
			happy_text1: "PI Networkは常にPiNetworkの信仰ファンです！",
			happy_text2: "PI Networkが今していることはすべて、Piファンの永続性がそれだけの価値があることを証明することです！",
			doge: "SpacePiとは何ですか？",
			only: "世界で唯一の包括的なサービスプロバイダータイプのマルチクロスチェーンプロトコルトークン",
			introduce: "PI Networkは、技術的な障壁を打ち破り、包括的なサービスプロバイダータイプの複数のクロスチェーンプロトコル証明書を統合する、ブロックチェーン分野で唯一のものになります。将来はすべてのブロックチェーンデジタルアセットプレーヤーに帰属します。この素晴らしい瞬間を目撃するために協力しましょう。",
			text: ["PI Networkは、前例のないトップレベルのデジタルエコシステムを作成し、コアとしてシンプルで効率的なメタバースデジタルイマージョンエクスペリエンスを提供します。 トークン循環の価値を与え、より多くの人々がSpacePiのエコロジー構築に参加できるようにし、ボーダレスエンターテインメントの世界を作り、世界の隅々にいるユーザーを結び付け、グローバルユーザーのための信頼できない高度に分散化されたメタバースエコロジーを確立します。",
				"SpacePiには、NFTとメタバースの2つの主要なブロックチェーンカテゴリが含まれています。PI Networkは、キャラクター、小道具、ライフストーリーを仮想社会的相互作用に統合する分散型オンライン仮想現実ゲームプラットフォームを構築しています。プレーヤーは仮想世界で遊ぶことができます。武器、鎧、小道具を購入できます。と宝石。 さまざまなコレクションに参加して、仮想ゲーム、人生ゲーム、アクションゲーム、その他のゲームを開発します。",
				"SpacePiのすべての利点は、ネイティブトークンSpacePiの形式で提示されます。 SpacePiメタバースの仮想と現実は高度に相互接続されており、オープンソースプラットフォームに接続された閉ループ経済はインターネットの最終形態になっています。"
			],
			tetxbu: "ホワイトペーパーを読む",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["购买Pi Network"],
			index_Liquidity_title: "流動性ロック",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus検出",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "PI Network 価格",
			index_SpacePi: [{
				title: "Dextools 傾向"
			}, {
				title: "Poocoin 傾向"
			}, {
				title: "Avedex 傾向"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "SpacePiとは何ですか？",
				content: "PI Networkは、前例のないトップレベルのデジタルエコシステムを作成し、コアとしてシンプルで効率的なメタバースデジタルイマージョンエクスペリエンスを提供します。"
			}, {
				title: "スペースパイの世界",
				content: "トークン循環の価値を与え、より多くの人々がSpacePiのエコロジー構築に参加できるようにし、ボーダレスエンターテインメントの世界を作り、世界の隅々にいるユーザーを結び付け、グローバルユーザーのための信頼できない高度に分散化されたメタバースエコロジーを確立します。"
			}],
			station: {
				enter: "強力なPi Networkエコシステム",
				title: "私たちは実際、かつてないほどのデジタル世界を構築しています。",
				text: ["デジタル経済は、投資家の検討に値する正当な資産タイプになり、短期的には指数関数的に爆発しました。",
					"この観点に基づいて、PI Networkはそのエコシステムで仮想資産またはサービスを購入するための投資ツールになり、SpacePiのアプリケーションによって新しい活力と前例のない価値で爆発します。 Pi Networkエコシステムのいくつかの重要なポイントは次のとおりです。"
				],
				c: [{
					title: "SpacePiトークン",
					text: "複数のパブリックチェーンによってサポートされ、Pi Networkエコシステムの基盤として機能し、さまざまなアプリケーションにサービスを提供し、強力なアプリケーションシナリオを備えた新しいタイプのユーティリティトークン"
				}, {
					title: "SpacePiの紹介",
					text: "Pi Networkエコシステムは、WEB3.0ホログラフィックインターネットNFTおよびその他の技術コンポーネントに基づいており、メタバースの仮想空間における宇宙ユーザーにとって最も強力な技術サポーターになっています。"
				}, {
					title: "PI Network NFTs",
					text: "不均一で譲渡可能なデジタル資産である独自の特性は、Pi Networkエコシステムのアートコレクションまたはゲームの小道具になる可能性があります。"
				}, {
					title: "PI Network DAO",
					text: "SpacePiトークンは、Pi NetworkエコシステムのDAOでの投票に使用され、プロジェクトが自立していて、コントローラーがないことを確認します。"
				}, {
					title: "SpacePiメタバース",
					text: "SpacePiMetaversePi Networkエコシステムのゲーム化された3Dメタバース仮想空間"
				}, {
					title: "NFT市場",
					text: "SpacePiマーケットプレイスでは、参加者はPi NetworkNFTを管理および取引できます。Pi NetworkNFTは、流通通貨としてSpacePiで価格設定されています。"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}],
			Tokenomics: {
				text: "コミュニティは常に最初に来る",
				title: "フェアトークンエコロジー",
				content: "地球の外に民主的なキャリアを構築するために、PI Networkは公正なトークンエコロジーに基づいてリリースされます",
				array: [{
					title: "それなし",
					text: "開発税"
				}, {
					title: "それなし",
					text: "トークンの書き込み"
				}, {
					title: "120k+",
					text: "保有者"
				}]
			},
			ROADMAP: "路線図",
			ROADMAPtext: "これは、Pi Networkエコシステムを誕生から偉大さまで実現した計画です。",
			Phase1: "第一段階",
			Phase2: "第2段",
			r_title1: "ONE",
			r_title2: "TWO",
			rt1_text1: "公式ウェブサイトを立ち上げ、インテリジェントな協力を展開する",
			rt1_text2: "TelegramやTwitterなどのソーシャルメディア運用を開始",
			rt1_text3: "コミュニティメンバーのためにエアドロップの最初のラウンドを開きます",
			rt1_text4: "3000テレグラムメンバー",
			rt1_text5: "流動性配当をオンにする",
			rt1_text6: "上線CoinMarketCapp",
			rt1_text7: "上線CoinGecko",
			rt1_text8: "第三者機関の監査",
			rt1_text9: "マスマーケティングを開始する",
			rt1_text10: "コミュニティエアドロップの第2ラウンド",
			rt2_text1: "サードパーティのウォレットとの連携",
			rt2_text2: "",
			rt2_text3: "20万人以上のテレグラムメンバー",
			rt2_text4: "1000K以上のトークンホルダー",
			rt2_text5: "Pi NetworkSwapの開発を開始します",
			rt2_text6: "Pi NetworkNFTの開発を開始します",
			rt2_text7: "PiDAOを起動します",
			rt2_text8: "クロスチェーンアグリゲーショントランザクションプロトコルPi NetworkSwapを起動",
			rt2_text9: "市場のトップCEXを一覧表示",
			Community: {
				title: "SpacePiグローバルコミュニティに参加する",
				text: "PI Networkは、技術的な障壁を打ち破り、包括的なサービスプロバイダータイプの複数のクロスチェーンプロトコル証明書を統合する、ブロックチェーン分野で唯一のものになります。将来はすべてのブロックチェーンデジタルアセットプレーヤーに帰属します。この素晴らしい瞬間を目撃するために協力しましょう。",
				buttext: "参加しませんか",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			answers: {
				text: "PI Networkは、世界で唯一の包括的なサービスプロバイダータイプのマルチクロスチェーンプロトコルトークンです。",
				array: [{
					title: "1. PI Networkによって記述されるメタバースとは何ですか？",
					text: "ゲームはメタバースの主要な形式です。 製品フォームから、ゲームはメタバースのプロトタイプです。 シミュレーション、拡張、現実の想像力に基づいて人々が構築する仮想世界として、ゲームは製品の形でメタバースに似ています。 本や映画のReadyPlayerOneに精通している場合、これはメタバースの優れた例です。"
				}, {
					title: "2.メタバースは重要ですか？",
					text: "Web3.0、ホログラフィックインターネットテクノロジー、ブロックチェーン、NFTの統合に基づいて、メタバースの概念によって提示される価値は、インターネットのコアバリューと一致しています。 PI Networkは、メタバースがインターネットの究極の形である可能性があると考えています。 そのため、このゲームを出発点として、NFT +メタバースに基づく仮想ライフブロックチェーンゲームであるPI Networkを作成しました。これにより、現実と仮想のリンクがより効率的になり、価値の循環が豊かになります。 これらのデジタルプラットフォームの重要性は、最近の世界的大流行の間に明らかになりました。"
				}, {
					title: "3. Pi Networkエコシステムとは何ですか？",
					text: "NFT + Metaverseの概念によってサポートされるブロックチェーンゲームとして、PI Networkには、プラットフォームのエコロジー構築に関するいくつかのコアセクションが含まれています。NFTゲームシステムMetaverseゲームエコロジーPI Network Exchange "
				}, {
					title: "4. PI Networkメタバースで何ができるでしょうか？",
					text: "PI Networkと呼ばれるPI Networkトークンは、NFTとメタバースの2つの主要なブロックチェーンカテゴリを組み合わせて、キャラクター、小道具、ライフストーリーラインを仮想社会的相互作用に統合する分散型オンライン仮想現実ゲームプラットフォームを作成することを目的としています。武器、鎧、小道具、宝石は仮想世界で購入する。 さまざまなコレクションに参加して、仮想ゲーム、人生ゲーム、アクションゲーム、その他のゲームを開発します。 そのため、PI Networkは、メタバースドメインとNFTドメインにまたがる最初で唯一のプロジェクトです。"
				}, {
					title: "5. PI Networkメタバースでお金を稼ぐ方法は？",
					text: "PI Networkは、サードパーティの開発者がブロックチェーン環境向けの分散型ゲームアプリケーションとハイブリッドアーキテクチャゲームアプリケーションをプログラム、デバッグ、リリースすることもサポートできます。 同時に、PI Networkは、ブロックチェーンベースの分散ユーザーアカウントシステム、ウォレット、NFTデジタルアセットサーキュレーションを統合します。これにより、オフチェーンの永続的なストレージとアプリ内ゲームアセットNFTのクロスチェーン使用を実現できます。"
				}, {
					title: "6. PI Networkの開発者は？",
					text: "PI Network Metaverseは、世界中の独立した開発者によって共同開発されており、暗号関連のプロジェクトを指揮、管理、強化するためのほぼ比類のない経験と能力を備えています。 彼らは一緒になって、メタバースの世界への新しい冒険であるPI Networkメタバースのビジョンに自信を持って情熱を注ぐ、志を同じくするサポーターのグループと強力なチームを形成します。"
				}, {
					title: "7.どうすればもっと助けを提供できますか？",
					text: "完全な分散化により、PI Networkメタバースでは、目標を達成するためにはるかに大きなコミュニティが必要になります。PI Networkに参加してください。"
				}]
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "copySuccess",
			partners_title1: "PI Networkは常に",
			partners_title2: "PI NETWORKの忠実なファンになりましょう！",
			partners_text: "PI Networkが今していることはすべて、Piファンの永続性がそれだけの価値があることを証明することです！ SpacePiと協力するためのより多くのプラットフォームと機関を歓迎します。公式の連絡先メールアドレス：pi@space-pi.com",
			partners_email_title: "公式連絡先メールアドレス：",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	ddbe: function(t, e, a) {
		t.exports = a.p + "img/what2.1653575b.png"
	},
	e719: function(t) {
		t.exports = JSON.parse(
			'{"contractName":"PerSale","abi":[{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"address","name":"_moneyIn","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"inviter","type":"address"},{"indexed":true,"internalType":"address","name":"invitee","type":"address"}],"name":"BondInvite","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ETHIn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stage","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"UDENO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"airdropStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"airdropped","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"cashier","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"invitePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"perHTPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"perInviteAirdropAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stages","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setPerInviteAirdropAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTotalAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setAirdropStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPerHTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cashier","type":"address"}],"name":"setCashier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stage","type":"uint256"},{"internalType":"uint256","name":"blockNum","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"setStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"inviter","type":"address"}],"name":"getInvitee","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"player","type":"address"}],"name":"getInviteInfo","outputs":[{"components":[{"internalType":"address[]","name":"invites","type":"address[]"},{"internalType":"address","name":"inviter","type":"address"},{"internalType":"bool","name":"isInvited","type":"bool"}],"internalType":"struct PerSale.InviteInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"stage","type":"uint256"}],"name":"withdrawByStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getStage","outputs":[{"components":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"internalType":"struct PerSale.Stage[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserLock","outputs":[{"internalType":"uint256[4]","name":"locks","type":"uint256[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"inviter","type":"address"}],"name":"bondInvite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a1","type":"address"},{"internalType":"address","name":"a2","type":"address"}],"name":"checkIsInvite","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isInvited","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"airdrop","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getIsAirdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"address":"0xee5210a385C2a3Ef922b319523AeF19dBc3F343C"}'
		)
	},
	e87a: function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA2CAYAAAC2ldWuAAAABHNCSVQICAgIfAhkiAAAAopJREFUeF7l2ktuwjAQAFAbuu8Vuq0qIcQF2qPAyeAqvQBCbLrtFbpv5NaREpmQxON4fjZs69gzz2PjmlgD/DTX3dEZ8/m0OZ+Aj1TT7Pe621tj3teb8wGS1H/b+MeDGmv3vqVz7vBIsC2otcdWybkTBDaK2oM682OseX4k2BvQrvYAsLOoIehq3Xw0zWrbzVrtFRuC+ly9KbRiJ1GHoPbtcvEdDwercSuYyhG6FYyiToF2K6Bm2FhuENg71BhozbAx0LHcx768blChoDXCQkEhsD1qKmhNsKmgMdgWdSloDbBLQedgbS5oybC5oFOwFqvj0o5blHm3y59yAI3nWOp8+y8q6oHiNww8LTjyvDlScQzIQzc+Cld+d4d/roG5cTnzGv03lTMADlzufCYvVLgDocKVyGP26k8iIExcqfijl9RSgeXiSsYdRS3xHCsJ2l5mQytCOtCS4gSjllCxWiY+CVUzrBbQpOUfLj9NCWic6ORKpbjqy5mknGeH+zRWX4tRNVQIFgJ2Llmo2MGkIKW0jZ0cMPtavKdSLRvoJGEiYPbVuWRXKvcei4mA2VdYaGio0CqLLcW5ScJEwOxrmBMqKiWsf2kB681DSlC0PZVrj/Xj5L4YRw1KhkpVsSWAkqJiw7qv7Yt9vXxD92TK1ROLAX1PlUxmKlmOJU/27a8lqTAOblDy5S+dnAQoKyr2Hhvb16RA2VG5YCVBRVCpYaVBxVCpYDWAiqJiw2oBFUfFgtUEqgI1F1YbqBrUpbAaQVWhpsJqBVWHCoXVDKoSNQarHVQt6hRsCaCqUYewmD+nxO4Ncv9Ofp+aG2BYnb6v3Nv/3Hggz6tHDSu2BFD1yz+sityfUyAVhtXmD0D9B4I2yKn5AAAAAElFTkSuQmCC"
	},
	ec75: function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABHNCSVQICAgIfAhkiAAAAIRJREFUOE9jZMAD/l42ngSUzmX4/z+XWe/cFFxKGUcNwQiBQRQm0GjEGkmMjP/t/v9n1Gdk+H/wPwPjJeyK/r1iBBryH180E5T7z3CL8e8loxyciYiRIQRogz3jf4bVQPoQNnX/GRk+DKKAHU32JCb7K4Y1DP+YYv8z/m9m0T23BFf4AQDKkHzIu2RZPQAAAABJRU5ErkJggg=="
	},
	f1a7: function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "Rumah",
			url_buy_twitter: "Twitter",
			url_buy_telegram: "Telegram",
			index_SpacePi_Bscscan_t: "PI Network Bscscan",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "TELEGRAM",
			telegraph_more: "Lebih banyak Telegram",
			spacepiwep: {
				title: "SPISWAP",
				o: "Di atas kapal",
				bnt: "LAPORAN AUDIT",
				text: "Berdasarkan sudut pandang ini, PI Network telah menjadi alat investasi untuk membeli aset atau layanan virtual di ekosistemnya, dan akan meledak dengan vitalitas baru dan nilai yang belum pernah ada sebelumnya dengan penerapan SpacePi. Berikut adalah beberapa poin penting dari ekosistem SpacePi.",
				trend_bnt_title: "Tren SpacePi",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "PI Network AKAN SELALU MENJADI PENGGEMAR IMAN JARINGAN PI! SEGALA SESUATU YANG PI Network LAKUKAN SEKARANG ADALAH UNTUK MEMBUKTIKAN BAHWA KETEKUNAN PENGGEMAR PI LAYAK!",
			selectLang: "Pilih bahasa",
			happy_gd: "Mitra Lebih Ramah",
			happy_text: "Untuk membuat PI Network mencapai inovasi yang lebih besar, kami memutuskan untuk meningkatkan kontrak ke mekanisme yang paling aman, mengadopsi level yang sama dengan Token SHIBA. Kontrak yang ditingkatkan akan melepaskan semua izin dan terkunci. Alamat kontrak:",
			happy_text1: "PI Network akan selalu menjadi penggemar setia Pi Network!",
			happy_text2: "Semua yang PI Network lakukan sekarang adalah untuk membuktikan bahwa kegigihan Fans Pi itu sepadan!",
			doge: "Apa itu PI Network？",
			only: "Satu-satunya penyedia layanan yang komprehensif di dunia jenis beberapa token protokol lintas-rantai",
			introduce: "PI Network akan menjadi satu-satunya di bidang blockchain yang memecahkan hambatan teknis dan mengintegrasikan beberapa token protokol lintas-rantai dari jenis penyedia layanan terintegrasi. Masa depan adalah milik semua pemain aset digital blockchain. Mari kita bekerja sama untuk menyaksikan momen besar ini!",
			text: ["PI Network akan menciptakan ekosistem digital tingkat atas yang belum pernah ada sebelumnya, memberikan pengalaman perendaman digital metaverse yang sederhana dan efisien sebagai intinya. Memberikan nilai sirkulasi token, memungkinkan lebih banyak orang untuk berpartisipasi dalam konstruksi ekologis SpacePi, menciptakan dunia hiburan tanpa batas, menghubungkan pengguna di setiap sudut dunia, dan membangun ekologi metaverse yang tidak dapat dipercaya dan sangat terdesentralisasi untuk pengguna global.",
				"PI Network mencakup dua kategori blockchain utama, NFT dan Metaverse. PI Network sedang membangun platform game realitas virtual online terdesentralisasi yang mengintegrasikan karakter, alat peraga, dan alur cerita kehidupan ke dalam interaksi sosial virtual. Pemain bisa bermain di dunia maya. untuk membeli senjata, baju besi, alat peraga, dan permata. Berpartisipasi dalam koleksi yang berbeda untuk mengembangkan virtual, kehidupan, aksi dan permainan lainnya.",
				"Semua manfaat PI Network akan disajikan dalam bentuk token asli SpacePi. Virtual dan realitas metaverse PI Network sangat saling berhubungan, dan ekonomi loop tertutup yang melekat pada platform sumber terbuka telah menjadi bentuk akhir dari Internet."
			],
			tetxbu: "Kertas putih",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["Beli SpacePi"],
			index_Liquidity_title: "Likuiditas Terkunci",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Audit Goplus",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "Harga SpacePi",
			index_SpacePi: [{
				title: "Tren Dextools"
			}, {
				title: "Tren Poocoin"
			}, {
				title: "Tren Avedex"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "Apa itu PI Network？",
				content: "PI Network akan menciptakan ekosistem digital tingkat atas yang belum pernah ada sebelumnya, memberikan pengalaman perendaman digital metaverse yang sederhana dan efisien sebagai intinya."
			}, {
				title: "Dunia SpacePi",
				content: "Memberikan nilai sirkulasi token, memungkinkan lebih banyak orang untuk berpartisipasi dalam konstruksi ekologis SpacePi, menciptakan dunia hiburan tanpa batas, menghubungkan pengguna di setiap sudut dunia, dan membangun ekologi metaverse yang tidak dapat dipercaya dan sangat terdesentralisasi untuk pengguna global."
			}],
			station: {
				enter: "Ekosistem PI Network yang Kuat",
				title: "Akibatnya kita sedang membangun dunia digital yang belum pernah ada sebelumnya.",
				text: ["Ekonomi digital telah menjadi jenis aset sah yang layak dipertimbangkan investor, yang telah meledak secara eksponensial dalam jangka pendek.",
					"Berdasarkan sudut pandang ini, PI Network telah menjadi alat investasi untuk membeli aset atau layanan virtual di ekosistemnya, dan akan meledak dengan vitalitas baru dan nilai yang belum pernah ada sebelumnya dengan penerapan SpacePi. Berikut adalah beberapa poin penting dari ekosistem SpacePi."
				],
				c: [{
					title: "Token SpacePi",
					text: "Jenis token utilitas baru yang didukung oleh beberapa rantai publik, berfungsi sebagai fondasi dalam ekosistem SpacePi, melayani berbagai aplikasi, dengan skenario aplikasi yang kuat"
				}, {
					title: "Pengantar SpacePi",
					text: "Ekosistem PI Network didasarkan pada NFT Internet holografik WEB3.0 dan komponen teknis lainnya, dan telah menjadi pendukung teknis paling kuat untuk pengguna ruang di ruang virtual Metaverse."
				}, {
					title: "PI Network NFT",
					text: "Aset digital yang tidak homogen dan dapat dialihkan dengan karakteristik unik dapat menjadi koleksi seni atau penyangga permainan di ekosistem SpacePi."
				}, {
					title: "PI Network DAO",
					text: "Token PI Network akan digunakan untuk pemungutan suara di DAO di ekosistem PI Network untuk memastikan bahwa proyek itu mandiri dan tidak memiliki pengontrol."
				}, {
					title: "PI Network Metaverse",
					text: "Ruang Virtual Metaverse 3D Gamified di Ekosistem SpacePi"
				}, {
					title: "pasar NFT",
					text: "PI Network Marketplace memungkinkan peserta untuk mengelola dan memperdagangkan NFT SpacePi, yang diberi harga dalam PI Network sebagai mata uang sirkulasi"
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			hoce_token: "0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3",
			tron_token: "TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}, {
				title: "PI Network (heco)",
				url: "https://ht.mdex.co/#/swap?inputCurrency=HT&outputCurrency=0x4bed97ff445c1dfd7b2c60aaede15df0f1c25ed3"
			}, {
				title: "PI Network (tron)",
				url: "https://sunswap.com/#/home?tokenAddress=TBRNdxuRCzoS9rXkHPDmoaVyKBuCwdTAYX&type=swap"
			}],
			ROADMAP: "Peta jalan",
			ROADMAPtext: "Ini adalah rencana yang membuat ekosistem PI Network dari lahir menjadi besar.",
			Phase1: "Tahap pertama",
			Phase2: "Tahap kedua",
			r_title1: "SATU",
			r_title2: "DUA",
			rt1_text1: "Luncurkan situs web resmi dan terapkan kontrak pintar",
			rt1_text2: "Mulai operasi media sosial seperti Telegram dan Twitter",
			rt1_text3: "Buka putaran pertama airdrop untuk anggota komunitas",
			rt1_text4: "3000 anggota Telegram",
			rt1_text5: "Buka dividen likuiditas",
			rt1_text6: "Terdaftar di CoinMarketCap",
			rt1_text7: "Terdaftar di CoinGecko",
			rt1_text8: "Audit agensi pihak ketiga",
			rt1_text9: "Memulai pemasaran massal",
			rt1_text10: "Putaran kedua komunitas airdrop",
			rt2_text1: "Kerjasama dengan dompet pihak ketiga",
			rt2_text2: "",
			rt2_text3: "200K+ anggota Telegram",
			rt2_text4: "120k+ pemegang token",
			rt2_text5: "Mulai pengembangan Pi NetworkSwap",
			rt2_text6: "Mulai pengembangan Pi NetworkNFT",
			rt2_text7: "Mulai PiDAO",
			rt2_text8: "Meluncurkan protokol transaksi agregasi lintas rantai Pi NetworkSwap",
			rt2_text9: "Buat daftar CEX teratas di pasar",
			Tokenomics: {
				text: "Komunitas selalu didahulukan",
				title: "Ekologi token yang adil",
				content: "Untuk membangun pembawa demokratis kami di luar bumi, PI Network didasarkan pada rilis ekologis token yang adil, tidak ada token pribadi, tidak ada pajak pembangunan.",
				array: [{
					title: "Tidak ada",
					text: "pajak pembangunan"
				}, {
					title: "Tidak ada",
					text: "Pembakaran token"
				}, {
					title: "120k+",
					text: "Pemegang"
				}]
			},
			answers: {
				text: "PI Network adalah satu-satunya penyedia layanan komprehensif jenis beberapa token protokol lintas-rantai di dunia",
				array: [{
					title: "1.Apa metaverse yang dijelaskan oleh PI Network？",
					text: "Game adalah bentuk utama dari metaverse. Dari bentuk produk, game merupakan prototipe dari metaverse. Sebagai dunia virtual yang dibangun oleh orang-orang berdasarkan simulasi, perluasan, dan imajinasi imajinatif realitas, game serupa dalam bentuk produk dengan Metaverse. Jika Anda akrab dengan buku atau film Ready Player One, ini adalah contoh metaverse yang bagus."
				}, {
					title: "2.Apakah Metaverse Itu Penting?",
					text: "Berdasarkan integrasi Web3.0, teknologi Internet holografik, blockchain dan NFT, nilai-nilai yang disajikan oleh konsep Metaverse sejalan dengan nilai-nilai inti Internet. PI Network percaya bahwa metaverse mungkin merupakan bentuk akhir dari Internet. Oleh karena itu, kami mengambil game sebagai titik awal dan menciptakan SpacePi, game blockchain kehidupan virtual berdasarkan NFT+ metaverse, yang membuat hubungan antara realitas dan virtualitas lebih efisien dan memperkaya sirkulasi nilai. Pentingnya platform digital ini menjadi jelas selama pandemi global baru-baru ini."
				}, {
					title: "3. Apa itu Ekosistem PI Network？",
					text: "Sebagai game blockchain yang didukung oleh konsep NFT + Metaverse, PI Network menyertakan beberapa bagian inti dalam hal konstruksi ekologi platform. Sistem permainan NFT Ekologi permainan Metaverse PI Network Exchange"
				}, {
					title: "4.Apa yang bisa kita lakukan di metaverse PI Network？",
					text: "PI Network Token, disebut sebagai PI Network, menggabungkan dua kategori blockchain utama NFT dan Metaverse, yang bertujuan untuk menciptakan platform game realitas virtual online terdesentralisasi yang mengintegrasikan karakter, alat peraga, dan alur cerita kehidupan ke dalam interaksi sosial virtual. Senjata, baju besi, alat peraga, dan permata dapat dibeli di dunia maya. Berpartisipasi dalam koleksi yang berbeda untuk mengembangkan virtual, kehidupan, aksi dan permainan lainnya. Dengan demikian, PI Network adalah proyek pertama dan satu-satunya di seluruh domain metaverse dan NFT"
				}, {
					title: "5.Bagaimana cara mendapatkan uang di Metaverse PI Network？",
					text: "PI Network juga dapat mendukung pengembang pihak ketiga untuk memprogram, men-debug, dan merilis aplikasi game terdesentralisasi dan aplikasi game arsitektur hybrid untuk lingkungan blockchain. Pada saat yang sama, PI Network mengintegrasikan sistem akun pengguna terdistribusi berbasis blockchain, dompet dan sirkulasi aset digital NFT, yang dapat mewujudkan penyimpanan permanen off-chain dan penggunaan lintas-rantai aset game dalam aplikasi NFT."
				}, {
					title: "6.Pengembang PI Network？",
					text: "PI Network Metaverse dikembangkan bersama oleh pengembang independen di seluruh dunia, dengan pengalaman dan kemampuan yang hampir tak tertandingi untuk mengarahkan, mengelola, dan meningkatkan proyek terkait kripto. Bersama-sama, mereka membentuk tim yang kuat dengan sekelompok pendukung yang berpikiran sama yang percaya diri dan bersemangat tentang visi metaverse SpacePi, sebuah petualangan baru ke dunia metaverse."
				}, {
					title: "7. Bagaimana saya bisa memberikan lebih banyak bantuan?",
					text: "Karena desentralisasi lengkap, metaverse PI Network akan membutuhkan komunitas yang jauh lebih besar untuk mencapai tujuan kami, Anda dipersilakan untuk bergabung dengan PI Network"
				}]
			},
			Community: {
				title: "Bergabunglah dengan komunitas global SpacePi",
				text: "PI Network akan menjadi satu-satunya di bidang blockchain yang memecahkan hambatan teknis dan mengintegrasikan beberapa token protokol lintas-rantai dari jenis penyedia layanan terintegrasi. Masa depan adalah milik semua pemain aset digital blockchain. Mari kita bekerja sama untuk menyaksikan momen besar ini!",
				buttext: "Bergabunglah dengan kami",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "copySuccess",
			partners_title1: "PI Network AKAN SELALU",
			partners_title2: "JADILAH PENGGEMAR IMAN JARINGAN PI!",
			partners_text: "Semua yang PI Network lakukan sekarang adalah untuk membuktikan bahwa kegigihan Fans Pi itu sepadan! Selamat datang lebih banyak platform dan institusi untuk bekerja sama dengan SpacePi, email kontak resmi: pi@space-pi.com",
			partners_email_title: "EMAIL KONTAK RESMI:",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	f652: function(t, e, a) {
		t.exports = a.p + "img/dextools.438054e7.png"
	},
	f6b6: function(t, e, a) {
		t.exports = a.p + "img/concept_space_capsule.06e5fef7.png"
	},
	f774: function(t, e, a) {
		"use strict";
		a.r(e);
		var i = {
			home: "첫 페이지",
			url_buy_twitter: "트위터",
			index_SpacePi_Bscscan_t: "SpacePi브라우저",
			index_SpacePi_Bscscan: "https://bscscan.com/token/0x0a6231128a5140dba469553ae34a92e830974b90",
			telegraph: "전신",
			telegraph_more: "더 많은 전보",
			spacepiwep: {
				title: "SPISWAP",
				o: "온보드",
				bnt: "감사 보고서",
				text: "이러한 관점에서 PI Network는 생태계에서 가상 자산 또는 서비스를 구매하기 위한 투자 도구가 되었으며 Pi Network의 적용으로 새로운 활력과 전례 없는 가치로 폭발할 것입니다. 다음은 PI Network 생태계의 몇 가지 핵심 사항입니다.",
				trend_bnt_title: "스페이스파이 트렌드",
				trend_bnt_url: "https://www.baidu.com/?tn=44004473_35_oem_dg"
			},
			partners_carousel_text: "PI Network는 항상 PI NETWORK의 믿음직한 팬이 될 것입니다! PI Network가 지금 하는 모든 일은 PI 팬의 끈기가 가치가 있다는 것을 증명하는 것입니다!",
			selectLang: "언어 선택",
			happy_gd: "더 친근한 파트너",
			happy_text: "PI Network가 더 큰 혁신을 달성할 수 있도록 SHIBA 토큰과 동일한 수준을 채택하여 가장 안전한 메커니즘으로 계약을 업그레이드하기로 결정했습니다. 업그레이드된 계약은 모든 권한을 포기하고 잠깁니다. 계약 주소:",
			happy_text1: "PI Network는 항상 Pi Network의 믿음의 팬이 될 것입니다!",
			happy_text2: "지금 PI Network가 하는 모든 일은 Pi Fan의 끈기가 그만한 가치가 있음을 증명하는 것입니다!",
			doge: "스페이스파이란?",
			only: "세계 유일의 종합 서비스 제공자 유형 다중 크로스 체인 프로토콜 토큰",
			introduce: "PI Network는 기술 장벽을 허물고 포괄적인 서비스 제공자 유형의 여러 크로스 체인 프로토콜 인증서를 통합하는 블록체인 분야의 유일한 사람이 될 것입니다.미래는 모든 블록체인 디지털 자산 플레이어의 것입니다.이 위대한 순간을 목격하기 위해 함께 협력합시다!",
			text: ["PI Network는 간단하고 효율적인 메타버스 디지털 몰입 경험을 핵심으로 제공하는 전례 없는 최상위 디지털 생태계를 만들 것입니다. 토큰 순환의 가치를 부여하고 더 많은 사람들이 Pi Network의 생태 건설에 참여하도록 하고 국경 없는 엔터테인먼트 세계를 만들고 전 세계 사용자를 연결하고 글로벌 사용자를 위한 무신뢰 및 고도로 분산된 메타버스 생태계를 구축합니다.",
				"PI Network는 NFT와 Metaverse의 두 가지 주요 블록체인 범주를 포함합니다. PI Network는 캐릭터, 소품 및 삶의 스토리를 가상의 사회적 상호 작용에 통합하는 분산형 온라인 가상 현실 게임 플랫폼을 구축하고 있습니다. 플레이어는 가상 세계에서 플레이할 수 있습니다. 무기, 갑옷, 소품 구매 그리고 보석. 가상, 생활, 액션 및 기타 게임을 개발하기 위해 다양한 컬렉션에 참여하십시오.",
				"Pi Network의 모든 이점은 기본 토큰 Pi Network의 형태로 제공됩니다. PI Network 메타버스의 가상과 현실은 고도로 상호 연결되어 있으며, 오픈 소스 플랫폼에 연결된 폐쇄 루프 경제는 인터넷의 최종 형태가 되었습니다."
			],
			tetxbu: "백서 읽기",
			tetxbu_url: "https://drive.google.com/file/d/1SM-Cf646IGJ1_NDHJsMHABOi9f12xtvo/view?usp=sharing",
			contractAddress: "",
			down: ["PI Network 구매"],
			index_Liquidity_title: "모빌리티 락",
			index_Liquidity: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC",
			index_Goplus_title: "Goplus 감지하다",
			index_Goplus: "https://gopluslabs.io/token-security/56/0x0a6231128a5140dba469553ae34a92e830974b90",
			index_SpacePi_title: "PI Network 가격",
			index_SpacePi: [{
				title: "Dextools 경향"
			}, {
				title: "Poocoin 경향"
			}, {
				title: "Avedex 경향"
			}, {
				title: "Msgsender"
			}],
			car: [{
				title: "스페이스파이란?",
				content: "PI Network는 간단하고 효율적인 메타버스 디지털 몰입 경험을 핵심으로 제공하는 전례 없는 최상위 디지털 생태계를 만들 것입니다."
			}, {
				title: "SpacePi세계",
				content: "토큰 유통 가치를 부여하고 더 많은 사람들이 PI Network 의 생태 건설에 참여하도록 하고 국경 없는 엔터테인먼트 세계를 만들고 전 세계 사용자를 연결하고 글로벌 사용자를 위한 무신뢰 및 고도로 분산된 메타버스 생태계를 구축합니다."
			}],
			station: {
				enter: "강력한 PI Network 생태계",
				title: "우리는 실제로 전례 없는 디지털 세계를 구축하고 있습니다.",
				text: ["디지털 경제는 투자자들이 고려할 가치가 있는 합법적인 자산 유형이 되었으며 단기적으로 기하급수적으로 폭발했습니다.",
					"이러한 관점에서 PI Network는 생태계에서 가상 자산 또는 서비스를 구매하기 위한 투자 도구가 되었으며 Pi Network의 적용으로 새로운 활력과 전례 없는 가치로 폭발할 것입니다. 다음은 PI Network 생태계의 몇 가지 핵심 사항입니다."
				],
				c: [{
					title: "PI Network 토큰",
					text: "강력한 애플리케이션 시나리오와 함께 다양한 애플리케이션에 서비스를 제공하는 PI Network 생태계의 기반 역할을 하는 여러 퍼블릭 체인에서 지원되는 새로운 유형의 유틸리티 토큰"
				}, {
					title: "PI Network 소개",
					text: "PI Network 생태계는 WEB3.0 홀로그램 인터넷 NFT 및 기타 기술 구성 요소를 기반으로 하며 메타버스의 가상 공간에서 우주 사용자를 위한 가장 강력한 기술 서포터가 되었습니다."
				}, {
					title: "PI Network NFTs",
					text: "고유한 특성을 가진 비균질 및 양도 가능한 디지털 자산은 PI Network 생태계에서 예술 컬렉션 또는 게임 소품이 될 수 있습니다."
				}, {
					title: "PI Network DAO",
					text: "PacePi 토큰은 PI Network 생태계의 DAO 투표에 사용되어 프로젝트가 자체 유지되고 컨트롤러가 없는지 확인합니다."
				}, {
					title: "PI Network 메타버스",
					text: "PI Network 생태계의 게임화된 3D 메타버스 가상 공간"
				}, {
					title: "NFT 시장",
					text: "PI Network Marketplace를 통해 참가자는 SpacePi에서 유통되는 통화로 가격이 책정된 PI Network NFT를 관리하고 거래할 수 있습니다."
				}]
			},
			car1: [{
				text: "Pi Network",
				title: "SpacePi",
				trx: "10 BNB",
				usd: "3750 USD"
			}, {
				text: "Metauniverse",
				title: "PI Network Game",
				trx: "6.6 BNB",
				usd: "2390 USD"
			}, {
				text: "Elon Musk",
				title: "Astronaut",
				trx: "19 BNB",
				usd: "7030 USD"
			}],
			bsc_token: "0x0a6231128a5140dba469553ae34a92e830974b90",
			url_array: [{
				title: "PI Network (bsc)",
				url: "https://PancakeSwap.finance/swap?inputCurrency=BNB&outputCurrency=0x0a6231128a5140dba469553ae34a92e830974b90"
			}],
			Tokenomics: {
				text: "커뮤니티는 항상 먼저입니다",
				title: "공정한 토큰 생태계",
				content: "지구 밖에서 민주적인 캐리어를 구축하기 위해 PI Network는 공정한 토큰 생태계를 기반으로 출시됩니다.",
				array: [{
					title: "없이",
					text: "세"
				}, {
					title: "없이",
					text: "토큰 소각"
				}, {
					title: "120k+",
					text: "보유자"
				}]
			},
			ROADMAP: "노선지도",
			ROADMAPtext: "이것이 PI Network 생태계를 탄생부터 위대하게 만든 계획입니다.",
			Phase1: "첫 번째 단계",
			Phase2: "두 번째 단계",
			r_title1: "ONE",
			r_title2: "TWO",
			rt1_text1: "공식 웹 사이트 시작 및 스마트 계약 배포",
			rt1_text2: "Telegram 및 Twitter와 같은 소셜 미디어 운영 시작",
			rt1_text3: "커뮤니티 회원을 위한 1차 에어드롭 공개",
			rt1_text4: "텔레그램 회원 3000명",
			rt1_text5: "유동성 배당금 켜기",
			rt1_text6: "코인마켓캡 상장",
			rt1_text7: "온라인 CoinGecko",
			rt1_text8: "제3자 기관 감사",
			rt1_text9: "매스 마케팅 시작",
			rt1_text10: "2차 커뮤니티 에어드랍",
			rt2_text1: "타사 지갑과의 협력",
			rt2_text2: "",
			rt2_text3: "200K+ 텔레그램 회원",
			rt2_text4: "120k+ 토큰 보유자",
			rt2_text5: "Pi NetworkSwap 개발 시작",
			rt2_text6: "Pi NetworkNFT 개발 시작",
			rt2_text7: "PiDAO 시작",
			rt2_text8: "크로스체인 집계 트랜잭션 프로토콜 Pi NetworkSwap 출시",
			rt2_text9: "시장에서 최고의 CEX 나열",
			Community: {
				title: "PI Network 글로벌 커뮤니티 가입",
				text: "PI Network는 기술 장벽을 허물고 포괄적인 서비스 제공자 유형의 여러 크로스 체인 프로토콜 인증서를 통합하는 블록체인 분야의 유일한 사람이 될 것입니다.미래는 모든 블록체인 디지털 자산 플레이어의 것입니다.이 위대한 순간을 목격하기 위해 함께 협력합시다!",
				buttext: "加入我们",
				buttext_url: "https://t.me/PI_NetworkCN"
			},
			answers: {
				text: "PI Network는 세계 유일의 포괄적인 서비스 제공자 유형의 다중 크로스 체인 프로토콜 토큰입니다.",
				array: [{
					title: "1. PI Network가 설명하는 메타버스는 무엇입니까?",
					text: "게임은 메타버스의 기본 형태입니다. 제품 형태에서 게임은 메타버스의 원형입니다. 현실의 시뮬레이션, 확장, 상상적 상상을 바탕으로 사람이 만들어가는 가상세계로서 게임은 메타버스와 제품 형태가 유사하다. 책이나 영화 레디 플레이어 원에 대해 잘 알고 있다면 이것은 메타버스의 좋은 예입니다."
				}, {
					title: "2. 메타버스가 중요합니까?",
					text: "Web3.0, 홀로그램 인터넷 기술, 블록체인, NFT의 통합을 기반으로 메타버스의 개념이 제시하는 가치는 인터넷의 핵심 가치와 일맥상통합니다. PI Network는 메타버스가 인터넷의 궁극적인 형태가 될 수 있다고 믿습니다. 따라서 우리는 게임을 출발점으로 NFT+ 메타버스를 기반으로 한 가상 생활 블록체인 게임 SpacePi를 만들었습니다. 이러한 디지털 플랫폼의 중요성은 최근의 세계적 대유행 동안 명백해졌습니다."
				}, {
					title: "3. PI Network 생태계란 무엇입니까?",
					text: "NFT + Metaverse의 개념을 지원하는 블록체인 게임으로서 PI Network는 플랫폼 생태 구축 측면에서 여러 핵심 섹션을 포함합니다. NFT 게임 시스템 Metaverse 게임 생태 PI Network Exchange "
				}, {
					title: "4. PI Network 메타버스에서 무엇을 할 수 있습니까?",
					text: "SpacePi라고 하는 PI Network 토큰은 NFT와 Metaverse의 두 가지 주요 블록체인 범주를 결합하여 캐릭터, 소품 및 삶의 이야기를 가상의 사회적 상호 작용에 통합하는 분산형 온라인 가상 현실 게임 플랫폼을 만드는 것을 목표로 합니다. 가상 세계에서 구입하십시오. 가상, 생활, 액션 및 기타 게임을 개발하기 위해 다양한 컬렉션에 참여하십시오. 따라서 PI Network는 메타버스 및 NFT 도메인 전반에 걸친 최초이자 유일한 프로젝트입니다."
				}, {
					title: "5. PI Network Metaverse에서 어떻게 돈을 벌 수 있습니까?",
					text: "PI Network는 또한 타사 개발자가 블록체인 환경을 위한 분산형 게임 응용 프로그램 및 하이브리드 아키텍처 게임 응용 프로그램을 프로그래밍, 디버그 및 출시하도록 지원할 수 있습니다. 동시에 PI Network는 블록체인 기반 분산 사용자 계정 시스템, 지갑 및 NFT 디지털 자산 순환을 통합하여 인앱 게임 자산 NFT의 오프 체인 영구 저장 및 크로스 체인 사용을 실현할 수 있습니다."
				}, {
					title: "6. Pi Network의 개발자?",
					text: "PI Network Metaverse는 거의 비할 데 없는 경험과 암호 관련 프로젝트를 지시, 관리 및 향상할 수 있는 능력을 갖춘 전 세계의 독립 개발자에 의해 공동 개발되었습니다. 그들은 함께 메타버스 세계로의 새로운 모험인 PI Network 메타버스의 비전에 대해 확신과 열정을 가진 같은 생각을 가진 지지자들과 함께 강력한 팀을 형성합니다."
				}, {
					title: "7. 어떻게 더 많은 도움을 줄 수 있습니까?",
					text: "완전한 탈중앙화로 인해 PI Network 메타버스는 우리의 목표를 달성하기 위해 훨씬 더 큰 커뮤니티가 필요합니다. PI Network에 가입하실 수 있습니다."
				}]
			},
			footer1: "If you have any question, please contact us",
			footer2: "Copyright © 2021-2022 PI Network. All Rights Reserved",
			footer_twitter_url: "https://twitter.com/SpacePi_Com",
			footer_telegram_url: "https://t.me/PI_NetworkCN",
			footer_discord_url: "https://t.me/PI_NetworkCN",
			footer_reddit_url: "https://t.me/PI_NetworkCN",
			footer_github_url: "https://github.com/SpacePiCom",
			footer_medium_url: "https://medium.com/@spacepi",
			footer_copy_url: "https://t.me/PI_NetworkCN",
			copySuccess: "복사 성공",
			partners_title1: "PI Network는 항상",
			partners_title2: "PI NETWORK의 믿음직한 팬이 되십시오!",
			partners_text: "지금 PI Network가 하는 모든 일은 Pi Fan의 끈기가 그만한 가치가 있음을 증명하는 것입니다! PI Network와 협력할 더 많은 플랫폼 및 기관을 환영합니다. 공식 연락처 이메일: pi@space-pi.com",
			partners_email_title: "공식 연락처 이메일:",
			partners_email: "pi@space-pi.com"
		};
		e["default"] = i
	},
	f997: function(t, e, a) {},
	f9ed: function(t, e) {
		t.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABoCAYAAABmOHdtAAAABHNCSVQICAgIfAhkiAAABTNJREFUeF7tnY9VE0EQxi8VKBUYKhAqMFagViBUoFQgVqBUQKjAUIGhAkMFHhWIFeD3hT25B3dkdmb3bpM389698GfnbvaXb/9mdzOpCrCD6miKMN7h4utBeOXPbavxC69VeL1cVXP+PqpNxno6oBHUR1zvAzBNKAS4wHUBmAQ7uA0O8KA6htLuPiOns8S5XeJ+XwGSr4PZYAChOAL7hovKy2lU4slQILMDBLiXyNAXXFTdkPY9KPI250OzAgz13PkAqutjRDUe56wfswEM8H4iA1TgmEYFvs0FMQtAwDtC0FReSUYlzlMHlBxgaCyovBKNSlymDCwpwIKKbR+j5MU5GcDQ2v5C5FPjO3wD/xoXG4CmBWU92oxQXhnvz/tSiUla55QAfyAwjio0Rmjsdiw2Dc+CymdIy26RFiaGLfNjTaCPfZIANNR7BHeqrdxDY3WqBJmkPkwF8Lei6F5QRdaiFKoOqpfj6hir8ez9GIeutGaAyi4Lh1rMdDJDHCzSHCrGmLlrkwJgrPrMQfcRUryZZhWaACJgNhpsPKTG2RLWWdkMMfH+HHtL7QNi4pSYyqwA53iqtO7hBKi2lY7KHCASCCdoJca5xCNJwq40VoB3EQ/e39RFibjXs0nDDDerFondIq49ScKkACO7LmcIctDpLMQXUzrUXRq1AiPrmj1rdyVWIaF780fop66bLQCXCO6NIMBrwMs9C90ZBiBy2PZaEOMVYpwJ0j1JYgEo7b4k7/NJMxrRN1wB4KH0vu10FoDSBkRdv2gy1PaJqacBUMVC5cQgEZwIoDYwK7zGP3ecKoAxFfS2AARwVUOnBcgKVzLrfAOA01Rq0twHb3YNP8m0l6qqyQ1Q3bppYHX5AKC0t+AAdxEg5uV1rZsrMBBwgB1SGKJ/5Qp0BfZrwBX4wCZ3N8YbkZ6ugbQj7QAd4PPNmRfhBz5FjkS8CHsR9iK81ZMJXoS9CEcW4bARZtOnaM2CR8mQlUVoTGNeJAvd2ws6e+Kd4MOn88v2P/93Y8LCRa5zmY6Z2y14do0YuZ6GwKs1QMUioS3IZ/YQ14uSJuEDIn7GK5F59qi26AFcY71PgFzo+GmLAi8p1DMClK4wKCnwUmJZEaDoA/JSIi4tDgdofEccoAM0EjC6uwIdoJGA0d0V6ACNBIzurkAHaCRgdC9VgdwGy91G7Q3X3OUkWShpRBLnXhrAa4TPLbDLrmyEJSWc/JBsXYgjoUxdEkDxnrXIXUhKNDK3UgBGb0SM3FAoo6FIVQLAv4h7GrsVLEwE1/B9och3MpcSAKo3IpYwGVwCwEPtsUzhgzAetTKajQ7QuoZ67AlhB2jU7ugAEb9qixXzHbPlzMip170EgKp1eQHgDK+SLWe5+FUlABR3oB9TKKFDXQJAcokuxpEHS+y0Apm5qBPVQt3HortpEVQ2cM2NS1Eg4+HsC081evZYugCPp2MOcgbNpnegJICMlfDYsa67Ag/FlsqbbsrYUP8vDSDz3dsqx+yQcoAdBBygTBauQBmn3lQO0AEaCRjdXYEO0EjA6O4KdIBGAkZ3V6AR4GJSTTqPSL67/yqhIsbATR5LHMoZ+Q/r7gCNvB2gAzQSMLq7Ah2gkYDR3RXoAI0EjO6uQAdoJGB0dwU6QCMBozsVKD2w3/ionXS/JkDNlzntJA1Fpk4IkKd11LhGXaytCH5sl/Xi+ObcGC7SWTpE8XtCeDOu7W6fXDTFH+e4JF+yIn7SDia8Qp7QcNyv33lygmVYwENFjr50rDD4bGz5xS1rcI39AwNSGQWB7Ap1AAAAAElFTkSuQmCC"
	},
	fc39: function(t, e, a) {
		"use strict";
		a("0f56")
	}
});
