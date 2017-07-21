function init()
{
	var itemCount_ = 3;
	var pregameInterval_ = 5000;
	var gameContainer_ = document.querySelector(".game-container");
	var itemWrapperShow_ = document.querySelector(".item-wrapper.show");
	var itemWrapperPlay_ = document.querySelector(".item-wrapper.play");
	var isPregame_ = gameContainer_.classList.contains("pregame");

	var itemArr_ = [
		"blue", "red", "green", "black", "purple",
		"yellow", "grey", "pink", "lime", "lightblue"
	];

	var savedItems_, checkingArr_ =  [];




	function getItemsFromArray_(count)
	{
		var arr = shuffle(itemArr_);

		if(count != null)
		{
			for(var i = 0; i < count; i++)
			{
				createItems_(arr[i]);
				savedItems_.push(arr[i]);
			}
		}
		else
		{
			for(var i = 0; i < itemArr_.length; i++)
			{
				createItems_(arr[i]);
			}
		}
	}


	// function getRandomNumberFromArr_()
	// {
	// 	var number = Math.floor(Math.random() * itemArr_.length)
	// 	console.log(number);

	// 	return number;
	// }


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


	function createItems_(param)
	{
		var item = document.createElement("div");
		item.classList.add("game-item", param);
		item.dataset.itemId = param;

		itemWrapperShow_.appendChild(item);
	}


	function handleItemClick_()
	{
		var items = document.querySelectorAll("div.game-item");
		var attr;

		for(var i = 0; i < items.length; i++)
		{
			items[i].addEventListener("click", function()
			{
				attr = event.currentTarget.dataset.itemId;
				console.log(attr);

				checkingArr_.push(attr);
				console.log(checkingArr_);
			});
		}
	}


	function constructGame_()
	{
		if(isPregame_)
		{
			getItemsFromArray_(itemCount_);
			console.log(savedItems_);
		}
		else
		{
			getItemsFromArray_();
			handleItemClick_();
		}
	}

	constructGame_();
}

window.onload = init;