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
			for(var i = 0; i < itemCount_; i++)
			{
				var num = getRandomNumberFromArr_();

				createItems_(itemArr_[num]);
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

	getItemsFromArray_();
}

window.onload = init;