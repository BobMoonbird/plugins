rtb.onReady(() => {
	rtb.addListener(rtb.enums.event.SELECTION_UPDATED, getWidget)
	getWidget()
})

async function getWidget() {
	let widget = await rtb.board.getSelection()
	let text = widget[0]['text']
	const widgetText = document.getElementById('widget-text')
	widgetText.value = String(text)
}

async function convertFromList() {
	let widget = await rtb.board.getSelection()
	xCoord = widget[0].x
	yCoord = widget[0].y
	
	var newText = document.getElementById("widget-text").value
	stickiesList = newText.split(" - ")
	
	for (var i = 0; i < stickiesList.length; i++) {
		rtb.board.widgets.stickers.create({text: stickiesList[i], x: xCoord, y: yCoord+100})
		xCoord = xCoord+200

	}
	
}
