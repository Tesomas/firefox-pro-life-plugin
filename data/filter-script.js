var textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

var RE = new RegExp("anti-choice|anti choice|antichoice|antiabortion|anti-abortion|anti abortion", "gm");

var replace = "pro-life";

for (var i=0; i<textNodes.snapshotLength;i++){
	var node = textNodes.snapshotItem(i);
	node.data = node.data.replace(RE, replace);
}
var RE = new RegExp("anti-Choice|anti choice|antichoice|antiabortion|anti-abortion|anti abortion", "gim");

var replace = "Pro-life";

for (var i=0; i<textNodes.snapshotLength;i++){
	var node = textNodes.snapshotItem(i);
	node.data = node.data.replace(RE, replace);
}
var RE = new RegExp("^anti$|^anti-$", "gim");
var RE2 = new RegExp("^-abortion$|^-choice$|^abortion$|^choice$", "gim");
var RE3 = new RegExp("^-$");
var RE4 = new RegExp("^choice$|^abortion$","gim");
var replace = "Pro-"
var replace2 = "life"
var replace3 = "Pro"
for (var i=0; i<textNodes.snapshotLength;i++){
	var node = textNodes.snapshotItem(i);
	var ret = node.data.search(RE);
	console.log(node.data);
	if (ret != -1){
		if (i + 1 > textNodes.snapshotLength){
			break;
		}
		var node2 = textNodes.snapshotItem(i+1);
		var ret2 = node2.data.search(RE2);
		if (ret2 != -1){
			node.data = node.data.replace(RE,replace);
			node2.data = node2.data.replace(RE2,replace);
		}
		else{
			var ret3 = node2.data.search(RE3);
			if (ret3 != -1){
				if (i + 2 > textNodes.snapshotLength){
					break;
				}
				var node3 = textNodes.snapshotItem(i+2);
				var ret4 = node3.data.search(RE4);
				if (ret4 != -1){
					node.data =node.data.replace(RE, replace3);
					node3.data = node3.data.replace(RE4, replace2);	
				}
			}
		}
		
	}
}		
