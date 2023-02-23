// Credentials:
const access_key = '53fbf937f06973971de988bb48090a1f';


/** Function to get Crypto Prices when image clicked and to display price below image:
* @param img_index
* @param access_key
* 
* Function gets price of crypto from Coinlayer using the image index
* of our gallery. Then it finds the correct item_index inside of the JSON response
* data fom Coinlayer which will produce a price for your selected coin beneath image.
*/

async function clickedEvent(img_index, access_key){
    let endpoint = 'live'
    let coinSymbol = document.getElementsByTagName('img')[img_index].attributes[2].value
    let response = await fetch(`http://api.coinlayer.com/${endpoint}?access_key=${access_key}&symbols=${coinSymbol}`);
    let data = await response.json();

    document.getElementsByTagName('h4')[img_index].innerHTML = data.rates[coinSymbol]
}


/** Function to get Crypto and run clicked Event to get data:
* @param id
* @param event 
*
* id = image id for gallery image
* event = Mouse event given by the action from our user
*
* Our function will display price of coin from the clickedEvent based on the 
* index of the image.
*/

function getCrypto(id, event){
    event.stopPropagation();
    let cryptoNumber = id.substr(3);
    clickedEvent(cryptoNumber - 1, access_key);
}