// Display card

//disply front
function DisplayCard ()
{
	function displyFront(phrase)
	{  
	console.log("***********************");
	console.log("**       FRONT       **");
	console.log("**                   **");
	console.log("** " + phrase +  "   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("**                   **");
	console.log("***********************");
	};

	// display back

	function displayBack(phrase)
	{
	console.log("@@@@@@@@@@@@@@@@@@@@@@@");
	console.log("@@       BACK        @@");
	console.log("@@                   @@");
	console.log("@@ " + phrase +  "   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@                   @@");
	console.log("@@@@@@@@@@@@@@@@@@@@@@@");
	};
}

module.exports = DisplayCard;