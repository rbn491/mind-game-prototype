function init()
{
	var isPregame_ = true;
	var itemCount_ = 3;
	var pregameInterval_ = 5000;
	var gameContainer_ = document.querySelector(".game-container .item-wrapper");

	var itemArr_ = [
		"blue", "red", "green", "black", "purple",
		"yellow", "grey", "pink", "lime", "lightblue"
	];



	function getItemsFromArray_()
	{
		if(isPregame_)
		{
			var arr = shuffle(itemArr_);

			for(var i = 0; i < itemCount_; i++)
			{
				createItems_(arr[i]);
			}
		}
	}

	function getRandomNumberFromArr_()
	{
		var number = Math.floor(Math.random() * itemArr_.length)
		console.log(number);

		return number;
	}

	function createItems_(param)
	{
		var item = document.createElement("div");
		item.classList.add("game-item", param);

		gameContainer_.appendChild(item);
	}

	/*
	 * src: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?noredirect=1&lq=1
	 */
	function shuffle(array)
	{
		var currIndex = array.length, tempVal, ranIndex;

		while(0 != currIndex)
		{
			ranIndex = Math.floor(Math.random() * currIndex);
			currIndex -= 1;

			tempVal = array[currIndex];
			array[currIndex] = array[ranIndex];
			array[ranIndex] = tempVal;
		}

		return array;
	}

	getItemsFromArray_();
}

window.onload = init;