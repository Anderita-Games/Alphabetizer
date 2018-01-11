/*  -----------------------
	Made by Andrew Friedman
	3/28/17 10:47 PM
	Shit is real
	-----------------------  */
	
#pragma strict
import System.IO;

var sr : StreamReader;
var line;
var number2 : int;

function Start () {
	sr = new StreamReader("JustEveryWordEver.txt");
	var number = Random.Range(1,144516);
	while (number > number2) {
		line = sr.ReadLine();
		number2++;
	}
	Debug.Log(line);
	Debug.Log(number);
	sr.Close();
} //BEFORE