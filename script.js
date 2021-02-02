var japaneseChar = [
"あ","い","う","え","お",		//	0-4
"か","が","き","ぎ","く",		//	5-9
"ぐ","け","げ","こ","ご",		//	10-14
"さ","ざ","し","じ","す",		//	15-19
"ず","せ","ぜ","そ","ぞ",		//	20-24
"た","だ","ち","ぢ","つ",		//	25-29
"づ","て","で","と","ど",		//	30-34
"な","に","ぬ","ね","の",		//	35-39
"は","ば","ぱ","ひ","び",		//	40-44
"ぴ","ふ","ぶ","ぷ","へ",		//	45-49
"べ","ぺ","ほ","ぼ","ぽ",		//	50-54
"ま","み","む","め","も",		//	55-59
"や","ゆ","よ","ら","り",		//	60-64
"る","れ","ろ","わ","ゐ",		//	65-69
"ゑ","を","ん"]						 	//	70-72

var romanisedJapaneseChar = [
"a","i","u","e","o",				//	0-4
"ka","ga","ki","gi","ku",		//	5-9
"gu","ke","ge","ko","go",		//	10-14
"sa","za","shi","ji","su",	//	15-19
"zu","se","ze","so","zo",		//	20-24
"ta","da","chi","ji","tsu",	//	25-29
"zu","te","de","to","do",		//	30-34
"na","ni","nu","ne","no",		//	35-39
"ha","ba","pa","hi","fi",		//	40-44
"pi","fu","bu","pu","he",		//	45-49
"be","pe","ho","bo","po",		//	50-54
"ma","mi","mu","me","mo",		//	55-59
"ya","yu","yo","ra","ri",		//	60-64
"ru","re","ro","wa","wi",		//	65-69
"we","wo","n"]							//	70-72

function firstLetterUpcase(string)
{
	return string[0].toUpperCase() + string.substring(1);
}

function getRandomNum(max) 
{
  return Math.floor(Math.random()*(max));
}

function createName()
{
	var length = Math.floor(Math.random() * 3) + 2;
	var array = new Array(length);
	var i;
	var tmp;

	for (i=0; i<length; i++)
	{
		tmp = getRandomNum(japaneseChar.length);
		array[i] = tmp; 
	}

	return array;
}

function generateName()
{
	var nameStoring = ["","","",""];
	var buffer;
	var i;
	var j;

	
	for (i=0; i<4; i=i+2)
	{
		buffer = createName();
		console.log(buffer);

		for(j=0; j<buffer.length; j++)
		{
			nameStoring[i] += japaneseChar[buffer[j]];
			nameStoring[i+1] += romanisedJapaneseChar[buffer[j]];
		}
	}
	
	nameStoring[1] = firstLetterUpcase(nameStoring[1]);
	nameStoring[3] = firstLetterUpcase(nameStoring[3]);

	return nameStoring[0]+" "+nameStoring[2]+" ("+nameStoring[1]+" "+nameStoring[3]+")";
}

function nameParser() 
{
  document.getElementById("name").innerHTML = generateName();
}