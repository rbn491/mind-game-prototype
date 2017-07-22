function init()
{
	var itemCount_ = 3;
	var pregameTimer_ = null;
	var pregameTimeout_ = 5000;
	var gameContainer_ = document.querySelector(".game-container");
	var itemWrapper_ = document.querySelector(".item-wrapper");
	var isPregame_ = gameContainer_.classList.contains("pregame");

	var itemArr_ = [
		"blue", "red", "green", "black", "purple",
		"yellow", "grey", "pink", "lime", "lightblue"
	];

	var savedItems_ =  [];
	var checkingArr_ = [];
	var isEqual_ = false;




	function getItemsFromArray_(count)
	{
		var arr = shuffle(itemArr_);

		if(count != null)
		{
			for(var i = 0; i < count; i++)
			{
				createItems_(arr[i], "intro");
				savedItems_.push(arr[i]);
				savedItems_.sort();
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


	function createItems_(param, intro)
	{
		var item = document.createElement("div");

		if(intro != null)
			item.classList.add("game-item", intro, param);
		else
			item.classList.add("game-item", param);

		item.dataset.itemId = param;

		itemWrapper_.appendChild(item);
	}


	function deleteItems_(all)
	{
		var deleteAll = all;

		if(deleteAll)
		{
			var itemsToDelete = document.querySelectorAll("div.game-item");

			for(var i = 0; i < itemsToDelete.length; i++)
			{
				itemWrapper_.removeChild(itemsToDelete[i]);
			}
		}
		else
		{
			var itemsToDelete = document.querySelectorAll("div.game-item.intro");

			for(var i = 0; i < itemsToDelete.length; i++)
			{
				itemWrapper_.removeChild(itemsToDelete[i]);
			}
		}
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
				checkingArr_.push(attr);
				checkingArr_.sort();

				console.log(checkingArr_);

				compareArr_(savedItems_, checkingArr_);
			});
		}
	}


	function compareArr_(arr1, arr2)
	{
		isEqual_ = arr1.length == arr2.length && arr1.every(function(element, index)
		{
  			if(arr2.indexOf(element) > -1)
  			{
    			return element = arr2[arr2.indexOf(element)];
 	 		}
		});

		if(isEqual_)
		{
			console.log("end round");

			nextRound_();
		}
	}


	function nextRound_()
	{
		console.log("new round");

		savedItems_ = [];
		checkingArr_ = [];
		itemCount_++;
		isPregame_ = true;

		deleteItems_(true);
		gameContainer_.classList.add("pregame");

		game_();
	}


	function game_()
	{
		clearTimeout(pregameTimer_);

		if(isPregame_)
		{
			getItemsFromArray_(itemCount_);

			pregameTimer_ = setTimeout(function()
			{
				isPregame_ = false;
				getItemsFromArray_();

				deleteItems_(false);
				gameContainer_.classList.remove("pregame");
				handleItemClick_();
				console.log(savedItems_);

			}, pregameTimeout_);
		}
	}

	game_();
}

window.onload = init;