#pragma strict
var Import : UnityEngine.UI.InputField;
var Export : UnityEngine.UI.Text;

var Character_Current : int; 
var Word_Current : int;

var Words = new Array ();

var str : String;

function Changer () {
	Character_Current = 1; 
	Word_Current = 1;
	while (Character_Current <= Import.text.length) { 
		if (Import.text.Substring(Character_Current - 1, 1) == " ") {
			Word_Current++;
		}else {
			if (Words.length >= Word_Current + 1) {
				Words[Word_Current] = Words[Word_Current].ToString() + Import.text.Substring(Character_Current - 1, 1); 
			}else {
				Words[Word_Current] = Import.text.Substring(Character_Current - 1, 1); 
			}
		}
		Character_Current++; //Adds one to Character_Current
	}

	Words.Sort();
	var Words_Sorted : String;
	var Word_Current_Current : int = 1; //For putting the words in order
	while (Word_Current >= Word_Current_Current) {
		Words_Sorted = Words_Sorted + " " + Words[Word_Current_Current];
		Word_Current_Current++;
	}
	Export.text = Words_Sorted;
}