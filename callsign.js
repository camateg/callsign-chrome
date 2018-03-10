function getword(info,tab) {
  console.log("Look up callsign " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "http://callook.info/" + info.selectionText,
  });           
}
chrome.contextMenus.create({
  title: "Look up callsign: %s", 
  contexts:["selection"], 
  onclick: getword,
});
